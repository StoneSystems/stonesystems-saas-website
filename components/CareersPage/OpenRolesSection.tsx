import { Container, SimpleGrid, Title } from '@mantine/core';
import { IconArrowRight, IconCalendar, IconCoin, IconPointFilled } from '@tabler/icons-react';
import type { HiringRole } from '@/lib/hiring';
import classes from './Careers.module.css';

const CAREERS_EMAIL = 'careers@stonesystems.io';
const detailIcons = [IconCoin, IconCalendar];

interface Props {
  title: string;
  roles: HiringRole[];
}

function RoleCard({ role }: { role: HiringRole }) {
  return (
    <a href={role.href} className={classes.card}>
      <div className={classes.cardInner}>
        <div className={classes.cardTop}>
          <Title order={3} className={classes.cardTitle}>
            {role.title}
          </Title>
          {role.description && <p className={classes.muted}>{role.description}</p>}
        </div>
        <div className={classes.cardBottom}>
          {role.details.length > 0 && (
            <ul className={`${classes.list} ${classes.details}`}>
              {role.details.map((detail, index) => {
                const Icon = detailIcons[index] ?? IconPointFilled;
                return (
                  // eslint-disable-next-line react/no-array-index-key -- static list, duplicates allowed
                  <li key={index} className={classes.detail}>
                    <Icon size={16} stroke={1.75} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                );
              })}
            </ul>
          )}
          <span className={classes.cta}>
            {role.cta}
            <IconArrowRight size={20} stroke={2} aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function OpenRolesSection({ title, roles }: Props) {
  return (
    <section
      id="openings"
      className={`${classes.section} ${classes.grey}`}
      aria-labelledby="careers-openings-title"
    >
      <Container size="lg">
        <div className={classes.stack}>
          <Title order={2} id="careers-openings-title" className={classes.h2}>
            {title}
          </Title>
          {roles.length > 0 ? (
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {roles.map((role) => (
                <RoleCard key={role.href} role={role} />
              ))}
            </SimpleGrid>
          ) : (
            <div className={classes.empty}>
              <p className={classes.body}>No open roles right now.</p>
            </div>
          )}
          <p className={classes.email}>
            Questions about a role? Email <a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>
          </p>
        </div>
      </Container>
    </section>
  );
}
