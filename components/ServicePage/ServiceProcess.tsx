import { Container, Title, Text } from '@mantine/core';
import { SanityServicePage } from '@/lib/servicePage';
import classes from './ServiceProcess.module.css';

/** How it works, then the infographic. The infographic is drawn here so its words stay text. */
export function ServiceProcess({ page }: { page: SanityServicePage }) {
  const { infographic } = page;

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title order={2} className={classes.mainTitle}>
          {page.process.heading}
        </Title>
        <ol className={classes.steps}>
          {page.process.steps.map((step, index) => (
            <li className={classes.step} key={step.title}>
              <span className={classes.stepNumber} aria-hidden="true">
                {index + 1}
              </span>
              <Title order={3} className={classes.stepTitle}>
                {step.title}
              </Title>
              <Text className={classes.stepText}>{step.text}</Text>
            </li>
          ))}
        </ol>

        {infographic && infographic.items.length > 0 && (
          <figure className={classes.figure}>
            <figcaption className={classes.figureHead}>
              <Title order={3} className={classes.figureTitle}>
                {infographic.title}
              </Title>
              {infographic.caption && (
                <Text className={classes.figureCaption}>{infographic.caption}</Text>
              )}
            </figcaption>
            <div className={classes.figureBody}>
              <div className={classes.screen} aria-hidden="true">
                <div className={classes.screenBar}>
                  <span />
                  <span />
                  <span />
                  <i />
                </div>
                {infographic.items.map((item, index) => (
                  <div
                    className={item.highlight ? classes.zoneHighlight : classes.zone}
                    key={item.label}
                  >
                    <b>{index + 1}</b>
                    <div>
                      <i style={{ width: '70%' }} />
                      <i style={{ width: '92%' }} />
                      <i style={{ width: '48%' }} />
                    </div>
                  </div>
                ))}
              </div>
              <ol className={classes.legend}>
                {infographic.items.map((item, index) => (
                  <li
                    className={item.highlight ? classes.legendHighlight : classes.legendItem}
                    key={item.label}
                  >
                    <span className={classes.legendNumber} aria-hidden="true">
                      {index + 1}
                    </span>
                    <div>
                      <Text className={classes.legendLabel}>{item.label}</Text>
                      <Text className={classes.legendText}>{item.text}</Text>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        )}
      </Container>
    </div>
  );
}
