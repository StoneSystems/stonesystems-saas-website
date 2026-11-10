import { Metadata } from 'next';
import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Automated Lead Follow Up',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function AutomatedSMSLeadFollowUpPage() {
  const benefits = [
    {
      title: 'Website Quote Forms',
      description:
        'When a customer uses your website’s chat widget, we automatically send them a text to confirm their request and start the conversation. This helps you stand out and reassures them that you’re handling their inquiry. You’ll also receive a notification to respond promptly.',
      icon: '/images/features/forms.svg',
    },
    {
      title: 'Chat Widget',
      description:
        "When a customer uses the chat widget on your website, we automatically send them a text message to confirm that their request has been received and to kick off the conversation. This sets you apart from the competition and reassures them that their inquiry is being handled. Plus, you'll get a notification so you can respond quickly.",
      icon: '/images/features/message-circle.svg',
    },
    {
      title: 'Missed Call Text Back',
      description:
        "When a customer misses your call, we automatically send them a text to let them know you tried to reach them and start the conversation. This makes you stand out and reassures them that you're ready to help. Plus, you'll get a notification so you can follow up quickly.",
      icon: '/images/features/device-mobile-vibration.svg',
    },
    {
      title: 'Instagram & Facebook Auto Responder',
      description:
        "When a customer messages you on Facebook or Instagram, we automatically message back to let them know you'll get back to them as soon as possible. This makes you stand out and reassures them that you're ready to help. Plus, you'll get a notification so you can follow up quickly.",
      icon: '/images/features/brand-facebook.svg',
    },
  ];

  const statistics = [
    {
      stat: '70%',
      description: 'of people reply within 24 hours to SMS follow-ups',
    },
    {
      stat: '72%',
      description: 'of contractors boost sales with automated follow-ups',
    },
    {
      stat: '97%',
      description: 'of people read SMS messages within 24 hours.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string; icon: string }]}
        title="Automated SMS Lead Follow-Up"
        title2="What is automated SMS lead follow-up?"
        videoSrc="/videos/followup.mp4#t=0.1"
        videoThumbnail="/images/thumbnails/followup.jpg"
      />
    </>
  );
}
