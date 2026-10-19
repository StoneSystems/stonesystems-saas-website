import { Title, Container, Text } from '@mantine/core';
import classes from '@/components/PrivacyPage/PrivacyPage.module.css';
import smsClasses from './SmsPage.module.css';
import { getPolicyReviewInfo } from '@/lib/policyReview';

export function SmsPage() {
  const review = getPolicyReviewInfo('2026-10-19');

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          SMS Program Terms
        </Title>
        <div>
          <Text className={classes.text} fw={600}>
            Effective Date: October 19, 2026
            <br />
            Last Updated: {review.lastUpdated}
          </Text>

          <Text className={classes.text}>
            <strong>Stone Systems LLC</strong> (&quot;Stone Systems,&quot; &quot;we,&quot;
            &quot;us&quot;) sends text messages to business owners who agree to receive them. This
            page explains how you opt in, what we send, how often, and how to opt out or get help.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            1. Program
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Program name:</strong> Stone Systems Appointment &amp; Account Messages
            </li>
            <li className={classes.listItem}>
              <strong>Sender:</strong> Stone Systems LLC (stonesystems.io)
            </li>
            <li className={classes.listItem}>
              <strong>Who receives messages:</strong> business owners who book a call with us, our
              customers, and people who text us first.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            2. Messages you may receive
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Appointment confirmations, reminders, and meeting links for calls you book with us
            </li>
            <li className={classes.listItem}>
              Onboarding messages and support-call reminders for our customers
            </li>
            <li className={classes.listItem}>Account check-ins and billing notices</li>
            <li className={classes.listItem}>Replies to messages you send us</li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            3. How you opt in
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            3.1 Verbal consent on a recorded call
          </Title>
          <Text className={classes.text}>
            You request a call from us through the &quot;Book A Call&quot; form at{' '}
            <a href="https://grow.stonesystems.io">grow.stonesystems.io</a>, which is linked from
            every &quot;Book A Call&quot; button on stonesystems.io. That form only asks us to call
            you. We do not text you because you submitted it.
          </Text>
          <Text className={classes.text}>
            On that call, once your appointment is booked, our team reads this script word for word:
          </Text>
          <div className={smsClasses.script}>
            <Text className={smsClasses.scriptLine}>
              <strong>Stone Systems:</strong> &quot;Is it okay if Stone Systems texts you at this
              number about your appointment, like a confirmation, reminders and the Zoom link?
              Message frequency varies, message and data rates may apply, and you can reply STOP
              anytime to opt out or HELP for help. Do I have your permission to text you?&quot;
            </Text>
            <Text className={smsClasses.scriptLine}>
              <strong>You:</strong> &quot;Yes.&quot;
            </Text>
          </div>
          <Text className={classes.text}>
            We text you only if you say yes. If you say no, we do not text you and we send your
            appointment details by email instead.
          </Text>
          <Text className={classes.text}>
            <strong>Customers:</strong> on your recorded onboarding call, your account manager asks
            the same question before we text you about your account and support.
          </Text>
          <Text className={classes.text}>
            Calls are recorded, and the recordings are kept as our record of your consent.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            3.2 Messages you send us
          </Title>
          <Text className={classes.text}>
            If you text one of our business numbers first, we reply to your messages in that
            conversation.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            4. Your first message
          </Title>
          <Text className={classes.text}>
            Right after you agree, you receive this confirmation:
          </Text>
          <div className={smsClasses.script}>
            <Text className={smsClasses.scriptLine}>
              &quot;Stone Systems: Thanks for booking your call with [rep name] on [day] at [time].
              We&apos;ll text you appointment reminders and your Zoom link. Msg frequency varies.
              Msg &amp; data rates may apply. Reply HELP for help, STOP to opt out.&quot;
            </Text>
          </div>

          <Title order={2} className={classes.secondaryTitle}>
            5. Frequency and cost
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Message frequency varies based on your appointments, your account, and your
              conversations with us.
            </li>
            <li className={classes.listItem}>Message and data rates may apply.</li>
            <li className={classes.listItem}>
              Agreeing to receive text messages is not a condition of any purchase.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            6. Opting out and getting help
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Reply <strong>STOP</strong> to any message to opt out. Other keywords such as STOPALL,
              UNSUBSCRIBE, CANCEL, END, and QUIT also work. You will receive one message confirming
              that you are unsubscribed, and no further texts.
            </li>
            <li className={classes.listItem}>
              Reply <strong>START</strong> to opt back in.
            </li>
            <li className={classes.listItem}>
              Reply <strong>HELP</strong> for help, or contact us at{' '}
              <strong>support@stonesystems.io</strong> or <strong>(808) 645-4509</strong>.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            7. Delivery
          </Title>
          <Text className={classes.text}>
            Carriers are not liable for delayed or undelivered messages.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            8. Privacy
          </Title>
          <Text className={classes.text}>
            No mobile information will be shared with third parties or affiliates for marketing or
            promotional purposes. Text messaging opt-in data and consent are never shared with or
            sold to any third parties, except the service providers that deliver our messages. See
            our <a href="/privacy-policy">Privacy Policy</a> and{' '}
            <a href="/terms">Terms of Service</a> (Section 18, SMS Terms).
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            9. Contact
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
