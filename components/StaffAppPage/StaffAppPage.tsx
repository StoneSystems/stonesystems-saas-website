import { Title, Container, Text } from '@mantine/core';
import classes from '@/components/PrivacyPage/PrivacyPage.module.css';

export function StaffAppPage() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          Stone Staff App Support
        </Title>
        <div>
          <Text className={classes.text} fw={600}>
            Last Updated: November 10, 2026
          </Text>

          <Text className={classes.text}>
            <strong>Stone Staff</strong> is the phone app for the Stone Systems team: the customer
            success managers, team leads, closers and specialists who look after our customers. It
            brings your customer texts, emails and calls to your phone, with the same login and the
            same permissions as CSP on the desktop. It is for Stone Systems staff only.
          </Text>
          <Text className={classes.text}>
            Are you a Stone Systems customer? This is not your app. Use the Stonesystems app, or
            contact your account manager.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            1. Getting access
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Accounts are created by Stone Systems. There is no sign-up in the app.
            </li>
            <li className={classes.listItem}>
              Install the app on your iPhone from the App Store link your team lead shares with you.
            </li>
            <li className={classes.listItem}>
              Sign in with your CSP email and password. Keep <strong>Remember me</strong> on to stay
              signed in, or turn it off to be signed out when the app is closed.
            </li>
            <li className={classes.listItem}>
              The app serves CSMs, CSM team leads, closers, GMB experts and admins. If it says it is
              not available for your account, ask your team lead.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            2. Forgot your password?
          </Title>
          <Text className={classes.text}>
            Reset it from the CSP sign-in page on your computer, then sign in to the app with the
            new password.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            3. Calls and notifications
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Allow the <strong>microphone</strong> and <strong>notifications</strong> when the app
              asks. Without them you cannot talk on a call, and your phone cannot ring.
            </li>
            <li className={classes.listItem}>
              Calls to your line ring your phone like any other call, around the clock, on the lock
              screen too. Your phone&apos;s Do Not Disturb and silent mode apply as usual.
            </li>
            <li className={classes.listItem}>
              On a locked iPhone, slide to answer. To decline, press the side button twice.
            </li>
            <li className={classes.listItem}>
              Not getting calls? Open <strong>Settings → Phone health</strong> in the app to check
              your phone and place a test ring.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            4. Your data and your account
          </Title>
          <Text className={classes.text}>
            In the app, go to <strong>Settings → Account</strong> to request a copy of your data or
            the deletion of your account. You can also email{' '}
            <strong>privacy@stonesystems.io</strong>. We reply to your work email within 30 days.
            See our <a href="/privacy-policy">Privacy Policy</a>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            5. Contact support
          </Title>
          <Text className={classes.text}>
            <strong>Stone Systems LLC</strong>
            <br />
            Email: support@stonesystems.io
            <br />
            Phone: (808) 645-4509
            <br />
            Web: stonesystems.io
          </Text>
        </div>
      </Container>
    </div>
  );
}
