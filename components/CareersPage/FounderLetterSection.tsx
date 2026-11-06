import { Container, Title } from '@mantine/core';
import type { HiringContent } from '@/lib/hiring';
import classes from './Careers.module.css';

type Props = HiringContent['letter'];

export function FounderLetterSection({ title, subtitle, blocks, signature }: Props) {
  return (
    <section
      className={`${classes.section} ${classes.grey}`}
      aria-labelledby="careers-letter-title"
    >
      <Container size="lg">
        <div className={`${classes.stack} ${classes.centered}`}>
          <div className={`${classes.stack} ${classes.headStack} ${classes.centered}`}>
            <Title order={2} id="careers-letter-title" className={classes.h2}>
              {title}
            </Title>
            {subtitle && <p className={classes.muted}>{subtitle}</p>}
          </div>
          <article className={classes.letter}>
            {blocks.map((block) =>
              block.kind === 'quote' ? (
                <blockquote key={block.text} className={classes.quote}>
                  {block.text}
                </blockquote>
              ) : (
                <p key={block.text} className={classes.body}>
                  {block.text}
                </p>
              )
            )}
            <div className={classes.signature} aria-label={`Signed, ${signature}`}>
              {signature}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
