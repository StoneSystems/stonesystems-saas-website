import { Container, Title, Text, Paper } from '@mantine/core';
import {
  IconCircleCheck,
  IconDeviceLaptop,
  IconFileText,
  IconLink,
  IconMapPin,
  IconPhone,
  IconReportAnalytics,
  IconSearch,
  IconStar,
} from '@tabler/icons-react';
import { SanityServicePage, ServiceIncludeIcon } from '@/lib/servicePage';
import classes from './ServiceIncludes.module.css';

const ICONS: Record<ServiceIncludeIcon, typeof IconCircleCheck> = {
  map: IconMapPin,
  star: IconStar,
  website: IconDeviceLaptop,
  search: IconSearch,
  report: IconReportAnalytics,
  phone: IconPhone,
  content: IconFileText,
  link: IconLink,
  check: IconCircleCheck,
};

/** What our service includes. Blue, with the wave back into gray. */
export function ServiceIncludes({ page }: { page: SanityServicePage }) {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title order={2} className={classes.mainTitle}>
          {page.includes.heading}
        </Title>
        {page.includes.intro && <Text className={classes.intro}>{page.includes.intro}</Text>}
        <div className={classes.grid}>
          {page.includes.items.map((item) => {
            const Icon = ICONS[item.icon ?? 'check'] ?? IconCircleCheck;
            return (
              <Paper radius="md" className={classes.card} key={item.title}>
                <span className={classes.icon} aria-hidden="true">
                  <Icon size={30} stroke={1.8} />
                </span>
                <Title order={3} className={classes.cardTitle}>
                  {item.title}
                </Title>
                <Text className={classes.cardText}>{item.text}</Text>
              </Paper>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
