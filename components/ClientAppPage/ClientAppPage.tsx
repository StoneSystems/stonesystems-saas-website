import { Title, Container, Text } from '@mantine/core';
import classes from '@/components/PrivacyPage/PrivacyPage.module.css';

const APP_STORE = 'https://apps.apple.com/us/app/stonesystems/id6808442298';
const GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.stonesystems.app';

/**
 * The public page for the Stonesystems app: what it is, what it does, and exactly how it uses a
 * connected Google Calendar or Outlook calendar. It is the app's home page in Google's and
 * Microsoft's sign-in consoles, so it says in plain words what the privacy policy's section 10.1
 * says in full, and links there.
 */
export function ClientAppPage() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          The Stonesystems App
        </Title>
        <div>
          <Text className={classes.text} fw={600}>
            Last Updated: November 28, 2026
          </Text>

          <Text className={classes.text}>
            <strong>Stonesystems</strong> is the app for Stone Systems customers: home-service
            contractors (roofers, plumbers, electricians, HVAC and more) who run their business from
            their phone. It brings the business&apos;s texts, calls, leads and appointments into one
            place, for the owner and their team. It is published on the{' '}
            <a href={APP_STORE} target="_blank" rel="noreferrer">
              App Store
            </a>{' '}
            and{' '}
            <a href={GOOGLE_PLAY} target="_blank" rel="noreferrer">
              Google Play
            </a>{' '}
            by MVH Management Consultancy LLC, and it also runs in a web browser.
          </Text>
          <Text className={classes.text}>
            Not a Stone Systems customer yet? <a href="/contact">Book a call</a> and we will set you
            up. Stone Systems staff looking for their own app: see{' '}
            <a href="/staff-app">Stone Staff</a>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            1. What the app does
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Inbox.</strong> Every text and call to your business number, with your team,
              in one thread per customer.
            </li>
            <li className={classes.listItem}>
              <strong>Business phone.</strong> Make and take calls from your business number on your
              own phone.
            </li>
            <li className={classes.listItem}>
              <strong>Schedule.</strong> Book appointments for your team. The customer gets a text
              with the time and a link to add it to their calendar or to move or cancel it.
            </li>
            <li className={classes.listItem}>
              <strong>Automations.</strong> A text back when a call is missed, follow-ups on new
              leads, and appointment confirmations and reminders.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            2. Connected calendars: Google Calendar and Outlook
          </Title>
          <Text className={classes.text}>
            You can connect a Google Calendar or an Outlook calendar to the app so that you are
            never double-booked and your appointments appear where you already look. Connecting is
            optional. You do it yourself, in the app, under Settings → Connected calendars, and you
            can disconnect at any time.
          </Text>
          <Text className={classes.text}>
            When you connect a Google account, Google asks you to allow two things, and the app uses
            each for one purpose only:
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>See the list of your calendars.</strong> So you can choose which calendars
              block your availability and which one receives new appointments.
            </li>
            <li className={classes.listItem}>
              <strong>View and edit events on your calendars.</strong> Reading, so that the times
              you are busy on the calendars you choose cannot be booked in the app. Writing, so that
              an appointment booked in the app is added to the one calendar you choose, and is moved
              or removed there when it changes in the app.
            </li>
          </ul>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>What we store.</strong> The start and end times of events that mark you as
              busy, not their titles, descriptions or attendees, plus the appointments we create.
            </li>
            <li className={classes.listItem}>
              <strong>What we never do.</strong> We do not sell this data, share it with third
              parties, use it for advertising, or use it to train artificial intelligence or machine
              learning models. Stone Systems staff do not read your calendar events.
            </li>
            <li className={classes.listItem}>
              <strong>Disconnecting.</strong> Disconnect in the app&apos;s calendar settings and we
              delete the synced calendar data. You can also revoke the app&apos;s access at any time
              at{' '}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">
                myaccount.google.com/permissions
              </a>{' '}
              (Google) or in your Microsoft account&apos;s app permissions (Outlook).
            </li>
          </ul>
          <Text className={classes.text}>
            Stone Systems&apos; use and transfer of information received from Google APIs to any
            other app will adhere to the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            3. Your data and privacy
          </Title>
          <Text className={classes.text}>
            Our <a href="/privacy-policy">Privacy Policy</a> describes everything the app collects
            and why; section 10.1 covers connected calendars in full. Questions about your data:{' '}
            <strong>privacy@stonesystems.io</strong>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            4. Support
          </Title>
          <Text className={classes.text}>
            Your account manager is your first call for anything in the app. For sign-in trouble,
            text or call them from the number you have for Stone Systems.
          </Text>
        </div>
      </Container>
    </div>
  );
}
