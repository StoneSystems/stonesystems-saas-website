'use client';

import { Container, Title, Accordion } from '@mantine/core';
import classes from './Faq.module.css';

export function Faq() {
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.wrapper}>
        <Title ta="center" className={classes.mainTitle}>
          Frequently Asked Questions
        </Title>

        <Accordion chevronSize={50} variant="separated">
          <Accordion.Item bg="var(--yellow)" className={classes.item} value="results">
            <Accordion.Control c="white" className={classes.itemTitle}>
              When am I going to start seeing results?
            </Accordion.Control>
            <Accordion.Panel bg="white" className={classes.itemDescription}>
              This will completely depend on what else you&apos;re doing for advertising, how long
              you&apos;ve been in business, the quality of your work, and of course that you commit
              to using our system. If you think you&apos;re going to close your eyes and pay us
              $297/month a month to solve all your problems, we’re probably not the right fit for
              you. We cannot stress this enough... you have to be doing multiple forms of
              advertising. Stone Systems is meant to provide you a simple, yet extremely effective
              foundational marketing system to help grow and expand your business. We’re here to
              build your online business foundation, not perform miracles. <br />
              <strong>
                <br /> &quot;Explain how you help me grow my business&quot;
                <br />
                <br />
                Sure...
                <br /> <br />
                1. Do you believe having more 5 star reviews will attract more customers? <br />
                <br />
                2. Do you believe that being able to be found online and having a professional
                website that actually works will help you convert more leads into paying customers?{' '}
                <br />
                <br />
                3. Do you believe that instantly following up with incoming leads will make you look
                more professional, therefore leading to more business? <br />
                <br />
                4. Do you believe making sure you&apos;re making the most of every customer you work
                with by putting them into automated re-marketing campaigns will make them more
                likely to work with you again <br />
                <br />
                5. Do you believe offering discounts for friends of your past customers will
                increase the number of referrals you get?
                <br />
                <br />
                6. Do you believe using automation and AI could free you from repeating the same
                basic tasks in your business, therefore giving you more time for other things?
                <br />
                <br />
                7. Do you believe having these systems in place is important to grow your business?
                <br /> <br /> If you believe any of those things can grow your business, that&apos;s
                exactly what we can help you with.
              </strong>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control className={classes.itemTitle}>
              Why is your pricing so cheap?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>
              Our only interest is keeping you for 10+ years. We believe the best way to do that is
              to be priced affordably. We believe if we don&apos;t overcharge and provide you with
              excellent service, you&apos;ll never have a reason to leave.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control className={classes.itemTitle}>
              What happens if I decide to cancel my membership with Stone Systems?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>
              We&apos;ll be extremely sad to see you go, but after a good cry we&apos;ll bounce
              back. However, you will lose access to all the features we set up for you.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control className={classes.itemTitle}>
              Can people find my website on Google?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>
              We make sure every Stone Systems website is set up for Google with the best SEO
              practices. This includes keyword research, adding alt tags, meta tags, and header
              titles, securing an SSL certificate, optimizing for a high Google Speed test score,
              and providing regular updates. Your Google ranking will depend on how long your site’s
              been live, local competition, and factors like your Google My Business reviews. We
              also offer blogging to boost your content. While we don’t handle off-page backlinks
              beyond your social media, our ongoing updates keep your site in great shape—unlike
              some developers who set up your site and then forget about it.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control className={classes.itemTitle}>
              Why should I spend on a website when word of mouth is already pulling in business?
            </Accordion.Control>
            <Accordion.Panel className={classes.itemDescription}>
              We might be a bit biased, but here’s the deal: if each of your customers brings in
              about $500 a year, getting just 2-4 new customers from your website will pay off. We
              know you’ll see great value from your site. It will help you attract new customers,
              make it easier for existing customers to refer you, allow you to run ads if you want,
              and attract bigger clients who value professionalism.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
