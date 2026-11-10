'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme, Container, SimpleGrid, Image } from '@mantine/core';
import classes from './TestimonialSection.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';
import Script from 'next/script';

interface CardProps {
  testimonial: string;
  videoSrc: string;
  videoThumbnail: string;
  personName: string;
}

function Card({ personName, testimonial, videoSrc, videoThumbnail }: CardProps) {
  return (
    <Paper className={classes.video} radius="md">
      <LazyLoadVideo
        src={videoSrc}
        poster={videoThumbnail}
        alt={personName + ' testimonial'}
        type="video/mp4"
        width="100%"
        height="auto"
      />
      <div>
        <div className={classes.stars}>
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
        </div>
        <Text className={classes.testimonial}>{testimonial}</Text>
        <Text className={classes.personName}>{personName}</Text>
      </div>
    </Paper>
  );
}

const data = [
  {
    testimonial: `"Highly recommended, they are here to help us contractors that don't like to deal with the website stuff. It feels like you have partner looking out for you that's actually helping you succeed."`,
    videoSrc: '/videos/Adam1.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Adam1.png',
    personName: '-Adam',
  },
  {
    testimonial: `"I've been working with stonesystems for the last few months and it's been absolutely amazing. If you're out there and you need someone that's gonna be there for you... we love working with stonesystems"`,
    videoSrc: '/videos/Dale.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Dale.png',
    personName: '-Dale',
  },
  {
    testimonial: `"Shoutout to Kai and Remy for an amazing job that they did doing my website. I've been a pain in the butt every now and then but they did it right. Check them out, you won't be dissapointed."`,
    videoSrc: '/videos/George.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/George.png',
    personName: '-George',
  },
  {
    testimonial:
      '"I would highly recommend going with Stone Systems, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them, thank you!"',
    videoSrc: '/videos/Frank.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Frank.jpg',
    personName: '-Frank',
  },
  {
    testimonial: `"They are the absolute best at what they do. They built me a new website and within 10 day's I got my first unpaid for Lead! Best money spent with Kai and StoneSystems"`,
    videoSrc: '/videos/Armando2.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Armando.jpg',
    personName: '-Armando',
  },
  {
    testimonial: `"I've seen a significant improvement in my business. Stone Systems has made my life so much easier!"`,
    videoSrc: '/videos/David.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/David.jpg',
    personName: '-David',
  },
  {
    testimonial: `"If you are looking for someone to get that phone ringing, they're the right fit for you! I'm so happy with them!"`,
    videoSrc: '/videos/Cody.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Cody.jpg',
    personName: '-Cody',
  },
  {
    testimonial:
      '"Nothing but professional and awesome in every way, they are absolutely great to work with"',
    videoSrc: '/videos/Netane.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Netane.jpg',
    personName: '-Netane',
  },
  {
    testimonial: `"They took our website to basic to very high end, and made getting 5 star google reviews easy with their 5 star google review funnel!. I can't say anymore good things about these guys, thank you!"`,
    videoSrc: '/videos/Leader.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Leader.jpg',
    personName: '-Ben',
  },
  {
    testimonial:
      '"Thank you to Kai and Stone Systems , our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!"',
    videoSrc: '/videos/Rick.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Rick.jpg',
    personName: '-Rick',
  },
  {
    testimonial:
      '"Getting 5 star reviews has always given me anxiety, Kai and his team have taken all that away and I have seen a significant increase in business since I started working with them. I would recommend them to anyone looking to grow their business!"',
    videoSrc: '/videos/Wendy.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Wendy.jpg',
    personName: '-Wendy',
  },
  {
    testimonial: `"Their business marketing systems have helped us a lot. Anytime I need anything I can always give them a call. They're super helpful with everything they do, I would recommend them to anybody"`,
    videoSrc: '/videos/Luckie.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Luckie.jpg',
    personName: '-Luckie',
  },
  {
    testimonial:
      '"Before I started working with Stonesystems I was paying $1500/month with another service that just was not working for me. Stonesystems is super affordable and they do a fantastic Job!"',
    videoSrc: '/videos/Lopaka.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Lopaka.jpg',
    personName: '-Lopaka',
  },
  {
    testimonial:
      '"Fantastic product. I use them for my website and my CRM. Anytime I have any questions Kai is always available. I highly recommend StoneSystems"',
    videoSrc: '/videos/Emannuel.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Emannuel.jpg',
    personName: '-Emannuel',
  },
  {
    testimonial: `"It's been great and all I needed was one sale a month to pay for the service. Since I signed up i've gotten quite a bit more than that. I would recommend them to anyone!"`,
    videoSrc: '/videos/Adam.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Adam.jpg',
    personName: '-Adam',
  },
  {
    testimonial: `"Since we've started working with StoneSystems, our website has been on pointer. These guys really know what they're doing and i highly recommend them!"`,
    videoSrc: '/videos/Andrew.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Andrew.jpg',
    personName: '-Andrew',
  },
  {
    testimonial:
      '"After going through 2-3 other people i finally found someone that told me the truth. Really easy to work with and very respectable. I would recommend them to anyone!"',
    videoSrc: '/videos/James.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/James.jpg',
    personName: '-James',
  },
  {
    testimonial: `"Ever since he implemented the new website and landing pages, it's been nothing but great and our conversion has gone way up. We started getting calls almost immediately."`,
    videoSrc: '/videos/Manny.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Manny.jpg',
    personName: '-Manny',
  },
  {
    testimonial:
      '"They were incredibly helpfull and made everything super smooth and efficient. We highly recommend them to anyone that needs top notch web services!"',
    videoSrc: '/videos/Mariah.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Mariah.jpg',
    personName: '-Mariah',
  },
  {
    testimonial: `"They made me a brand new website, super professional and it's been absolutely amazing. I cannot say enough good things about theme. It turned those 100s of viewers into 100s of clients!"`,
    videoSrc: '/videos/Mason.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Mason.jpg',
    personName: '-Mason',
  },
  {
    testimonial: `"First i thought it was a scam, but then it turns out they're just a really good company at a really good price. I would recommend them to anyone!"`,
    videoSrc: '/videos/Matt.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Matt.jpg',
    personName: '-Matt',
  },
  {
    testimonial: `"They've made it so easy with all their automations and the awesome website. I can't thank them enough and you should all definitely check them out"`,
    videoSrc: '/videos/RyanSmith.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/RyanSmith.jpg',
    personName: '-Ryan',
  },
  {
    testimonial: `"He really got everything going well. I'm getting organic leads now that don't cost me any money. I would recommend them to anyone!"`,
    videoSrc: '/videos/William.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/William.jpg',
    personName: '-Scott',
  },
  {
    testimonial:
      '"Big shoutout to Kai and Stone Systems for helping me with my website and getting me more leads. I would recommend them to anyone!"',
    videoSrc: '/videos/Zach.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Zach.jpg',
    personName: '-Zach',
  },
  {
    testimonial: `"Shoutout to Kai from Stone Systems! If you're looking to take your business to the next level, definitely reach out to them. They're great!"`,
    videoSrc: '/videos/Andrew1.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Andrew1.jpg',
    personName: '-Andrew',
  },
  {
    testimonial: `"Shoutout to Kai! If you're looking for someone to help your business grow, this is the guy. I'm getting about 10 times the value of what I'm spending!"`,
    videoSrc: '/videos/Tom.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Tom.jpg',
    personName: '-Tom',
  },
  {
    testimonial: `"I was impressed and shocked by what he included while only charging me so little. He's gone above and beyond, and I would highly recommend him!"`,
    videoSrc: '/videos/Tommy.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Tommy.jpg',
    personName: '-Tommy',
  },
  {
    testimonial: `"I've been through the ringer with these companies man, trying to find a legit company. I can tell you... these guys are the truth, spot on, communication is amazing, give these guys a try"`,
    videoSrc: '/videos/SteveBlack.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/SteveBlack.jpg',
    personName: '-Steve',
  },
  {
    testimonial: `"Shout out to Kai over at StoneSystems, they did a great job on our website. The website makes it super easy for our customers to leave us their information. If you need a good website hit up Kai and StoneSystems"`,
    videoSrc: '/videos/JasonTheorner.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/JasonTheorner.jpg',
    personName: '-Jason',
  },
  {
    testimonial: `"They re-did our website, they are AMAZING at getting you 5 star Google reviews. If you're looking to get your business found on google you need to give StoneSystems a try. We got 5 google reviews within the last 22 hours!. That's amazing, give them a call."`,
    videoSrc: '/videos/Jeslin.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Jeslin.jpg',
    personName: '-Jeslin',
  },
  {
    testimonial: `"I just wanted to give a shout out to Stone Systems for developing my website. I'm very impressed and will definitely be using their marketing in the future."`,
    videoSrc: '/videos/Troy.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Troy.jpg',
    personName: '-Troy',
  },
  {
    testimonial: `"Since working with Stone Systems, we've actually picked up our lead generation. Our clients find it easy to use — they tell me you've made it really easy to get a hold of you. Simple is scalable. I'd say give it a shot!"`,
    videoSrc: '/videos/Kirsten.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Kirsten.jpg',
    personName: '-Kirsten',
  },
  {
    testimonial: `"Shout out to Sebastian and Stone Systems — great job on our website. Really looking forward to working with them more. Thank you so much!"`,
    videoSrc: '/videos/Jeremy.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Jeremy.jpg',
    personName: '-Jeremy',
  },
  {
    testimonial: `"They've done a ton of work for us building our website and getting our Google profile going. We've secured over $350,000 in sales since we started with them in less than four months. Super stoked to be working with those guys!"`,
    videoSrc: '/videos/AlaskaClient.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AlaskaClient.jpg',
    personName: '-Alaska Contractor',
  },
  {
    testimonial: `"Shout out to Stone Systems and Sebastian for being an amazing partner to Upside Roofing — helping us with our website and all the behind-the-scenes work. Everything looks fabulous."`,
    videoSrc: '/videos/UpsideRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/UpsideRoofing.jpg',
    personName: '-Upside Roofing',
  },
  {
    testimonial: `"I cannot be more satisfied. The phones are ringing and these guys do a sensational job. Brian has been the best to work with — I highly recommend Stone Systems to get your business running."`,
    videoSrc: '/videos/Junior.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Junior.jpg',
    personName: '-Junior',
  },
  {
    testimonial: `"Thank you so much for all the support and guidance launching our website. You are top notch — we could not have done it without you. Upside Roofing is lucky to have you."`,
    videoSrc: '/videos/UpsideRoofing2.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/UpsideRoofing2.jpg',
    personName: '-Upside Roofing',
  },
  {
    testimonial: `"Just in our first month with Stone Systems we've gotten several leads. The website is performing wonderfully — we're on the first page of Google. These guys really know what they're doing!"`,
    videoSrc: '/videos/Brandon.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Brandon.jpg',
    personName: '-Brandon',
  },
  {
    testimonial: `"Sebastian was communicative, friendly, and concise. They made me a beautiful website. As a contractor in the modern day, you need these systems in place — it just makes you money at the end of the day."`,
    videoSrc: '/videos/ContractorClient.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/ContractorClient.jpg',
    personName: '-Contractor',
  },
  {
    testimonial: `"Shout out to the boys at Stone Systems — killer work, just outstanding. They were professional from the start. I was very skeptical after other businesses did me wrong, and these guys killed it."`,
    videoSrc: '/videos/Arlan.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Arlan.jpg',
    personName: '-Arlan',
  },
  {
    testimonial: `"Sebastian was a great help — they reworked our website, added a chat widget, and we started getting five-star reviews. Customers can text us from the website and we close jobs faster. I would recommend them to anyone."`,
    videoSrc: '/videos/TomAvery.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/TomAvery.jpg',
    personName: '-Tom',
  },
  {
    testimonial: `"Thank you Stone Systems and especially Sebastian for helping with our SEO. They were attentive and knowledgeable — we've had great success, lots more reviews, and things are moving along really well."`,
    videoSrc: '/videos/SEOClient.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/SEOClient.jpg',
    personName: '-Client',
  },
  {
    testimonial:
      '"Our website looks great. It\'s been really nice and easy to communicate, and I feel very comfortable and confident that we\'re going to be working together for a long time. These guys make this stuff simple and easy for me to understand."',
    videoSrc: '/videos/MalcolmBrosRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/MalcolmBrosRoofing.jpg',
    personName: '-Malcolm Bros Roofing',
  },
  {
    testimonial:
      "\"I've been working with Stone Systems since the first of the year and everything's been going great. They've done what they said they were going to do, made a really nice website, and really beefed up Google. They're a lot more affordable than everybody else.\"",
    videoSrc: '/videos/AdamsDrywallAndPaint.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AdamsDrywallAndPaint.jpg',
    personName: '-Richard',
  },
  {
    testimonial:
      "\"I've been with Stone Systems for a little over a month now and I'm seeing some great ROI. It's really helped me further my online presence with Facebook and Google. Ashley has been fantastic, very responsive. I definitely recommend them.\"",
    videoSrc: '/videos/EdwardsSealcoatingAndAsphaltRepairs.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/EdwardsSealcoatingAndAsphaltRepairs.jpg',
    personName: '-Edwards Sealcoating',
  },
  {
    testimonial:
      '"Shout out to Oscar and Stone Systems for doing a phenomenal job on my website and social media marketing. You guys have propelled my business forward and I couldn\'t thank you enough."',
    videoSrc: '/videos/ASBRenovationDesignBuild.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/ASBRenovationDesignBuild.jpg',
    personName: '-Steve',
  },
  {
    testimonial:
      '"We really needed some help getting leads and building the business more. Just spent some great time with Sebastian from Stone Systems. I was very impressed and I\'m very excited for where we\'re going."',
    videoSrc: '/videos/OutInConcrete.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/OutInConcrete.jpg',
    personName: '-Jenny',
  },
  {
    testimonial:
      '"Oscar is killing it. Stone Systems is really, really impressive so far. The way Oscar took care of the website and how everything is being handled, 100%."',
    videoSrc: '/videos/KenaiConstruction.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/KenaiConstruction.jpg',
    personName: '-Brian',
  },
  {
    testimonial:
      "\"I've been in business for over 30 years and I've done my share of marketing. In a short amount of time there's already buzz with my company. I'm already seeing new interest, and that's really what I signed on for.\"",
    videoSrc: '/videos/GroundworksFlooring.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GroundworksFlooring.jpg',
    personName: '-Marvin',
  },
  {
    testimonial:
      '"Ashley has been amazing through the entire process. She had answers to all my questions, got things taken care of quickly, and her communication was awesome through everything. It\'s been a pleasure to work with her."',
    videoSrc: '/videos/RidgeLineLandscaping.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RidgeLineLandscaping.jpg',
    personName: '-Johnny',
  },
  {
    testimonial:
      '"I\'m not very savvy with computers. Oscar explained everything so well that it was easy for me to understand, and I really appreciate his patience going through the whole process with me. It\'s been a great experience."',
    videoSrc: '/videos/FourSeasonsPaintingServices.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/FourSeasonsPaintingServices.jpg',
    personName: '-Four Seasons Painting',
  },
  {
    testimonial:
      "\"They said it would take seven days, then I got a text: 'We're ready to go, we're three days ahead.' The new website looks fantastic, way better than what I had before. I know gutter guards, not computers, and that's why I'm glad to have these guys helping me.\"",
    videoSrc: '/videos/AffordableGutterGuardsColorado.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AffordableGutterGuardsColorado.jpg',
    personName: '-Donald',
  },
  {
    testimonial:
      '"Stone Systems started helping me out a couple weeks ago and they\'ve been great. Sebastian\'s been awesome, very helpful, always there when you need him. And man, the website is great. We love it."',
    videoSrc: '/videos/AlliedRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AlliedRoofing.jpg',
    personName: '-Miguel',
  },
  {
    testimonial:
      '"The last person that helped me turned into an absolute nightmare, and I\'m not a tech guy whatsoever. Oscar completely made me feel at ease and went above and beyond anything I could have expected. I knew my business was getting more views."',
    videoSrc: '/videos/BrunnerBuilders513.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/BrunnerBuilders513.jpg',
    personName: '-Ash',
  },
  {
    testimonial:
      '"We got a Google denial for our business account and Oscar has been instrumental in working with Google to get our verification back up. I cannot say enough about his communication, his persistence, and his work ethic, even on his days off."',
    videoSrc: '/videos/RawlingsHeatingAndAC.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RawlingsHeatingAndAC.jpg',
    personName: '-Lori',
  },
  {
    testimonial:
      '"They helped build me an amazing website and get me on the map. Hopefully over the next couple months I\'ll be top three in Google and start getting leads without pounding the pavement. Sebastian answers all my questions, typically within an hour."',
    videoSrc: '/videos/BullsEyeExteriors.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/BullsEyeExteriors.jpg',
    personName: '-Brady',
  },
  {
    testimonial:
      "\"I appreciate all your work on the website and everything you've done to help us. It looks amazing. It's nine o'clock at night and these guys are getting back to me, helping me out and trying to help us grow our business.\"",
    videoSrc: '/videos/TheBsRenovationsAndUpgrades.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/TheBsRenovationsAndUpgrades.jpg',
    personName: "-The B's Renovations",
  },
  {
    testimonial:
      '"They helped me get ranked number one in my local area. They\'ve been nothing but amazing, and their AI automation has helped me get much more free time for my company. Thank you Andreas and Stone Systems."',
    videoSrc: '/videos/Rescreening4Less.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Rescreening4Less.jpg',
    personName: '-Rescreening 4 Less',
  },
  {
    testimonial:
      '"With you guys taking care of the web page there is more traffic, more of everything, and a better product. Some leads are word-of-mouth people who didn\'t have my number, went straight to the web page and contacted me. Before, it was a struggle and we got nothing."',
    videoSrc: '/videos/GregsRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GregsRoofing.jpg',
    personName: "-Greg's Roofing",
  },
  {
    testimonial:
      '"He helped me with all the questions I had and the whole process went perfectly smooth. My website is up and rolling and I\'m a happy customer."',
    videoSrc: '/videos/EverClearPools.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/EverClearPools.jpg',
    personName: '-EverClear Pools',
  },
  {
    testimonial:
      '"I was looking for a company that could help me generate leads and build my website back up. They charge a pretty reasonable cost, and in the first 30 days you get your money back if you\'re not satisfied. They\'ve been nothing but easy to deal with."',
    videoSrc: '/videos/WBPaving.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/WBPaving.jpg',
    personName: '-WB Paving',
  },
  {
    testimonial:
      '"I saw Kai\'s ads on Facebook. I thought everybody else was full of it, but I got on a call with them and Sebastian got me hooked up. We got the website rocking on the first day, so I\'m really stoked about this."',
    videoSrc: '/videos/MountainManRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/MountainManRoofing.jpg',
    personName: '-John',
  },
  {
    testimonial:
      '"Been working with Brian. He\'s been great, honest, trustworthy, to the point. And I can see a great line of success for Stone Systems and American Power Wash moving forward."',
    videoSrc: '/videos/AmericanPowerWashingExteriorServices.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AmericanPowerWashingExteriorServices.jpg',
    personName: '-Andrew',
  },
  {
    testimonial:
      '"We are really happy with the work Sebastian has put into our website and our logo design. We appreciate all the time and effort he has put into helping us. We highly recommend not only Stone Systems, but Sebastian."',
    videoSrc: '/videos/BlueJPaintStain.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/BlueJPaintStain.jpg',
    personName: '-Blue J Paint & Stain',
  },
  {
    testimonial:
      '"Within three weeks we launched a website, cleaned up my Google listing, and now I\'m showing up on the front page of Google in my city. On day 15 I received my first lead, a good quality lead in the cities I like to work in. You won\'t be wasting your money."',
    videoSrc: '/videos/CorleyContemporaryPainting.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/CorleyContemporaryPainting.jpg',
    personName: '-Matt',
  },
  {
    testimonial:
      '"Really happy to be on board with these guys. We\'re kind of at a plateau right now, and I think these guys are going to take us to the next step. Looking forward to the partnership."',
    videoSrc: '/videos/ZippysACAndIce.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/ZippysACAndIce.jpg',
    personName: '-Dwayne',
  },
  {
    testimonial:
      '"Working with Miguel over at Stone Systems. He\'s doing a great job onboarding me and I\'m looking forward to my service with them."',
    videoSrc: '/videos/CalabreseTreeCare.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/CalabreseTreeCare.jpg',
    personName: '-Calabrese Tree Care',
  },
  {
    testimonial:
      "\"Working with these guys has been a blast. Super easy, super fun. They're good guys, they'll take care of you. I'm excited to see where they bring us.\"",
    videoSrc: '/videos/ReignHomeServices.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/ReignHomeServices.jpg',
    personName: '-Chris',
  },
  {
    testimonial:
      '"This is a new adventure for myself and my son, and we\'ve started this new process with Stone Systems. Our new CSM is very clear, open-minded, and very honest. I\'m looking forward to getting this process going."',
    videoSrc: '/videos/TruNorthPipe.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/TruNorthPipe.jpg',
    personName: '-Tru North Pipe',
  },
  {
    testimonial:
      '"Fantastic job Sebastian did on the call. Thank you for being professional, amazing, and helpful. He knew what he was talking about, made it easy, and made me feel more relaxed and excited about everything."',
    videoSrc: '/videos/FloorKandyCoatings.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/FloorKandyCoatings.jpg',
    personName: '-Floor Kandy Coatings',
  },
  {
    testimonial:
      '"Shout out to Stone Systems for really looking out for me. They did a really good job and it hasn\'t even been a month. This is an honest review: I was very skeptical at first, but it has been nothing but positive. Five out of five."',
    videoSrc: '/videos/WilliamsDirtWork.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/WilliamsDirtWork.jpg',
    personName: '-Hunter',
  },
  {
    testimonial:
      '"Meeting with Stone Systems, getting information, and getting on board and up and running has been a pleasurable experience. I hope to do more with them in the future."',
    videoSrc: '/videos/HernandezTileAndConstruction.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/HernandezTileAndConstruction.jpg',
    personName: '-Ron',
  },
  {
    testimonial:
      '"The onboarding process was pretty straightforward. Miguel did a good job explaining everything and answered any technical questions. I was very impressed with the presentation."',
    videoSrc: '/videos/LivingAirDesign.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/LivingAirDesign.jpg',
    personName: '-Living Air Design',
  },
  {
    testimonial:
      '"Our major problem was not getting to calls immediately, and customers would move on. Streamlining everything through the website and the instant text-back will really help us increase our revenue and sales. Everything promised in the contract is coming through."',
    videoSrc: '/videos/LighthouseExterminators.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/LighthouseExterminators.jpg',
    personName: '-Lighthouse Exterminators',
  },
  {
    testimonial:
      '"Miguel did an extremely good job explaining everything, going over the details, what is needed from me and what is expected from them. So far I\'m completely satisfied, and the price is very fair."',
    videoSrc: '/videos/FlesnerEnergy.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/FlesnerEnergy.jpg',
    personName: '-Flesner Energy',
  },
  {
    testimonial:
      '"They did an excellent job changing the appearance, the flow, and the overall vibe of the website. We\'re very excited to see what kind of traffic that\'s going to bring us. Very pleased with the responsiveness and attention to detail."',
    videoSrc: '/videos/GatorStrong.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GatorStrong.jpg',
    personName: '-Mike',
  },
  {
    testimonial:
      '"Stone Systems really helped us get our website set up and answered all the questions we had. If you\'re looking to have a company optimize your business, your profile, or your Google listing, I would highly recommend Stone Systems."',
    videoSrc: '/videos/AmericanTreeService.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AmericanTreeService.jpg',
    personName: '-American Tree Service',
  },
  {
    testimonial:
      '"Stone Systems is helping me get my business up and going. It\'s been very, very easy and the communication has been awesome."',
    videoSrc: '/videos/PVTrimmers.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/PVTrimmers.jpg',
    personName: '-PV Trimmers',
  },
  {
    testimonial:
      "\"I've been an HVAC owner a long time and always been skeptical about marketing, especially things you find online. Took a chance, and so far it's been really cool. They've walked me through everything. Very simple, very easy for someone who is not marketing smart at all.\"",
    videoSrc: '/videos/NorthTexasEnvironmental.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/NorthTexasEnvironmental.jpg',
    personName: '-David',
  },
  {
    testimonial:
      '"I looked at the website they put together for me and I was quite impressed with the level of service, patience, and expertise. I don\'t have a lot of experience with computers, and they did a very good job of explaining things and being patient with me."',
    videoSrc: '/videos/RoofcheckRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RoofcheckRoofing.jpg',
    personName: '-Roofcheck Roofing',
  },
  {
    testimonial:
      '"I highly recommend Stone Systems. The onboarding was an amazing experience. It\'s going to bring me a lot of opportunity. It\'s a straightforward system and very user-friendly."',
    videoSrc: '/videos/HartmanPacificConstructionHPC.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/HartmanPacificConstructionHPC.jpg',
    personName: '-Hartman Pacific Construction',
  },
  {
    testimonial:
      '"We\'ve been very pleased with Stone Systems so far. We\'re very excited to get our website up and going and get some more leads from it. Daniel has been extremely helpful throughout the whole process."',
    videoSrc: '/videos/AceKimbleServices.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AceKimbleServices.jpg',
    personName: '-Ace Kimble Services',
  },
  {
    testimonial:
      "\"I've been with other people who promised me everything in the world, and at the end of the day I didn't see things moving. Now it's totally different. You're handling my account from A to Z and keeping it real with me. You're definitely looking out for me.\"",
    videoSrc: '/videos/AllAboutConstruction.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AllAboutConstruction.jpg',
    personName: '-All About Construction',
  },
  {
    testimonial:
      "\"I would rather all the T's be crossed and the I's dotted along the way. I'd happily do Zoom calls with you once a month for the rest of my life. I didn't expect that, and it's clear that you care.\"",
    videoSrc: '/videos/GrandStrandDisposal.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GrandStrandDisposal.jpg',
    personName: '-Grand Strand Disposal',
  },
  {
    testimonial:
      '"Just finished my onboarding call with Miguel. He was great, helpful, made it seamless, and I\'m excited to get started."',
    videoSrc: '/videos/IrishRoofingCompany.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/IrishRoofingCompany.jpg',
    personName: '-Irish Roofing Company',
  },
  {
    testimonial:
      '"The website went up really fast. All the changes I requested were done immediately. It\'s a great bunch of people to work with, and I\'m looking forward to our long-lasting relationship."',
    videoSrc: '/videos/RoofRenu.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RoofRenu.jpg',
    personName: '-Carlos',
  },
  {
    testimonial:
      '"Everything\'s going pretty smooth. They were very transparent with me. I think I\'m going to enjoy this service. Miguel did a wonderful job, great guy."',
    videoSrc: '/videos/U1stServices.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/U1stServices.jpg',
    personName: '-U 1st Services',
  },
  {
    testimonial:
      '"We had a good review history, which gave us a great start, but we\'d hit a plateau. These guys were able to push us beyond that with an updated website and getting us ready for Google Ads. We\'re really looking forward to the future."',
    videoSrc: '/videos/FreshAirSolutionsAndTech.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/FreshAirSolutionsAndTech.jpg',
    personName: '-Sean',
  },
  {
    testimonial:
      '"Honestly, the website looks great and the support is good. You showed me my last review was three weeks ago and the competitor had one two days ago. Google sees that, and it\'s a huge factor. Just because we have 100 reviews doesn\'t mean we should stop."',
    videoSrc: '/videos/CollectiveRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/CollectiveRoofing.jpg',
    personName: '-Collective Roofing',
  },
  {
    testimonial:
      '"I highly recommend Miguel. He really helped out getting this thing launched. I have a good feeling about it. He did a great job and these guys are awesome. Definitely use them."',
    videoSrc: '/videos/QueueElectricalContractors.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/QueueElectricalContractors.jpg',
    personName: '-Queue Electrical Contractors',
  },
  {
    testimonial:
      "\"I get one or two leads almost daily now and I'm able to convert them into jobs. Other marketing companies always wanted more money. With you guys it's been honest, you do what you say. Some people even find me through ChatGPT now, so I know it's working.\"",
    videoSrc: '/videos/BLTreeAndLawnService.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/BLTreeAndLawnService.jpg',
    personName: '-BL Tree and Lawn Service',
  },
  {
    testimonial:
      '"I\'ve been with Stone Systems for about three months. The onboarding was super easy and Zach is very responsive, I get a response back within 12 to 15 hours. I\'ve been getting clients calling me, and my website is just night and day."',
    videoSrc: '/videos/GetOutOfDodge.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GetOutOfDodge.jpg',
    personName: '-Get Out Of Dodge',
  },
  {
    testimonial:
      "\"I've worked with other marketing companies where I didn't get deadlines or execution, just throwing money to the wind. Here it's been great communication, step-by-step plans, and I know what they're going to do and when. It's nice to know everything is being spent well.\"",
    videoSrc: '/videos/PlumbAddictServices.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/PlumbAddictServices.jpg',
    personName: '-Jordan',
  },
  {
    testimonial:
      '"I like the honesty. When I saw you guys on social media I could tell you don\'t BS. So far I\'m happy with everything, and I will definitely refer you to other contractors like myself."',
    videoSrc: '/videos/GeekBayConstruction.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GeekBayConstruction.jpg',
    personName: '-Geek Bay Construction',
  },
  {
    testimonial:
      '"Everything\'s been easy with you guys. You\'ve been real helpful with everything and guided me through things, which is nice."',
    videoSrc: '/videos/NicksPropertyMaintenance.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/NicksPropertyMaintenance.jpg',
    personName: "-Nick's Property Maintenance",
  },
  {
    testimonial:
      '"Big shout out to Stone Systems. As a contractor, I would highly recommend them for marketing. They have been completely awesome so far."',
    videoSrc: '/videos/JunkheadDemolition.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/JunkheadDemolition.jpg',
    personName: '-Junkhead Demolition',
  },
  {
    testimonial:
      '"I just want to thank Miguel for helping me through everything. Very easy-going guy, answered all my questions. Couldn\'t ask for a better CSM."',
    videoSrc: '/videos/LCBCustomKitchenInstalls.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/LCBCustomKitchenInstalls.jpg',
    personName: '-LCB Custom Kitchen Installs',
  },
  {
    testimonial:
      '"Stone Systems has really helped me put together my business. Dave helped me with Google and just about everything else. I strongly suggest you try these guys out, you won\'t be sorry."',
    videoSrc: '/videos/PatchmasterSealcoating.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/PatchmasterSealcoating.jpg',
    personName: '-Patchmaster Sealcoating',
  },
  {
    testimonial:
      '"Miguel with Stone Systems helped us out tremendously getting our Google page verified and our website up and running."',
    videoSrc: '/videos/PatriotPatioSolutions.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/PatriotPatioSolutions.jpg',
    personName: '-Patriot Patio Solutions',
  },
  {
    testimonial:
      '"They built my website and had it up within a week, and the support has been awesome. The phone has started to ring. I\'ve gone through four companies in the past five years, and this is the first company I\'ve actually gotten results with."',
    videoSrc: '/videos/RenewPaverSealing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RenewPaverSealing.jpg',
    personName: '-Renew Paver Sealing',
  },
  {
    testimonial:
      '"I had a really good experience working with Miguel and the team at Stone Systems. The onboarding process was very simple and straightforward. I really like how they work and run their business."',
    videoSrc: '/videos/RiseTile.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RiseTile.jpg',
    personName: '-Rise Tile',
  },
  {
    testimonial:
      "\"He's gone above and beyond. The website looks good, he's been very informative, he's answered all my questions and concerns, and I've been happy so far.\"",
    videoSrc: '/videos/FreshwaterFinish.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/FreshwaterFinish.jpg',
    personName: '-Freshwater Finish',
  },
  {
    testimonial:
      '"A very great job by Stone Systems. Miguel has been doing a great job and we have great communication, which I really appreciate. I believe this is going to work real good for me."',
    videoSrc: '/videos/AllianceDesignAndConstruction.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/AllianceDesignAndConstruction.jpg',
    personName: '-Alliance Design and Construction',
  },
  {
    testimonial:
      "\"It's been a pleasure working with Danny and Stone Systems. He's been a great help getting our website up and running, he's very responsive, and he's already put out a couple of fires for us. Looking forward to seeing the results once we go live.\"",
    videoSrc: '/videos/TheHomeTeamPropertyServices.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/TheHomeTeamPropertyServices.jpg',
    personName: '-The Home Team Property Services',
  },
  {
    testimonial:
      "\"First time I have a guy guiding me through the process. Other guys just told me 'your page is live' in a message, no meeting, no guidance. This is so much better. On a scale of one to ten, I'd give you guys a twenty.\"",
    videoSrc: '/videos/SLPainting.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/SLPainting.jpg',
    personName: '-SL Painting',
  },
  {
    testimonial:
      "\"I've been using Stone Systems for a few months now and I'm getting leads from ChatGPT, which is working really well. Miguel did a fantastic job on my website. If you're thinking about having someone do your website, it's a great opportunity.\"",
    videoSrc: '/videos/Windowpros.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Windowpros.jpg',
    personName: '-Windowpros',
  },
  {
    testimonial:
      "\"He's helped me transform my website and I'm really excited about where it's going. If you're considering somebody to put up a website and do your SEO and all that techy stuff, reach out to Stone Systems. They are great at communicating and you never have problems reaching them.\"",
    videoSrc: '/videos/LucasManagement.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/LucasManagement.jpg',
    personName: '-Tyrone',
  },
  {
    testimonial:
      '"Miguel helped me get my website back up and running and looking good, ready to get some clients coming in. I appreciate Miguel for all the hard work."',
    videoSrc: '/videos/RivasRoofing.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RivasRoofing.jpg',
    personName: '-Erik',
  },
  {
    testimonial:
      '"They set up a good website that\'s easy to navigate, and it\'s already bringing leads just a week or two in. Really happy with them. Simple process, and it was easy to onboard."',
    videoSrc: '/videos/RodriguezRodentDefense.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RodriguezRodentDefense.jpg',
    personName: '-Rodriguez Rodent Defense',
  },
  {
    testimonial:
      '"Miguel helped me a lot setting up my Google business profile and explained everything very thoroughly. I would recommend Miguel and Stone Systems."',
    videoSrc: '/videos/RehConstruction.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RehConstruction.jpg',
    personName: '-Reh Construction',
  },
  {
    testimonial:
      '"I highly recommend Miguel. He helped me with my business and answered all the questions I had. If you need any support or advertising for your business, going with Miguel and Stone Systems is a really good option."',
    videoSrc: '/videos/GenesisPropertyDevelopment.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GenesisPropertyDevelopment.jpg',
    personName: '-Gabriel',
  },
  {
    testimonial:
      "\"They're doing a great job with the website. They're very clear, they know their stuff, and they know marketing. The website looks great and I'm looking forward to what we have next.\"",
    videoSrc: '/videos/GladiatorLandscapingAndDesign.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/GladiatorLandscapingAndDesign.jpg',
    personName: '-Gladiator Landscaping',
  },
  {
    testimonial:
      '"We\'re working with Miguel at Stone Systems. They optimized our website, it looks great, and we\'re excited to see what the results are going to be."',
    videoSrc: '/videos/RoofingSpecialistsOfOhio.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/RoofingSpecialistsOfOhio.jpg',
    personName: '-James',
  },
];

export function TestimonialSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => <Card key={item.videoSrc} {...item} />);

  return (
    <div className={classes.outer}>
      <Title className={classes.mainTitle}>
        The proof is in the pudding...
        <br />
        Let's see what our clients have to say
      </Title>
      <Container size="xl">
        <SimpleGrid cols={mobile ? 1 : 3}>{slides}</SimpleGrid>
      </Container>
      <Script
        src="https://links.stonesystems.io/reputation/assets/review-widget.js"
        strategy="afterInteractive"
      />
      <iframe
        className="lc_reviews_widget"
        src="https://links.stonesystems.io/reputation/widgets/review_widget/8wzvpSrP8kH1ViALeGlE"
        frameBorder="0"
        scrolling="no"
        style={{ minWidth: '100%', width: '100%' }}
      />
    </div>
  );
}
