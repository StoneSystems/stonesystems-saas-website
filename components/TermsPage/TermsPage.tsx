import { Title, Container, Text } from '@mantine/core';
import classes from './TermsPage.module.css';
import { getPolicyReviewInfo } from '@/lib/policyReview';

export function TermsPage() {
  const review = getPolicyReviewInfo('2026-10-19');

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          Terms of Service
        </Title>
        <div>
          <Text className={classes.text} fw={600}>
            Effective Date: May 7, 2026
            <br />
            Last Updated: {review.lastUpdated}
            <br />
            Last Reviewed: {review.lastReviewed}
            <br />
            Next Review Due: {review.nextReviewDue}
          </Text>

          <Text className={classes.text}>
            These Terms of Service constitute an agreement between you and{' '}
            <strong>Stone Systems LLC</strong> (&quot;<strong>Stone Systems</strong>&quot;). These
            Terms of Service (&quot;<strong>Terms</strong>&quot;) bind Stone Systems (&quot;
            <strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;
            <strong>our</strong>&quot;) and you, the individual or entity using our Services (&quot;
            <strong>you</strong>,&quot; &quot;<strong>Client</strong>,&quot; or &quot;
            <strong>your</strong>&quot;). By purchasing, accessing, or using any of our Services —
            or by checking the agreement box at checkout — you confirm that you have read,
            understood, and agree to be bound by these Terms and our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </Text>

          <Text className={classes.text}>
            <strong>IMPORTANT:</strong> These Terms include a{' '}
            <strong>binding arbitration agreement</strong> and a{' '}
            <strong>class action waiver</strong> in <strong>Section 22</strong>. Please read them
            carefully.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            1. Definitions
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Account</strong> — your registered Stone Systems user account.
            </li>
            <li className={classes.listItem}>
              <strong>Client Content</strong> — text, images, logos, business information, customer
              lists, leads, and any other materials you upload to or create within the Services.
            </li>
            <li className={classes.listItem}>
              <strong>Platform</strong> — the Stone Systems software-as-a-service platform,
              including the GoHighLevel-based environment we provide to you under the white-label.
            </li>
            <li className={classes.listItem}>
              <strong>Services</strong> — the Platform, websites we build for you, business phone
              numbers, SMS/MMS messaging, voice, automations, marketing tools, CRM, review tools,
              and any other product or service we make available to you.
            </li>
            <li className={classes.listItem}>
              <strong>Subscription</strong> — your recurring payment arrangement for the Services.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            2. Eligibility and Account
          </Title>
          <Text className={classes.text}>
            You must be at least 18 years old, legally able to enter into a binding contract, and
            acting on behalf of a lawful business to use the Services. You agree to provide accurate
            information when registering and to keep your Account information current. You are
            responsible for all activity under your Account, including activity by your employees,
            contractors, and any other authorized users.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            3. Services
          </Title>
          <Text className={classes.text}>
            We provide marketing technology, websites, automation, and related services to home
            service businesses. The exact features available to you depend on your Subscription
            plan. We may add, modify, or discontinue features from time to time. We will not
            materially reduce the core functionality of your Subscription without notice.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            4. Subscription Plans and Pricing
          </Title>
          <Text className={classes.text}>We currently offer the following plans:</Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>$297/month</strong> — fully built website, access to the Stone Systems
              Platform (web and mobile app), a business phone number for texting and calling, CRM
              access, automations, remarketing, and customer review tools.
            </li>
            <li className={classes.listItem}>
              <strong>$750/month</strong> — all features of the $297 plan, plus full management and
              optimization of Google Local Service Ads.
            </li>
          </ul>
          <Text className={classes.text}>
            Subscriptions are available <strong>month-to-month</strong> or as a{' '}
            <strong>prepaid 3-month commitment</strong>. The 3-month commitment includes a
            complimentary Google Business Profile (GBP) optimization (valued at $400), provided as a
            one-time service at the start of the term.
          </Text>
          <Text className={classes.text}>
            Pricing is subject to change. We will give you at least{' '}
            <strong>30 days&apos; notice</strong> of any price increase, which will take effect at
            the start of your next billing cycle.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            5. Billing, Auto-Renewal, and Payment
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Advance billing.</strong> All Subscription fees are billed in advance of the
              service period.
            </li>
            <li className={classes.listItem}>
              <strong>Auto-renewal.</strong> Your Subscription will automatically renew at the
              then-current rate at the end of each billing cycle until you cancel.
            </li>
            <li className={classes.listItem}>
              <strong>Payment method.</strong> Payments are processed through Stripe. By providing a
              payment method, you authorize us to charge it for all amounts due, including
              Subscription fees, usage charges, and applicable taxes.
            </li>
            <li className={classes.listItem}>
              <strong>Taxes.</strong> All fees are exclusive of taxes. You are responsible for any
              sales, use, value-added, or similar taxes other than taxes on our income.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            6. Usage-Based Charges (Rebillable Costs)
          </Title>
          <Text className={classes.text}>
            In addition to your Subscription fee, you will incur usage-based charges for phone
            numbers, messaging, voice, and number intelligence services. Rates are:
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.usageTable}>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Local phone number</td>
                  <td>$1.15/month</td>
                </tr>
                <tr>
                  <td>Toll-free phone number</td>
                  <td>$2.15/month</td>
                </tr>
                <tr>
                  <td>SMS (US/Canada)</td>
                  <td>$0.0079/segment (inbound and outbound)</td>
                </tr>
                <tr>
                  <td>MMS (US/Canada) outbound</td>
                  <td>$0.02 per message</td>
                </tr>
                <tr>
                  <td>MMS (US/Canada) inbound</td>
                  <td>$0.01–$0.02 per message</td>
                </tr>
                <tr>
                  <td>Voice calls outbound</td>
                  <td>$0.0180/minute</td>
                </tr>
                <tr>
                  <td>Voice calls inbound</td>
                  <td>$0.0085–$0.0220/minute</td>
                </tr>
                <tr>
                  <td>Number intelligence</td>
                  <td>$0.005–$0.01 per function</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            Rates are subject to change with <strong>30 days&apos; notice</strong>.
          </Text>
          <Text className={classes.text}>
            <strong>Digital wallet.</strong> You maintain a digital wallet balance for usage
            charges. When your wallet balance falls below the auto-top-up threshold, we will
            automatically charge your payment method to refill the wallet according to your selected
            preferences. You are responsible for monitoring your wallet and ensuring sufficient
            funds.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            7. No Refund Policy
          </Title>
          <Text className={classes.text}>
            All payments to Stone Systems are <strong>final and non-refundable</strong>, including
            Subscription fees, usage charges, and prepaid commitments. By signing up, you
            acknowledge that our products and Services are custom-built, immediately initiated upon
            payment, and non-reversible once delivery begins.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            8. No Chargebacks
          </Title>
          <Text className={classes.text}>
            You agree <strong>not</strong> to initiate a chargeback or payment dispute for Services
            rendered. Filing a chargeback is a material breach of these Terms. We reserve the right
            to:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              Submit evidence of contract acceptance, Platform usage, and delivery documentation to
              your card issuer.
            </li>
            <li className={classes.listItem}>Suspend or terminate your Account.</li>
            <li className={classes.listItem}>
              Pursue recovery of the disputed amount plus all associated legal, collection, and
              administrative fees.
            </li>
          </ol>

          <Title order={2} className={classes.secondaryTitle}>
            9. Free Trials and Promotions
          </Title>
          <Text className={classes.text}>
            We may offer free trials, discounts, or promotional pricing from time to time. During a
            trial, limited setup may occur for information-gathering purposes; full Services are
            rendered only once paid billing begins. Promotional pricing applies for the period
            stated and reverts to standard pricing thereafter. Discounts do not modify any other
            term of this agreement.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            10. Service Delivery
          </Title>
          <Text className={classes.text}>Services are considered delivered and rendered once:</Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              The Client&apos;s website has been completed and made available.
            </li>
            <li className={classes.listItem}>Platform and automation setup is finalized.</li>
          </ol>
          <Text className={classes.text}>
            Standard build time is <strong>7–10 business days</strong> following receipt of your
            completed onboarding form. Login assistance and onboarding support may be provided but
            are not a prerequisite for fulfillment.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            11. Payment Failures and Suspension
          </Title>
          <Text className={classes.text}>If a payment fails:</Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              We will retry payment up to <strong>4 times over 3 weeks</strong>.
            </li>
            <li className={classes.listItem}>
              If the balance remains unpaid <strong>48 hours</strong> after the first failed
              attempt, your Account and Platform access may be suspended until the balance is paid.
            </li>
            <li className={classes.listItem}>
              If the balance remains unpaid for <strong>30 days</strong>, we may terminate your
              Account and delete or archive Client Content as described in{' '}
              <strong>Section 17</strong>.
            </li>
          </ol>
          <Text className={classes.text}>
            Suspension does not relieve you of the obligation to pay outstanding fees.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            12. Cancellation
          </Title>
          <Text className={classes.text}>
            You may cancel your Subscription at any time through the Platform or by contacting
            support. Cancellation becomes effective at the end of the current billing cycle, and you
            will not be charged thereafter. Early cancellation does <strong>not</strong> entitle you
            to a refund of any prepaid amounts or unused portion of a prepaid term.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            13. Intellectual Property
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            13.1 Our IP
          </Title>
          <Text className={classes.text}>
            The Platform, our software, our website templates, our automations, our marketing
            materials, our brand, and all underlying technology and intellectual property are owned
            by Stone Systems or our licensors. We grant you a{' '}
            <strong>limited, non-exclusive, non-transferable, revocable license</strong> to use the
            Platform and Services solely for your internal business purposes during your
            Subscription. <strong>All rights not expressly granted are reserved.</strong>
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            13.2 Your Content
          </Title>
          <Text className={classes.text}>
            You retain ownership of your Client Content. You grant us a{' '}
            <strong>non-exclusive, worldwide, royalty-free license</strong> to host, store, copy,
            transmit, display, and process Client Content as necessary to provide the Services and
            as permitted by our Privacy Policy.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            13.3 Websites and Domains
          </Title>
          <Text className={classes.text}>
            Websites we build for you are provided to you under the license described in{' '}
            <strong>Section 13.1</strong> and are hosted on our infrastructure. Upon termination of
            your Subscription, <strong>your right to use the website ends</strong>, and we are not
            obligated to transfer the website&apos;s source code, theme, or templates to you. You
            retain ownership of any custom Client Content (text, images, logos) you provided. If you
            registered your domain through us, ownership of the domain registration transfers to you
            upon request and payment of any applicable transfer fees.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            13.4 Feedback
          </Title>
          <Text className={classes.text}>
            If you provide us with suggestions, ideas, or feedback, you grant us an unrestricted,
            perpetual, royalty-free license to use it without obligation to you.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            14. Acceptable Use
          </Title>
          <Text className={classes.text}>You agree NOT to use the Services to:</Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              Send unsolicited messages, spam, or unlawful communications.
            </li>
            <li className={classes.listItem}>
              Send messages without proper consent under the{' '}
              <strong>Telephone Consumer Protection Act (TCPA)</strong>,{' '}
              <strong>CAN-SPAM Act</strong>, A2P 10DLC requirements, or applicable state laws.
            </li>
            <li className={classes.listItem}>
              Violate the privacy of any individual or any state or federal privacy law, including
              CCPA/CPRA, VCDPA, CPA, CTDPA, TDPSA, OCPA, and any other applicable privacy statute.
            </li>
            <li className={classes.listItem}>
              Send messages that are harassing, threatening, defamatory, fraudulent, obscene, or
              otherwise unlawful.
            </li>
            <li className={classes.listItem}>
              Promote illegal activities or regulated industries that violate carrier policies
              (e.g., illegal drugs, firearms in violation of law, gambling without proper
              licensing).
            </li>
            <li className={classes.listItem}>
              Reverse-engineer, decompile, or attempt to derive source code from the Platform.
            </li>
            <li className={classes.listItem}>
              Resell, sublicense, or provide the Services to third parties as a service bureau
              without our written consent.
            </li>
            <li className={classes.listItem}>
              Use the Services to compete with Stone Systems or to build a competing product.
            </li>
            <li className={classes.listItem}>
              Attempt to circumvent any security measures, rate limits, or technical restrictions.
            </li>
            <li className={classes.listItem}>
              Upload viruses, malware, or any code intended to damage or disrupt the Services.
            </li>
          </ol>
          <Text className={classes.text}>
            We may suspend or terminate Accounts engaged in any prohibited activity.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            15. Client Compliance Obligations
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            15.1 You Are Responsible for Your Own Communications
          </Title>
          <Text className={classes.text}>
            When you use the Platform to send SMS, MMS, voice messages, or emails to your customers
            and prospects, <strong>you — not Stone Systems — are the sender</strong>. You are solely
            responsible for:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              <strong>Obtaining valid consent</strong> from every recipient before sending any
              message that requires consent under the TCPA, CAN-SPAM, A2P 10DLC, or applicable state
              law.
            </li>
            <li className={classes.listItem}>
              <strong>Maintaining proof of consent</strong> (e.g., timestamped opt-in records, web
              form submissions, signed authorizations) and producing them on request.
            </li>
            <li className={classes.listItem}>
              <strong>Honoring opt-out requests</strong> (STOP, UNSUBSCRIBE, etc.) immediately and
              on a list-wide basis.
            </li>
            <li className={classes.listItem}>
              <strong>Including required disclosures</strong> (sender identity, opt-out
              instructions, business address) in your communications.
            </li>
            <li className={classes.listItem}>
              <strong>Scrubbing against the National Do Not Call Registry</strong> and any state DNC
              registries before making telemarketing calls or texts to non-customers.
            </li>
            <li className={classes.listItem}>
              <strong>Complying with carrier rules</strong>, including A2P 10DLC registration for
              the campaigns you run.
            </li>
            <li className={classes.listItem}>
              <strong>Complying with state privacy laws</strong> that apply to your processing of
              consumer data (homeowner data, leads, customer lists).
            </li>
          </ol>
          <Title order={3} className={classes.tercaryTitle}>
            15.2 Privacy and Data Protection
          </Title>
          <Text className={classes.text}>
            If you upload personal information about consumers (such as homeowners) to the Platform,{' '}
            <strong>
              you act as the &quot;controller&quot; or &quot;business&quot; under applicable privacy
              laws
            </strong>{' '}
            and Stone Systems acts as the &quot;processor&quot; or &quot;service provider.&quot; A
            separate <strong>Data Processing Addendum (DPA)</strong> governs that relationship and
            is incorporated into these Terms by reference. By uploading personal information to the
            Platform, you represent that you have:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>Provided all required notices to data subjects.</li>
            <li className={classes.listItem}>Obtained all required consents.</li>
            <li className={classes.listItem}>
              The legal right to upload and process the data through the Platform.
            </li>
          </ol>
          <Title order={3} className={classes.tercaryTitle}>
            15.3 You Indemnify Us for Your Communications
          </Title>
          <Text className={classes.text}>
            You agree to indemnify and hold Stone Systems harmless from any claims, fines,
            penalties, or damages arising from your communications or your processing of consumer
            data, as further described in <strong>Section 20</strong>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            16. Call Recording
          </Title>
          <Text className={classes.text}>
            We record sales, onboarding, and support calls between you and Stone Systems for quality
            assurance, training, recordkeeping, and dispute resolution. We provide a verbal notice
            at the start of each call.{' '}
            <strong>By continuing the call, you consent to being recorded.</strong> If you do not
            wish to be recorded, please tell us at the start of the call. See our{' '}
            <a href="/privacy-policy">Privacy Policy</a> for details.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            17. Term and Termination
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            17.1 Term
          </Title>
          <Text className={classes.text}>
            These Terms begin when you accept them and continue until your Subscription is
            terminated.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            17.2 Termination by You
          </Title>
          <Text className={classes.text}>
            You may cancel at any time as described in <strong>Section 12</strong>.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            17.3 Termination by Us
          </Title>
          <Text className={classes.text}>
            We may suspend or terminate your Account and these Terms, with or without notice, if:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>You breach these Terms.</li>
            <li className={classes.listItem}>You fail to pay amounts when due.</li>
            <li className={classes.listItem}>We are required to do so by law.</li>
            <li className={classes.listItem}>
              You engage in conduct that creates legal, regulatory, or reputational risk for us.
            </li>
          </ol>
          <Title order={3} className={classes.tercaryTitle}>
            17.4 Effect of Termination
          </Title>
          <Text className={classes.text}>Upon termination:</Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              Your right to access and use the Services ends immediately.
            </li>
            <li className={classes.listItem}>
              We will retain Client Content for <strong>30 days</strong> following termination to
              allow you to export it. After 30 days, we may delete or archive Client Content.{' '}
              <strong>You are responsible for exporting your data before termination.</strong>
            </li>
            <li className={classes.listItem}>
              Any provisions intended to survive (intellectual property, indemnification, limitation
              of liability, dispute resolution, governing law) will continue.
            </li>
          </ol>

          <Title order={2} className={classes.secondaryTitle}>
            18. SMS Terms (A2P 10DLC)
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            18.1 SMS Disclosure
          </Title>
          <Text className={classes.text}>
            By opting in to our SMS program, you agree to receive text messages from Stone Systems
            LLC related to{' '}
            <strong>
              appointment confirmations and reminders, onboarding and support, account and billing
              notices, and replies to messages you send us
            </strong>
            . We send promotional texts only if you have separately agreed to receive them. Message
            frequency varies. <strong>Message and data rates may apply.</strong>
          </Text>
          <Text className={classes.text}>
            To opt out of SMS communications, reply <strong>STOP</strong> to any message you
            receive. For assistance, reply <strong>HELP</strong> or contact{' '}
            <strong>support@stonesystems.io</strong>. Full program details are on our{' '}
            <a href="/sms">SMS Program Terms</a> page.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            18.2 Messaging Consent
          </Title>
          <Text className={classes.text}>
            You must explicitly consent before we text you. We collect consent verbally on a
            recorded phone call: after you book an appointment with us, our team asks whether we may
            text you and texts you only if you say yes. If you text one of our business numbers
            first, we reply to your messages. The exact consent script is published on our{' '}
            <a href="/sms">SMS Program Terms</a> page. Consent to receive text messages is not a
            condition of any purchase.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            18.3 Message Types and Frequency
          </Title>
          <Text className={classes.text}>
            Messages may include alerts, reminders, promotional offers, updates, and other relevant
            communications. Message frequency varies based on your interactions with us and your
            preferences.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            18.4 Message Delivery
          </Title>
          <Text className={classes.text}>
            Stone Systems does not guarantee that messages will be delivered without delays or
            failures. Such issues can occur due to factors outside our control, such as network
            problems or device compatibility. Carriers are not liable for delayed or undelivered
            messages.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            18.5 Compliance
          </Title>
          <Text className={classes.text}>
            You acknowledge that the messaging service must be used in compliance with all relevant
            laws, including those relating to privacy, telecommunications, and commercial
            communications.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            19. Disclaimers
          </Title>
          <Text className={classes.text}>
            THE SERVICES ARE PROVIDED <strong>&quot;AS IS&quot;</strong> AND{' '}
            <strong>&quot;AS AVAILABLE,&quot;</strong> WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED. STONE SYSTEMS DISCLAIMS ALL WARRANTIES, INCLUDING WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, AND ANY
            WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
          </Text>
          <Text className={classes.text}>
            WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE
            OF VIRUSES OR HARMFUL COMPONENTS. WE DO NOT GUARANTEE ANY SPECIFIC RESULTS, INCLUDING
            NUMBER OF LEADS, SALES, REVENUE, OR SEARCH RANKINGS.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            20. Indemnification
          </Title>
          <Text className={classes.text}>
            You agree to defend, indemnify, and hold harmless Stone Systems and its officers,
            directors, employees, contractors, and agents from and against any third-party claims,
            damages, liabilities, losses, fines, penalties, costs, and expenses (including
            reasonable attorneys&apos; fees) arising out of or relating to:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>Your use of the Services.</li>
            <li className={classes.listItem}>Your Client Content.</li>
            <li className={classes.listItem}>
              Your communications sent through the Services (including TCPA, CAN-SPAM, and CIPA
              claims).
            </li>
            <li className={classes.listItem}>
              Your processing of personal information uploaded to the Platform.
            </li>
            <li className={classes.listItem}>Your violation of these Terms or any law.</li>
            <li className={classes.listItem}>Your violation of any third party&apos;s rights.</li>
          </ol>
          <Text className={classes.text}>
            We will promptly notify you of any claim subject to indemnification, and you will have
            control over the defense and settlement, provided that no settlement may be entered
            without our consent (not unreasonably withheld) if it requires us to admit fault or pay
            any amount.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            21. Limitation of Liability
          </Title>
          <Text className={classes.text}>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              <strong>NO INDIRECT DAMAGES.</strong> STONE SYSTEMS WILL NOT BE LIABLE FOR INDIRECT,
              INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST
              PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF WE HAVE BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </li>
            <li className={classes.listItem}>
              <strong>CAP ON DIRECT DAMAGES.</strong> OUR TOTAL CUMULATIVE LIABILITY UNDER THESE
              TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE{' '}
              <strong>12 MONTHS</strong> PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B){' '}
              <strong>$100</strong>.
            </li>
            <li className={classes.listItem}>
              <strong>BASIS OF THE BARGAIN.</strong> THESE LIMITATIONS APPLY REGARDLESS OF THE BASIS
              OF THE CLAIM (CONTRACT, TORT, STATUTE, OR OTHERWISE) AND ARE A FUNDAMENTAL PART OF THE
              BARGAIN BETWEEN US.
            </li>
          </ol>
          <Text className={classes.text}>
            Some jurisdictions do not allow the exclusion or limitation of certain damages. In those
            jurisdictions, the above limitations apply to the maximum extent permitted by law.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            22. Dispute Resolution; Binding Arbitration; Class Action Waiver
          </Title>
          <Text className={classes.text}>
            <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.</strong>
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            22.1 Informal Resolution
          </Title>
          <Text className={classes.text}>
            Before initiating any formal dispute, you and Stone Systems agree to first attempt to
            resolve the dispute informally by emailing <strong>legal@stonesystems.io</strong> with a
            written description of the dispute. If we cannot resolve it within{' '}
            <strong>30 days</strong>, either party may proceed under this Section.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            22.2 Binding Arbitration
          </Title>
          <Text className={classes.text}>
            You and Stone Systems agree that any dispute arising out of or relating to these Terms
            or the Services will be resolved exclusively by{' '}
            <strong>binding individual arbitration</strong> administered by the{' '}
            <strong>American Arbitration Association (AAA)</strong> under its{' '}
            <strong>Commercial Arbitration Rules</strong>. The arbitration will take place in{' '}
            <strong>Wilmington, Delaware</strong> (or remotely, at the parties&apos; agreement).
            Judgment on the award may be entered in any court of competent jurisdiction.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            22.3 Class Action Waiver
          </Title>
          <Text className={classes.text}>
            <strong>
              YOU AND STONE SYSTEMS AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN
              AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS,
              COLLECTIVE, OR REPRESENTATIVE ACTION.
            </strong>{' '}
            The arbitrator may not consolidate more than one party&apos;s claims and may not preside
            over any form of representative or class proceeding.
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            22.4 Carve-Outs
          </Title>
          <Text className={classes.text}>
            Either party may bring (a) an individual action in <strong>small claims court</strong>,
            or (b) a court action seeking{' '}
            <strong>
              injunctive or equitable relief for infringement or misappropriation of intellectual
              property
            </strong>
            .
          </Text>
          <Title order={3} className={classes.tercaryTitle}>
            22.5 30-Day Right to Opt Out
          </Title>
          <Text className={classes.text}>
            You may opt out of this arbitration agreement by emailing{' '}
            <strong>legal@stonesystems.io</strong> within <strong>30 days</strong> of first
            accepting these Terms with the subject line &quot;Arbitration Opt-Out.&quot; Your email
            must include your name, business name, and a clear statement that you want to opt out.
            Opting out will not affect any other provision of these Terms.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            23. Governing Law and Venue
          </Title>
          <Text className={classes.text}>
            These Terms are governed by the laws of the <strong>State of Delaware</strong>, without
            regard to its conflict-of-law principles. Subject to <strong>Section 22</strong>, any
            action that is not subject to arbitration must be brought exclusively in the state or
            federal courts located in <strong>New Castle County, Delaware</strong>, and the parties
            consent to personal jurisdiction and venue there.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            24. Force Majeure
          </Title>
          <Text className={classes.text}>
            Neither party will be liable for any failure or delay in performance caused by events
            beyond its reasonable control, including acts of God, natural disasters, war, terrorism,
            pandemics, government actions, internet or telecommunications failures, third-party
            platform outages, or labor disputes.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            25. Assignment
          </Title>
          <Text className={classes.text}>
            You may not assign these Terms without our prior written consent. We may assign these
            Terms in connection with a merger, acquisition, financing, or sale of all or
            substantially all of our assets without your consent.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            26. Notices
          </Title>
          <Text className={classes.text}>
            We may provide notices to you by email to the address on your Account, by posting in the
            Platform, or on our website. You may provide notices to us at{' '}
            <strong>legal@stonesystems.io</strong>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            27. Changes to These Terms
          </Title>
          <Text className={classes.text}>
            We may modify these Terms from time to time. If we make material changes, we will notify
            you by email or by posting a notice on the Sites at least <strong>30 days</strong>{' '}
            before the changes take effect. Your continued use of the Services after the effective
            date constitutes your acceptance of the updated Terms.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            28. Miscellaneous
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Entire Agreement.</strong> These Terms (together with the Privacy Policy and
              any DPA or order form) are the entire agreement between you and Stone Systems and
              supersede any prior agreements on the same subject.
            </li>
            <li className={classes.listItem}>
              <strong>Severability.</strong> If any provision is found unenforceable, the remaining
              provisions will remain in effect.
            </li>
            <li className={classes.listItem}>
              <strong>Waiver.</strong> Failure to enforce any right or provision is not a waiver of
              that right or provision.
            </li>
            <li className={classes.listItem}>
              <strong>No third-party beneficiaries.</strong> These Terms do not create any
              third-party beneficiary rights.
            </li>
            <li className={classes.listItem}>
              <strong>Independent contractors.</strong> The parties are independent contractors.
              Nothing in these Terms creates a partnership, joint venture, agency, or employment
              relationship.
            </li>
            <li className={classes.listItem}>
              <strong>Survival.</strong> Sections that by their nature should survive termination
              (including IP, indemnification, limitation of liability, dispute resolution, and
              governing law) will survive.
            </li>
            <li className={classes.listItem}>
              <strong>Headings.</strong> Section headings are for convenience only and do not affect
              interpretation.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            29. Consent and Agreement
          </Title>
          <Text className={classes.text}>
            By purchasing any Services from Stone Systems or checking the agreement box at checkout,
            you confirm that:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              You have read, understood, and agree to these Terms of Service.
            </li>
            <li className={classes.listItem}>
              You accept our <strong>No Refund</strong> policy.
            </li>
            <li className={classes.listItem}>
              You waive the right to initiate chargebacks for Services rendered.
            </li>
            <li className={classes.listItem}>
              You agree to the <strong>binding arbitration agreement</strong> and{' '}
              <strong>class action waiver</strong> in <strong>Section 22</strong> (subject to your
              right to opt out within 30 days).
            </li>
          </ol>

          <Title order={2} className={classes.secondaryTitle}>
            30. Contact
          </Title>
          <Text className={classes.text}>
            <strong>Stone Systems LLC</strong>
            <br />
            Email: legal@stonesystems.io
            <br />
            Privacy: privacy@stonesystems.io
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
