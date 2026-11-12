/** Links to service pages. No Sanity client in here, so browser components can import it. */
export interface ServicePageLink {
  title: string;
  slug: string;
  trade: string;
  service: string;
}

export function servicePagePath(slug: string): string {
  return `/trades/${slug}`;
}

/** The pages of each trade, keyed by the trade name in lower case. */
export function groupByTrade(links: ServicePageLink[]): Record<string, ServicePageLink[]> {
  return links.reduce<Record<string, ServicePageLink[]>>((groups, link) => {
    const key = link.trade.trim().toLowerCase();
    (groups[key] ||= []).push(link);
    return groups;
  }, {});
}
