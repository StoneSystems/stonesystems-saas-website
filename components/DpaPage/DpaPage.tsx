import { Title, Container, Text } from '@mantine/core';
import classes from '@/components/PrivacyPage/PrivacyPage.module.css';
import { SUBPROCESSORS } from '@/lib/subprocessors';

const LAST_UPDATED = 'May 8, 2026';

export function DpaPage() {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          Data Processing Addendum
        </Title>
        <div>
          <Text className={classes.text} fw={700} size="lg">
            Last Updated: {LAST_UPDATED}
          </Text>
          <Text className={classes.text} fw={600}>
            Effective as of: {LAST_UPDATED}
          </Text>

          <Text className={classes.text}>
            This Data Processing Addendum (&quot;<strong>DPA</strong>&quot;) forms part of the
            agreement between <strong>Stone Systems LLC</strong> (&quot;<strong>Processor</strong>
            ,&quot; &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;
            <strong>our</strong>&quot;) and the business entity using our Services (&quot;
            <strong>Controller</strong>,&quot; &quot;<strong>you</strong>,&quot; or &quot;
            <strong>your</strong>&quot;) and applies where we process personal information on your
            behalf in connection with the Services. This DPA supplements your agreement with us and
            our <a href="/privacy-policy">Privacy Policy</a>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            1. Definitions
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Applicable Privacy Laws</strong> means all privacy and data protection laws
              applicable to the processing described in this DPA, including the California Consumer
              Privacy Act as amended by the CPRA, the Virginia Consumer Data Protection Act, the
              Colorado Privacy Act, the Connecticut Data Privacy Act, and similar U.S. state laws,
              each as applicable.
            </li>
            <li className={classes.listItem}>
              <strong>Personal Information</strong> has the meaning given in Applicable Privacy Laws
              and includes any information that identifies, relates to, describes, or could
              reasonably be linked with a consumer or household.
            </li>
            <li className={classes.listItem}>
              <strong>Process / Processing</strong> means any operation performed on Personal
              Information, including collection, use, storage, disclosure, analysis, deletion, or
              disposal.
            </li>
            <li className={classes.listItem}>
              <strong>Services</strong> means the products and services we provide to you under our
              agreement, including the Platform, websites, communications tools, and related
              support.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            2. Roles and scope
          </Title>
          <Text className={classes.text}>
            You are the <strong>business</strong> or <strong>controller</strong> of Personal
            Information you submit to the Services about your customers, leads, or personnel. We act
            as your <strong>service provider</strong> or <strong>processor</strong> and will Process
            that Personal Information only on your documented instructions and as described in this
            DPA and our agreement, unless otherwise required by law.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            3. Processing instructions and restrictions
          </Title>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              We will Process Personal Information only to provide the Services, comply with law, or
              as otherwise agreed in writing.
            </li>
            <li className={classes.listItem}>
              We will not sell Personal Information or retain, use, or disclose Personal Information
              outside the direct business relationship with you, except as permitted by Applicable
              Privacy Laws or our agreement.
            </li>
            <li className={classes.listItem}>
              We will not combine Personal Information received in connection with the Services with
              Personal Information we receive from other sources except as necessary to provide or
              improve the Services, detect security incidents, or as permitted by law.
            </li>
          </ol>

          <Title order={2} className={classes.secondaryTitle}>
            4. Confidentiality and personnel
          </Title>
          <Text className={classes.text}>
            We ensure that persons authorized to Process Personal Information are subject to
            appropriate confidentiality obligations (contractual or statutory). We provide training
            on data protection appropriate to their role.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            5. Sub-processors
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            5.1 Authorized sub-processors
          </Title>
          <Text className={classes.text}>
            You authorize us to engage the sub-processors listed below to Process Personal
            Information on your behalf. We remain responsible for each sub-processor&apos;s
            performance of its obligations in accordance with this DPA.
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Sub-processor</th>
                  <th>Service provided</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {SUBPROCESSORS.map((row) => (
                  <tr key={row.name}>
                    <td>
                      <strong>{row.name}</strong>
                    </td>
                    <td>{row.serviceProvided}</td>
                    <td>{row.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            We may replace or appoint additional sub-processors in accordance with Section 5.2. An
            up-to-date list is published at{' '}
            <a href="/subprocessors">stonesystems.io/subprocessors</a>.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            5.2 Changes to sub-processors
          </Title>
          <Text className={classes.text}>
            We will provide you at least <strong>30 days&apos; advance notice</strong> of a new
            sub-processor or a material change to a sub-processor arrangement, unless we cannot do
            so due to legal or security reasons (in which case we will notify you as soon as
            reasonably practicable). If you object on reasonable data-protection grounds, we will
            work with you in good faith to resolve the objection.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            6. Security
          </Title>
          <Text className={classes.text}>
            We implement and maintain appropriate technical and organizational measures designed to
            protect Personal Information against unauthorized access, loss, or alteration, taking
            into account the nature of processing and the risks involved. Measures may include
            access controls, encryption in transit, logging, vendor reviews, and incident response
            procedures.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            7. Consumer requests and assistance
          </Title>
          <Text className={classes.text}>
            Taking into account the nature of the Processing, we will assist you by appropriate
            technical and organizational measures, insofar as possible, to fulfill your obligation
            to respond to consumer rights requests under Applicable Privacy Laws. Where a request is
            submitted directly to us, we will instruct the requester to contact you unless we are
            legally required to respond directly.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            8. Data retention and deletion
          </Title>
          <Text className={classes.text}>
            We retain Personal Information only as long as necessary to provide the Services and as
            described in our <a href="/privacy-policy">Privacy Policy</a>. Upon termination of the
            Services or upon your written request (subject to legal retention requirements), we will
            delete or return Personal Information in our possession, unless retention is required by
            law.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            9. Audits
          </Title>
          <Text className={classes.text}>
            Upon reasonable written request, we will make available information reasonably necessary
            to demonstrate compliance with this DPA, including summaries of our security practices
            or completed questionnaires. Where an on-site audit is required by Applicable Privacy
            Laws, such audit will be conducted during business hours, with reasonable advance
            notice, and subject to confidentiality and security controls.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            10. International transfers
          </Title>
          <Text className={classes.text}>
            Personal Information may be processed in the United States. If we transfer Personal
            Information across borders where required by law, we will implement appropriate
            safeguards described in our agreement or as otherwise required by Applicable Privacy
            Laws.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            11. Liability
          </Title>
          <Text className={classes.text}>
            Liability arising from our Processing of Personal Information under this DPA is subject
            to the limitations and exclusions in your agreement with us, except where prohibited by
            Applicable Privacy Laws.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            12. Contact
          </Title>
          <Text className={classes.text}>
            For questions about this DPA or our Processing of Personal Information on your behalf,
            contact <strong>privacy@stonesystems.io</strong> or <strong>(808) 645-4509</strong>.
          </Text>
        </div>
      </Container>
    </div>
  );
}
