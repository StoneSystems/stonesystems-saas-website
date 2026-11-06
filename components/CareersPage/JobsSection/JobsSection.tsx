'use client';

import { Container, Title, Accordion, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import { IconArrowRightToArc } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './JobsSection.module.css';

export function JobsSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Open Positions
        </Title>

        <Accordion chevronSize={50} variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control className={classes.itemTitle}>Sales Associate</Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>
              <SimpleGrid cols={mobile ? 1 : 2}>
                <div className={classes.column}>
                  <Text className={classes.jobText}>
                    We are seeking a sales associate with an interest in construction. Our ideal
                    candidate is a closing machine and possesses these qualities:
                  </Text>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>Great communicator</Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Track record of success in selling digital services
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Professional understanding of web design and online marketing services
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Ability to manage multiple clients at various stages of the sales funnel
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Driven by customer satisfaction and rapport
                    </Text>
                  </div>
                </div>
                <div className={classes.column}>
                  <Text className={classes.sectionTitle}>Responsibilities</Text>
                  <Text className={classes.jobText}>
                    The primary responsibility of the sales associate is to generate new sales. You
                    will manage the entire sales process, from handling initial pitches with inbound
                    leads to closing deals. With a strong focus on customer service, you will uphold
                    our excellent reputation. Additionally, you will educate and advise clients on
                    best practices and strategies. Meeting your monthly sales targets will be an
                    essential part of your role.
                  </Text>
                  <Text className={classes.jobText}>
                    Sales background in construction is a major plus.
                  </Text>
                  <Text className={classes.bold}>Job Type: Full-time</Text>
                  <Text className={classes.bold}>Location: Remote</Text>
                  <Text className={classes.bold}>
                    Pay: Hourly + Commission – To be determined based on experience
                  </Text>
                  <Text className={classes.bold}>
                    Please submit your resume and cover letter to careers@stonesystems.io
                  </Text>
                </div>
              </SimpleGrid>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control className={classes.itemTitle}>
              Senior SEO Specialist
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>
              <SimpleGrid cols={mobile ? 1 : 2}>
                <div className={classes.column}>
                  <Text className={classes.jobText}>
                    We are seeking a senior SEO specialist with an interest in construction. Our
                    ideal candidate has extensive experience in search engine optimization and
                    possesses these qualities:
                  </Text>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>Great communicator</Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Track record of success in search engine optimization and interest in
                      continuing education
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Professional writing and/or editorial experience
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Deep understanding of onsite and offsite seo
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Ability to manage multiple client accounts
                    </Text>
                  </div>
                </div>
                <div className={classes.column}>
                  <Text className={classes.sectionTitle}>Responsibilities</Text>
                  <Text className={classes.jobText}>
                    You will manage SEO strategies for multiple clients and internal projects,
                    working with clients from various construction trades and locations. You’ll
                    coordinate closely with our website development, SEM, design, and business
                    development teams, as well as external partners, to ensure clients achieve
                    favorable results. Additionally, you will oversee, mentor, and provide guidance
                    to junior SEO team members.
                  </Text>
                  <Text className={classes.jobText}>
                    SEO background in construction is a major plus.
                  </Text>
                  <Text className={classes.bold}>Job Type: Full-time</Text>
                  <Text className={classes.bold}>Location: Remote</Text>
                  <Text className={classes.bold}>Pay: $75,000.00 – $120,000.00 per year</Text>
                  <Text className={classes.bold}>
                    Please submit your resume and cover letter to careers@stonesystems.io
                  </Text>
                </div>
              </SimpleGrid>
            </Accordion.Panel>{' '}
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control className={classes.itemTitle}>
              Senior Software Engineer
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>
              <SimpleGrid cols={mobile ? 1 : 2}>
                <div className={classes.column}>
                  <Text className={classes.jobText}>
                    We are seeking a software engineer with an interest in construction. Our ideal
                    candidate is a true software geek and possesses these qualities:
                  </Text>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>Great communicator</Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Track record of success in creating software products and systems
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Professional understanding of web design and online marketing services
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Ability to build out complex software systems and products
                    </Text>
                  </div>
                  <div className={classes.listItemDiv}>
                    <IconArrowRightToArc width={24} height={24} />
                    <Text className={classes.listItem}>
                      Driven by customer satisfaction and rapport
                    </Text>
                  </div>
                </div>
                <div className={classes.column}>
                  <Text className={classes.sectionTitle}>Responsibilities</Text>
                  <Text className={classes.jobText}>
                    The primary responsibility of the software engineer is to develop and maintain
                    our software and services. You will manage the codebase for our systems and
                    processes, ensuring that they meet our high standards. With a systems-oriented
                    approach, you will contribute to maintaining our excellent reputation. You will
                    proactively consider how to best serve our clients and build software to meet
                    those needs. Meeting monthly deadlines will also be a key aspect of your role.
                  </Text>
                  <Text className={classes.jobText}>
                    Software Engineering background in construction is a major plus.
                  </Text>
                  <Text className={classes.bold}>Job Type: Full-time</Text>
                  <Text className={classes.bold}>Location: Remote</Text>
                  <Text className={classes.bold}>Pay: $75,000.00 – $120,000.00 per year</Text>
                  <Text className={classes.bold}>
                    Please submit your resume and cover letter to careers@stonesystems.io
                  </Text>
                </div>
              </SimpleGrid>
            </Accordion.Panel>{' '}
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
