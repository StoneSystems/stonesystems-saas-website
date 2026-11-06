import snapshot from '@/data/hiring-snapshot.json';
import {
  HIRING_ORIGIN,
  HiringContent,
  MAX_HIRING_PAGE_BYTES,
  parseHiringPage,
} from './hiring-parse';

export type {
  HiringContent,
  HiringRole,
  HiringItem,
  HiringStep,
  HiringLetterBlock,
} from './hiring-parse';

/** How long a copy of the hiring page is reused before it is read again (decision 42: 5 minutes). */
export const HIRING_REVALIDATE_SECONDS = 300;

export interface HiringResult {
  content: HiringContent;
  source: 'live' | 'snapshot';
}

/**
 * Reads hiring.stonesystems.io on the server. Whatever that page shows is what /careers shows.
 * If the page cannot be reached or no longer looks the way the reader expects, the snapshot
 * saved in data/hiring-snapshot.json is shown instead, so a visitor never sees an error.
 */
export async function getHiringContent(): Promise<HiringResult> {
  try {
    const response = await fetch(`${HIRING_ORIGIN}/`, {
      headers: { accept: 'text/html' },
      next: { revalidate: HIRING_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`hiring page responded ${response.status}`);
    const html = await response.text();
    if (html.length > MAX_HIRING_PAGE_BYTES) {
      throw new Error(`hiring page too large (${html.length})`);
    }
    return { content: parseHiringPage(html), source: 'live' };
  } catch (error) {
    // eslint-disable-next-line no-console -- intentional server-side notice when the live read fails
    console.warn('[careers] using the saved hiring snapshot:', (error as Error).message);
    return { content: snapshot as HiringContent, source: 'snapshot' };
  }
}
