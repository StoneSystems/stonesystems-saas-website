import { Title, Container, Text } from '@mantine/core';
import classes from './PrivacyPage.module.css';
import { getPolicyReviewInfo } from '@/lib/policyReview';

export function PrivacyPage() {
  const review = getPolicyReviewInfo('2026-10-19');

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          Privacy Policy
        </Title>
        <div>
          <Text className={classes.text} fw={600}>
            Effective Date: September 10, 2026
            <br />
            Last Updated: {review.lastUpdated}
            <br />
            Last Reviewed: {review.lastReviewed}
            <br />
            Next Review Due: {review.nextReviewDue}
          </Text>

          <Text className={classes.text}>
            This Privacy Policy applies to the Stone Systems websites, services, and mobile
            application, operated by <strong>Stone Systems LLC</strong> (&quot;Stone Systems,&quot;
            &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). It describes how we collect, use, and
            disclose your information when you respond to our advertisements, visit our websites —
            including <strong>stonesystems.io</strong>, <strong>grow.stonesystems.io</strong>,{' '}
            <strong>app.stonesystems.io</strong>, and <strong>app1.stonesystems.io</strong>{' '}
            (collectively, the &quot;Sites&quot;) — contact us, use our products and services (the
            &quot;Services&quot;), or use the <strong>Stonesystems mobile app</strong> for iOS and
            Android and its web version at <strong>app1.stonesystems.io</strong> (the
            &quot;App&quot;). It also tells you about your privacy rights and how the law protects
            you. By using the Services or the App, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </Text>
          <Text className={classes.text}>
            The Stonesystems mobile app is published on the App Store and Google Play by MVH
            Management Consultancy LLC.
          </Text>
          <Text className={classes.text}>
            This Policy includes specific disclosures required by the laws of California, Colorado,
            Connecticut, Oregon, Texas, Virginia, and other states with comprehensive consumer
            privacy laws.
          </Text>
          <Text className={classes.text}>
            If you have questions, contact us at <strong>privacy@stonesystems.io</strong> or{' '}
            <strong>(808) 645-4509</strong>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            1. Quick Summary
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              We collect contact information, business information, payment information, and online
              activity data.
            </li>
            <li className={classes.listItem}>
              Through the App, we also process the text messages, calls, and contact details that
              our business customers exchange with the people who contact them (their
              &quot;leads&quot;). That data belongs to the business; we process it on the
              business&apos;s behalf.
            </li>
            <li className={classes.listItem}>
              We use information to deliver our Services, market to prospective customers, and run
              our business.
            </li>
            <li className={classes.listItem}>
              We share information with service providers, advertising partners, and as required by
              law. <strong>App data is never shared with advertising partners</strong>, and the App
              contains no advertising or analytics SDKs.
            </li>
            <li className={classes.listItem}>
              We do <strong>not</strong> sell personal information for money. We <strong>do</strong>{' '}
              share certain website information with advertising partners for cross-context
              behavioral advertising — you can opt out at any time.
            </li>
            <li className={classes.listItem}>
              We record sales, onboarding, and support calls. Calls placed through the App are
              recorded only if recording has been enabled for that business&apos;s account; it is
              off by default.
            </li>
            <li className={classes.listItem}>
              You have rights to access, delete, correct, and limit how we use your information. See{' '}
              <strong>Section 13</strong> to exercise them. App users can also request deletion of
              their account from inside the App.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            2. Mobile Communication Policy
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            2.1 Messages we send you
          </Title>
          <Text className={classes.text}>
            We value your privacy and are committed to protecting your personal information. We send
            text messages only to people who have agreed to receive them, as described on our{' '}
            <a href="/sms">SMS Program Terms</a> page. These include appointment confirmations and
            reminders, onboarding and support messages, account and billing notices, and replies to
            messages you send us. We send promotional texts only if you have separately agreed to
            receive them.
          </Text>
          <Text className={classes.text}>
            <strong>
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes.
            </strong>{' '}
            All the categories of sharing described in this Privacy Policy exclude text messaging
            originator opt-in data and consent; this information will not be shared with any third
            parties, excluding the service providers that deliver our text messages.
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any message to opt out at any
              time.
            </li>
            <li className={classes.listItem}>
              <strong>Help:</strong> Reply <strong>HELP</strong> for support.
            </li>
            <li className={classes.listItem}>
              <strong>Frequency:</strong> Message frequency varies based on your interactions with
              us.
            </li>
            <li className={classes.listItem}>
              <strong>Cost:</strong> Message and data rates may apply.
            </li>
            <li className={classes.listItem}>
              <strong>Delivery:</strong> Carriers are not liable for delayed or undelivered
              messages.
            </li>
          </ul>
          <Text className={classes.text}>
            Phone numbers may be processed by service providers (our SMS senders Twilio and Signal
            House, and our CRM, GoHighLevel) only to deliver the messages you have consented to
            receive.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            2.2 Messages sent through the App
          </Title>
          <Text className={classes.text}>
            Our business customers use the App to text and call their own leads from a business
            phone number that we provision for them. Those messages are sent by the business, not by
            Stone Systems; the business is responsible for having the consent it needs to contact
            its leads. Every conversation honors opt-out keywords automatically: a lead who replies{' '}
            <strong>STOP</strong> (or a similar keyword such as UNSUBSCRIBE or CANCEL) is
            unsubscribed from that business&apos;s number and receives no further texts from it
            unless they opt back in by replying <strong>START</strong> or <strong>UNSTOP</strong>.
            Message frequency depends on the lead&apos;s conversation with the business. Standard
            message and data rates apply. Messages are delivered by our telephony carrier, Signal
            House, solely to transmit them.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            3. Information We Collect
          </Title>
          <Text className={classes.text}>
            We collect the following categories of personal information:
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Identifiers</strong>
                  </td>
                  <td>
                    First and last name, email, phone number, postal address, IP address, account
                    username, business name
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Commercial information</strong>
                  </td>
                  <td>Products and Services purchased, subscription tier, billing history</td>
                </tr>
                <tr>
                  <td>
                    <strong>Financial information</strong>
                  </td>
                  <td>Payment card information (processed by Stripe), billing address</td>
                </tr>
                <tr>
                  <td>
                    <strong>Internet activity</strong>
                  </td>
                  <td>
                    Pages visited, links clicked, time on Site, referring URL, device and browser
                    data
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Geolocation (approximate)</strong>
                  </td>
                  <td>
                    City and state derived from IP address — we do not collect precise geolocation
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Audio recordings</strong>
                  </td>
                  <td>
                    Sales, onboarding, and support calls (see <strong>Section 9</strong>); calls
                    placed through the App when recording is enabled for the business&apos;s
                    account, and voicemails left for the business
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Professional information</strong>
                  </td>
                  <td>Job title, trade or industry, business size</td>
                </tr>
                <tr>
                  <td>
                    <strong>Inferences</strong>
                  </td>
                  <td>Profiles built from the above to evaluate fit for our Services</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sensitive personal information</strong>
                  </td>
                  <td>Account login credentials, payment card information</td>
                </tr>
                <tr>
                  <td>
                    <strong>App account data</strong>
                  </td>
                  <td>
                    Your name, work email address, and mobile phone number used to sign in to the
                    App and to verify you; which business accounts you may access and your role in
                    them
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>App content (processed for the business)</strong>
                  </td>
                  <td>
                    The phone numbers and names of the business&apos;s leads; the text messages and
                    photos exchanged with them through the business&apos;s number; call records
                    (time, duration, outcome); voicemails; call recordings where enabled
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>App device data</strong>
                  </td>
                  <td>
                    A push-notification token for your device, its platform (iOS or Android) and App
                    version, and when you last used the App
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>App usage metering</strong>
                  </td>
                  <td>
                    The number of text segments and call minutes used by the business (billed to its
                    Stone Systems account)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            We do <strong>not</strong> knowingly collect: precise geolocation, racial or ethnic
            origin, religious beliefs, sexual orientation, immigration status, genetic data,
            biometric data, health information, or information about children under 16.
          </Text>
          <Text className={classes.text}>
            The App does <strong>not</strong> collect your location, your device&apos;s address
            book, your phone&apos;s own SMS or call log, browsing history, or health or financial
            information, and it does not contain advertising, analytics, or tracking SDKs. The
            microphone is used only during a call you place or answer in the App. The photo library
            is accessed only when you choose a photo to attach to a message. The App does not use
            the camera.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            4. Where We Get Your Information
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Directly from you</strong> — when you fill out a form, book a call, sign up,
              contact us, or sign in to the App.
            </li>
            <li className={classes.listItem}>
              <strong>From your device</strong> — through cookies, pixels, and similar technologies
              on our Sites; through the push-notification token your device issues when you allow
              notifications in the App.
            </li>
            <li className={classes.listItem}>
              <strong>From our business customers</strong> — when a business adds you as an owner or
              staff member of its account, or when a business&apos;s leads contact it (their
              messages and calls reach us through the business&apos;s phone number).
            </li>
            <li className={classes.listItem}>
              <strong>From advertising partners</strong> — Meta, Google, and other ad platforms that
              deliver our advertising.
            </li>
            <li className={classes.listItem}>
              <strong>From service providers</strong> — including our CRM (GoHighLevel), payment
              processor (Stripe), telephony carriers (Twilio and Signal House), and analytics
              providers.
            </li>
            <li className={classes.listItem}>
              <strong>From publicly available sources</strong> — business directories, public
              records, and similar.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            5. How We Use Your Information
          </Title>
          <Text className={classes.text}>
            We use personal information for these business and commercial purposes:
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Provide and operate the Services and the App</strong> — account creation,
              billing, customer support, communications about your account; delivering the
              business&apos;s text messages and calls; sending push notifications for new messages
              and calls; metering text and call usage for billing.
            </li>
            <li className={classes.listItem}>
              <strong>Sales and marketing</strong> — respond to inquiries, follow up on leads, send
              promotional emails and SMS messages (where consented), retarget on advertising
              platforms. App data is not used for marketing.
            </li>
            <li className={classes.listItem}>
              <strong>Analytics and improvement</strong> — understand how the Sites and Services are
              used, diagnose problems, develop new features.
            </li>
            <li className={classes.listItem}>
              <strong>Advertising</strong> — measure ad performance, build lookalike audiences,
              retarget visitors of our Sites. This is &quot;sharing&quot; under California law — see{' '}
              <strong>Section 7</strong>. This does not apply to the App.
            </li>
            <li className={classes.listItem}>
              <strong>Quality assurance and training</strong> — review and use recordings of our own
              sales, onboarding, and support calls to train our team and improve service.
            </li>
            <li className={classes.listItem}>
              <strong>Security and fraud prevention</strong> — detect, investigate, and prevent
              fraudulent or unauthorized activity, including logging every access to a
              business&apos;s account by Stone Systems staff.
            </li>
            <li className={classes.listItem}>
              <strong>Legal compliance</strong> — comply with applicable laws, court orders, and
              regulatory requirements, including telecom messaging rules.
            </li>
            <li className={classes.listItem}>
              <strong>Business operations</strong> — accounting, recordkeeping, audits, corporate
              transactions.
            </li>
          </ul>
          <Text className={classes.text}>
            We will not use your sensitive personal information for purposes other than those
            permitted by California law without first offering you a right to limit such use.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            6. How We Share Your Information
          </Title>
          <Text className={classes.text}>
            We share personal information with the following categories of recipients:
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>
                      Service providers for the Sites and Services (e.g., GoHighLevel, Stripe,
                      hosting providers, email/SMS senders, analytics providers)
                    </strong>
                  </td>
                  <td>To deliver the Services on our behalf under written contract</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Service providers for the App: Supabase (authentication and database), Railway
                      (application hosting), Signal House (telephony carrier that delivers text
                      messages and calls), Apple and Google (push notifications through Apple Push
                      Notification service and Firebase Cloud Messaging), Cloudflare (network
                      security)
                    </strong>
                  </td>
                  <td>
                    To operate the App on our behalf under written contract; each acts only on our
                    instructions
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Advertising partners (e.g., Meta, Google, TikTok, LinkedIn)</strong>
                  </td>
                  <td>
                    To deliver and measure advertising for our Sites — this is &quot;sharing&quot;
                    under California law. App data is never shared with advertising partners
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Professional advisors (lawyers, accountants, auditors)</strong>
                  </td>
                  <td>For legal, accounting, and compliance purposes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Acquirers</strong>
                  </td>
                  <td>In connection with a merger, acquisition, financing, or sale of assets</td>
                </tr>
                <tr>
                  <td>
                    <strong>Government authorities</strong>
                  </td>
                  <td>When required by law, subpoena, or court order</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            We require service providers to use personal information only for the purposes we
            authorize and under contractual obligations of confidentiality and security.
          </Text>
          <Text className={classes.text}>
            <strong>Between a business and its leads.</strong> When you contact one of our business
            customers, your messages, calls, and contact details are shown to the owner and staff of
            that business in the App, and to the Stone Systems staff assigned to that
            business&apos;s account. We process this information as a service provider to the
            business.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            7. Sale and Sharing of Personal Information
          </Title>
          <Text className={classes.text}>
            <strong>We do not sell personal information for money.</strong>
          </Text>
          <Text className={classes.text}>
            We <strong>do share</strong> the following categories of personal information collected
            on our <strong>Sites</strong> with advertising partners for{' '}
            <strong>cross-context behavioral advertising</strong> (which is treated as a
            &quot;sale&quot; or &quot;sharing&quot; under California, Colorado, Connecticut, and
            other state laws):
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>Identifiers (e.g., online identifiers, IP address)</li>
            <li className={classes.listItem}>
              Internet activity (e.g., pages visited, ads clicked)
            </li>
            <li className={classes.listItem}>Inferences</li>
          </ul>
          <Text className={classes.text}>
            You have the right to opt out of this sharing at any time:
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Use the <strong>Do Not Sell or Share My Personal Information</strong> link in our
              website footer (or visit <strong>stonesystems.io/do-not-sell</strong>).
            </li>
            <li className={classes.listItem}>
              Email <strong>privacy@stonesystems.io</strong> with subject line &quot;Opt Out of
              Sale/Sharing.&quot;
            </li>
            <li className={classes.listItem}>
              Enable a <strong>Global Privacy Control (GPC)</strong> signal in your browser — we
              automatically honor GPC for visitors from California, Colorado, Connecticut, and other
              states recognizing universal opt-out signals.
            </li>
          </ul>
          <Text className={classes.text}>
            We do not sell or share any information collected through the App, and we do not
            knowingly sell or share personal information of consumers under 16 years of age.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            8. Cookies, Pixels, and Tracking Technologies
          </Title>
          <Text className={classes.text}>
            We use cookies, pixels, software development kits, and similar technologies on our Sites
            to:
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Keep you logged in and remember your preferences (essential).
            </li>
            <li className={classes.listItem}>
              Measure traffic and performance (analytics — PostHog, Google Analytics).
            </li>
            <li className={classes.listItem}>
              Deliver and measure advertising (Meta Pixel, Google Ads, and similar).
            </li>
          </ul>
          <Text className={classes.text}>
            <strong>The App uses none of these.</strong> It stores only your session and preferences
            on your device, sends no data to advertising or analytics providers, and does not track
            you across other companies&apos; apps or websites.
          </Text>
          <Text className={classes.text}>
            <strong>Managing cookies on the Sites:</strong>
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Cookie preference center:</strong> click the &quot;Cookie Settings&quot; link
              in our footer to accept, reject, or customize cookies.
            </li>
            <li className={classes.listItem}>
              <strong>Browser settings:</strong> most browsers let you block or delete cookies.
            </li>
            <li className={classes.listItem}>
              <strong>Global Privacy Control:</strong> enabling GPC in your browser tells us to opt
              you out of sharing for advertising — we honor this automatically.
            </li>
            <li className={classes.listItem}>
              <strong>Industry opt-outs:</strong>{' '}
              <a href="https://optout.aboutads.info" target="_blank" rel="noreferrer">
                optout.aboutads.info
              </a>{' '}
              and{' '}
              <a href="https://optout.networkadvertising.org" target="_blank" rel="noreferrer">
                optout.networkadvertising.org
              </a>
              .
            </li>
          </ul>
          <Text className={classes.text}>
            We do not use session replay technology on our Sites.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            9. Call Recording
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            9.1 Calls with Stone Systems
          </Title>
          <Text className={classes.text}>
            We record sales, onboarding, and support calls for quality assurance, training,
            recordkeeping, and dispute resolution. At the start of each call, we provide a verbal
            notice that the call is being recorded.{' '}
            <strong>
              By continuing the call after this notice, you consent to being recorded.
            </strong>{' '}
            If you do not wish to be recorded, please tell us at the start of the call and we will
            end or pause the recording.
          </Text>
          <Text className={classes.text}>
            Recordings are stored securely, accessible only to authorized personnel and our service
            providers, and retained as described in <strong>Section 11</strong>.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            9.2 Calls placed or received through the App
          </Title>
          <Text className={classes.text}>
            Calls between a business and its leads are recorded only when call recording has been
            enabled for that business&apos;s account at the request of its owner; recording is off
            by default. When recording is on, the business is responsible for giving any notice and
            obtaining any consent required by the laws that apply to it and to the person it is
            calling (several states require the consent of every party). Recordings and voicemails
            are stored with our hosting provider, encrypted at rest, and are available only to the
            business&apos;s owner and staff and to the Stone Systems staff assigned to the account.
            The business can ask us to turn recording off at any time.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            10. The Stonesystems App
          </Title>
          <Text className={classes.text}>
            The App is provided to businesses that are Stone Systems customers so that their owners
            and staff can text and call their leads from the business&apos;s phone number. Accounts
            are created by Stone Systems for its customers; there is no public sign-up.
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Who is responsible for what.</strong> For your own login and device data,
              Stone Systems is the business (controller). For the business&apos;s leads and their
              conversations, the business is the controller and Stone Systems acts as its service
              provider (processor); we use that data only to provide the App to the business.
            </li>
            <li className={classes.listItem}>
              <strong>Permissions.</strong> The App asks for the microphone (only during calls),
              notifications (for new messages and calls), and the photo library (only when you
              attach a photo). It does not request location, contacts, camera, or access to your
              phone&apos;s SMS or call log.
            </li>
            <li className={classes.listItem}>
              <strong>No tracking.</strong> The App does not track you across other companies&apos;
              apps or websites and contains no advertising or third-party analytics. Diagnostics are
              not collected.
            </li>
            <li className={classes.listItem}>
              <strong>Notifications.</strong> You can turn notifications off in your phone&apos;s
              settings at any time.
            </li>
            <li className={classes.listItem}>
              <strong>Staff access.</strong> Stone Systems staff assigned to a business can open
              that business&apos;s account in the App to provide support. Every such access is
              logged.
            </li>
            <li className={classes.listItem}>
              <strong>Account deletion.</strong> In the App, go to Settings → Account → Request
              account deletion. Your request is completed within 30 days. You can also email{' '}
              <strong>privacy@stonesystems.io</strong>. Deleting your login does not delete the
              business&apos;s conversations, which belong to the business.
            </li>
            <li className={classes.listItem}>
              <strong>Leads&apos; choices.</strong> A lead who no longer wants to receive texts from
              a business can reply STOP at any time; the App honors it automatically.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            11. Data Retention
          </Title>
          <Text className={classes.text}>
            We retain personal information for as long as is necessary to provide the Services and
            the App, fulfill the purposes described in this Policy, comply with our legal and
            accounting obligations, resolve disputes, and enforce our agreements.
          </Text>
          <Text className={classes.text}>Specifically:</Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Data Type</th>
                  <th>Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Customer account records</td>
                  <td>
                    While the account is active, and indefinitely thereafter unless you request
                    deletion or we determine the data is no longer needed for legal, accounting, or
                    legitimate business purposes
                  </td>
                </tr>
                <tr>
                  <td>Marketing leads</td>
                  <td>
                    Indefinitely, until you request deletion or opt out, or until we determine the
                    information is no longer needed
                  </td>
                </tr>
                <tr>
                  <td>Billing and tax records</td>
                  <td>At least 7 years (required by law)</td>
                </tr>
                <tr>
                  <td>Call recordings (sales/onboarding/support)</td>
                  <td>Indefinitely, for training, quality assurance, and dispute resolution</td>
                </tr>
                <tr>
                  <td>Website analytics (identifiable)</td>
                  <td>Up to 26 months</td>
                </tr>
                <tr>
                  <td>Cookies</td>
                  <td>Session-only or up to 13 months, depending on type</td>
                </tr>
                <tr>
                  <td>Support tickets</td>
                  <td>While the account is active and for a reasonable period thereafter</td>
                </tr>
                <tr>
                  <td>App login, verification records, and device push tokens</td>
                  <td>
                    While you have access to a business on the App; deleted within 30 days of a
                    completed account-deletion request
                  </td>
                </tr>
                <tr>
                  <td>App messages, call records, voicemails, and recordings</td>
                  <td>
                    For as long as the business is a Stone Systems customer, then handled under the
                    business&apos;s agreement with Stone Systems
                  </td>
                </tr>
                <tr>
                  <td>App usage metering (text segments and call minutes)</td>
                  <td>With billing records, at least 7 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            You may request deletion at any time as described in <strong>Section 13</strong>. After
            deletion is processed, we may retain limited information necessary to comply with legal
            obligations, resolve disputes, prevent fraud, and enforce our agreements.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            Data Deletion
          </Title>
          <Text className={classes.text}>
            To disconnect your Facebook Page or Instagram account from Stone Systems, or to have the
            connection data deleted, email <strong>support@stonesystems.io</strong> (or ask your
            account manager). We remove the stored Page connection within 48 hours. Stone Systems
            stores only the Page access token, Page name and linked Instagram account needed to
            publish posts you approved; no other Facebook data is kept.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            12. Your Privacy Rights
          </Title>
          <Text className={classes.text}>
            Depending on the state where you reside, you have some or all of the following rights:
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Right</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Right to know / access</strong>
                  </td>
                  <td>Get a copy of the personal information we have about you</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to delete</strong>
                  </td>
                  <td>Request deletion of your personal information</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to correct</strong>
                  </td>
                  <td>Fix inaccurate personal information</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to portability</strong>
                  </td>
                  <td>Receive your information in a portable format</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to opt out of sale/sharing</strong>
                  </td>
                  <td>
                    Stop us from sharing your information for cross-context behavioral advertising
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to limit use of sensitive PI</strong>
                  </td>
                  <td>Restrict use of sensitive personal information to limited purposes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to non-discrimination</strong>
                  </td>
                  <td>
                    We will not deny services, charge different prices, or provide a different
                    quality of service for exercising your rights
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to appeal</strong>
                  </td>
                  <td>
                    If we deny your request, you can appeal (Virginia, Colorado, Connecticut, Texas,
                    Oregon)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            If you are a lead of one of our business customers and your request concerns the
            messages or calls you exchanged with that business, we will forward your request to the
            business or direct you to it, because that business controls the information.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            13. How to Exercise Your Rights
          </Title>
          <Text className={classes.text}>
            You can submit a request in any of the following ways:
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Web form:</strong>{' '}
              <a href="https://stonesystems.io/privacy-request" target="_blank" rel="noreferrer">
                stonesystems.io/privacy-request
              </a>
            </li>
            <li className={classes.listItem}>
              <strong>Email:</strong> privacy@stonesystems.io
            </li>
            <li className={classes.listItem}>
              <strong>Phone:</strong> (808) 645-4509
            </li>
            <li className={classes.listItem}>
              <strong>In the App:</strong> Settings → Account → Request account deletion
            </li>
          </ul>
          <Text className={classes.text}>We will:</Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Acknowledge your request within <strong>10 business days</strong>.
            </li>
            <li className={classes.listItem}>
              Respond within <strong>45 days</strong>. If we need more time, we will notify you and
              may extend by an additional 45 days.
            </li>
            <li className={classes.listItem}>
              Provide the first request in any 12-month period at <strong>no charge</strong>.
            </li>
          </ul>
          <Text className={classes.text}>
            <strong>Verification.</strong> To protect your information, we will ask you to confirm
            details we already have on file (such as your email address and the last interaction we
            had with you). We may ask for additional verification if the request involves sensitive
            information.
          </Text>
          <Text className={classes.text}>
            <strong>Authorized agents.</strong> You may designate an authorized agent to make a
            request on your behalf. We will require written, signed authorization, and we will
            verify the identity of the consumer.
          </Text>
          <Text className={classes.text}>
            <strong>Appeals.</strong> If we deny your request and you reside in Virginia, Colorado,
            Connecticut, Texas, or Oregon, you may appeal by emailing{' '}
            <strong>privacy@stonesystems.io</strong> with subject line &quot;Appeal.&quot; We will
            respond within <strong>45 days</strong> (Virginia, Connecticut, Oregon) or{' '}
            <strong>60 days</strong> (Colorado, Texas).
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            14. State-Specific Disclosures
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            14.1 California (CCPA / CPRA)
          </Title>
          <Text className={classes.text}>In the past 12 months, we have:</Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Collected</strong> the categories of personal information listed in{' '}
              <strong>Section 3</strong>.
            </li>
            <li className={classes.listItem}>
              <strong>Disclosed for a business purpose</strong> to service providers and
              professional advisors.
            </li>
            <li className={classes.listItem}>
              <strong>Shared</strong> for cross-context behavioral advertising with advertising
              partners (see <strong>Section 7</strong>) — website data only.
            </li>
            <li className={classes.listItem}>
              <strong>Not sold</strong> personal information for monetary consideration.
            </li>
            <li className={classes.listItem}>
              <strong>Not knowingly collected or sold</strong> personal information of consumers
              under 16.
            </li>
          </ul>
          <Text className={classes.text}>
            California residents may also designate an authorized agent. We do not offer financial
            incentives in exchange for personal information.
          </Text>
          <Text className={classes.text}>
            You may also request information about disclosures we have made for direct marketing
            purposes under California&apos;s &quot;Shine the Light&quot; law by emailing{' '}
            <strong>privacy@stonesystems.io</strong>.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            14.2 Colorado (CPA), Connecticut (CTDPA), and Oregon (OCPA)
          </Title>
          <Text className={classes.text}>
            Residents of Colorado, Connecticut, and Oregon have the rights described in{' '}
            <strong>Section 12</strong>, including the right to opt out of targeted advertising,
            sale, and certain profiling. We honor Global Privacy Control as a universal opt-out
            signal.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            14.3 Virginia (VCDPA)
          </Title>
          <Text className={classes.text}>
            Virginia residents have the rights described in <strong>Section 12</strong>. We do not
            engage in profiling that produces legal or similarly significant effects.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            14.4 Texas (TDPSA)
          </Title>
          <Text className={classes.text}>
            Texas residents have the rights described in <strong>Section 12</strong>. As required by
            Texas law:{' '}
            <strong>
              We do NOT sell sensitive personal data. We do NOT collect or sell biometric personal
              data.
            </strong>
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            14.5 Other States
          </Title>
          <Text className={classes.text}>
            Residents of other states with comprehensive privacy laws (including Utah, Iowa,
            Montana, Tennessee, Indiana, Florida, Delaware, New Jersey, New Hampshire, Kentucky,
            Maryland, Minnesota, and Rhode Island) have the rights granted by the laws of their
            state. Contact us as described in <strong>Section 13</strong> to exercise them.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            15. Children&apos;s Privacy
          </Title>
          <Text className={classes.text}>
            The Sites and Services are not directed to children under 16, and the App is a business
            tool intended for adults 18 and older. We do not knowingly collect personal information
            from children under 16. If you believe we have collected information from a child under
            16, contact <strong>privacy@stonesystems.io</strong> and we will delete it.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            16. Data Security
          </Title>
          <Text className={classes.text}>
            The security of your personal information is important to us. We use reasonable
            administrative, technical, and physical safeguards to protect personal information,
            including encryption in transit (TLS), encryption at rest with our hosting providers,
            access controls, logging of staff access to customer accounts, and vendor due diligence.
            However, no method of transmission over the Internet or method of electronic storage is
            100% secure. While we strive to use commercially acceptable means to protect your
            personal data, we cannot guarantee its absolute security.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            17. International Users
          </Title>
          <Text className={classes.text}>
            The Sites, Services, and App are operated from the United States. If you access them
            from outside the United States, your information will be transferred to and processed in
            the United States. By using them, you consent to that transfer.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            18. Third-Party Links
          </Title>
          <Text className={classes.text}>
            The Sites may contain links to third-party websites and services. This Policy does not
            apply to those third parties. We encourage you to read their privacy policies.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            19. Changes to This Privacy Policy
          </Title>
          <Text className={classes.text}>
            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date
            at the top reflects the most recent change. If we make material changes, we will notify
            you by posting a notice on the Sites or in the App, or by email. We will update this
            Privacy Policy at least once every 12 months.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            20. Contact Us
          </Title>
          <Text className={classes.text}>
            <strong>Stone Systems LLC</strong>
            <br />
            Email: privacy@stonesystems.io
            <br />
            Phone: (808) 645-4509
            <br />
            Web: stonesystems.io/privacy-request
          </Text>
          <Text className={classes.text}>
            For privacy-specific questions, please use <strong>privacy@stonesystems.io</strong>{' '}
            rather than general support channels.
          </Text>
        </div>
      </Container>
    </div>
  );
}
