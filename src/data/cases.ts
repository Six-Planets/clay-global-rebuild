export type CaseImage = {
  src: string
  width: number
  height: number
  alt?: string
}

export type CaseSection =
  | { type: 'heading'; title: string }
  | { type: 'text'; title?: string; body: string[] }
  | { type: 'image'; image: CaseImage; full?: boolean }
  | { type: 'gallery'; images: CaseImage[] }
  | { type: 'quote'; text: string; attribution: string }

export type CaseStudy = {
  slug: string
  client: string
  tagline: string
  roles: string[]
  summary: string[]
  hero: CaseImage
  sections: CaseSection[]
  overview: string
}

const sanity = (file: string, query = 'q=80&fit=clip&auto=format') =>
  `https://cdn.sanity.io/images/r115idoc/production/${file}?w=1920&${query}`

export const cases: Record<string, CaseStudy> = {
  marqeta: {
    slug: 'marqeta',
    client: 'Marqeta',
    tagline: 'Website and digital branding for a modern card-issuing platform',
    roles: ['Web Design', 'Content', 'Interaction Design', '3D Design', 'Development'],
    summary: [
      'Marqeta, a modern card-issuing platform, hired us to revamp their marketing site and visual identity.',
      'Our goal was to create a captivating product-focused narrative that leveraged 3D elements and interactive graphics.',
      'By maintaining the connection to the physical card, we demonstrated the key advantages, flexibility, and scalability of the services in a compelling way.',
    ],
    hero: {
      src: sanity('03266f6c1b39099f7fdca5a98fbe33dc15e9b814-1408x1760.png'),
      width: 1408,
      height: 1760,
    },
    overview:
      'A full website and digital brand transformation for Marqeta, using a product-focused narrative driven by 3D, interaction, and content design.',
    sections: [
      {
        type: 'gallery',
        images: [
          {
            src: sanity('2269d88b731009f53cda8fd57f1566c9b894bb30-2040x2620.png'),
            width: 2040,
            height: 2620,
            alt: 'a hand holding a phone with the Marqeta app homescreen',
          },
          {
            src: sanity('d27eff9215c47cb89c2d01296c88a511f897477a-2000x3200.png'),
            width: 2000,
            height: 3200,
          },
        ],
      },
      { type: 'heading', title: 'The Card Journey' },
      {
        type: 'text',
        body: [
          'Companies use Marqeta to issue both physical and virtual cards. We sought to explain this offering with a simple visual language, which we achieved by drawing user attention to an evolving card across the homepage.',
          'Our design approach harmonized realistic forms and materials along with vector and text objects. The result is a truly balanced UI, featuring proper distribution of accents and delightful animations.',
        ],
      },
      {
        type: 'heading',
        title: 'Enhancing Conversion',
      },
      {
        type: 'text',
        body: [
          'The micro-animations were utilized to bring the objects into focus, showcasing Marqeta’s solutions through unique visual storytelling.',
        ],
      },
      {
        type: 'heading',
        title: 'Beyond the Homepage',
      },
      {
        type: 'text',
        body: [
          'Incorporating visual vignettes to present different features was a key aspect of the homepage. For consistency, a similar content structure was applied to the inner pages of the site.',
        ],
      },
      {
        type: 'image',
        image: {
          src: sanity('7e2061f2125a7998f71c9d94cee5cac24335bbe2-3840x2400.png'),
          width: 3840,
          height: 2400,
        },
        full: true,
      },
      { type: 'heading', title: 'Responsive & Easy To Update' },
      {
        type: 'text',
        body: [
          'The fully responsive website was built and hosted on Wordpress VIP to ensure superior performance and convenience for updating.',
        ],
      },
      {
        type: 'gallery',
        images: [
          {
            src: sanity('296fd000d83572a8d1f728b433c4d0865e02bc50-752x1624.png'),
            width: 752,
            height: 1624,
            alt: 'Marqeta page optimized for mobile',
          },
          {
            src: sanity('2a3440e36faa7fbc7a2c792de0c6a559ebc1878b-3840x2400.png'),
            width: 3840,
            height: 2400,
            alt: 'Web Marqeta page',
          },
        ],
      },
    ],
  },
  slack: {
    slug: 'slack',
    client: 'Slack',
    tagline: "Designing and building Slack's interactive demo experience",
    roles: ['Web Design', 'Enterprise', 'Development'],
    summary: [
      'Slack needed an interactive, self-guided demonstration of their platform that could live on their marketing site.',
      'We designed and built a browser-based demo letting prospects experience Slack workflows without signing up.',
    ],
    hero: {
      src: sanity('6b77ca4f728393ffb788bda0ec15e5c8d58f6494-1408x1408.png'),
      width: 1408,
      height: 1408,
    },
    overview:
      'An interactive demo experience for Slack that brings the product to life directly inside the browser.',
    sections: [
      { type: 'heading', title: 'The Challenge' },
      {
        type: 'text',
        body: [
          'Enterprise software is difficult to explain. Slack’s value lives in the everyday motion of teams collaborating, something static screenshots rarely convey.',
          'We needed a way to let prospects feel the product before touching it — a guided story that walked through real workflows in real time.',
        ],
      },
      {
        type: 'heading',
        title: 'The Experience',
      },
      {
        type: 'text',
        body: [
          'We produced an animated, interactive journey that reconstructs Slack’s interface with hand-built motion and believable micro-interactions.',
          'Every step balanced cinematic pacing with honest product accuracy, so the demo both delighted and informed.',
        ],
      },
      {
        type: 'quote',
        text: 'The demo turned a feature walkthrough into an experience people want to watch and replay.',
        attribution: 'Slack Marketing Team',
      },
      {
        type: 'heading',
        title: 'Building for the Web',
      },
      {
        type: 'text',
        body: [
          'Built as a performant web experience that runs across devices, the demo remains a durable marketing asset reflecting Slack’s design language.',
        ],
      },
    ],
  },
  sky: {
    slug: 'sky',
    client: 'Sky',
    tagline: 'Branding and visual identity for an innovative DeFi platform',
    roles: ['Branding', 'Design System', 'UI/UX', 'Illustration', '3D'],
    summary: [
      'Sky is a decentralized finance platform that needed a brand with the depth and seriousness to match its technology.',
      'We developed a complete identity system spanning strategy, UI/UX, illustration, and 3D visual language.',
    ],
    hero: {
      src: sanity('e26675c8b7d988ef9f5672d0c7134bd98938ee4e-1408x1760.png'),
      width: 1408,
      height: 1760,
    },
    overview:
      'A full brand identity and design system for a DeFi platform, uniting strategy, product UI, illustration, and 3D.',
    sections: [
      { type: 'heading', title: 'Strategy First' },
      {
        type: 'text',
        body: [
          'DeFi brands are often cold and technical. We positioned Sky around clarity and trust, treating the brand as an interface layer between people and complex financial rail.',
        ],
      },
      {
        type: 'heading',
        title: 'A Living Identity',
      },
      {
        type: 'text',
        body: [
          'The identity combines a flexible geometric mark, a bespoke illustration system, and a 3D language used across product and marketing touchpoints.',
        ],
      },
      {
        type: 'gallery',
        images: [
          {
            src: sanity('e26675c8b7d988ef9f5672d0c7134bd98938ee4e-1408x1760.png'),
            width: 1408,
            height: 1760,
          },
        ],
      },
      {
        type: 'heading',
        title: 'From Brand to Product',
      },
      {
        type: 'text',
        body: [
          'Components of the design system carry the brand into the product itself, keeping every screen on-brand without sacrificing legibility.',
        ],
      },
    ],
  },
  'stc-bank': {
    slug: 'stc-bank',
    client: 'STC Bank',
    tagline: 'Accelerating the future of digital banking in Saudi Arabia',
    roles: ['Web App', 'Mobile', 'Website', 'Fintech', 'UI/UX'],
    summary: [
      'STC Bank set out to become the leading digital bank in Saudi Arabia, starting with the launch of their STC Pay ecosystem.',
      'We designed the consumer and business banking apps and the surrounding web ecosystem end-to-end.',
    ],
    hero: {
      src: sanity('c24c4091f58a6d1936e98443a65e3b55ab62d807-1408x1760.jpg'),
      width: 1408,
      height: 1760,
    },
    overview:
      "End-to-end product design for Saudi Arabia's leading digital bank, from mobile apps to the web ecosystem.",
    sections: [
      { type: 'heading', title: 'Designing for a New Bank' },
      {
        type: 'text',
        body: [
          'With a young, mobile-first population, STC Bank had the rare opportunity to build banking from scratch — no legacy systems, no inherited conventions.',
        ],
      },
      {
        type: 'heading',
        title: 'Simplicity at Scale',
      },
      {
        type: 'text',
        body: [
          'We designed a financial experience that feels effortless: clear money movement, honest error handling, and a visual system that stays calm under heavy data.',
        ],
      },
      {
        type: 'quote',
        text: 'They needed to move at startup speed with enterprise trust. We built a design practice to match both.',
        attribution: 'Clay Product Team',
      },
    ],
  },
  snapchat: {
    slug: 'snapchat',
    client: 'Snapchat',
    tagline: 'Integrating augmented reality to elevate social commerce',
    roles: ['UI/UX', 'Mobile App', 'Ecommerce'],
    summary: [
      'Snapchat wanted to bring augmented reality into the purchase journey, letting people try products before they buy.',
      'We designed the AR shopping experience woven into Snapchat’s social commerce surfaces.',
    ],
    hero: {
      src: sanity('497a19813ef0abbaac382786b7719fbe80393f97-1408x1408.png'),
      width: 1408,
      height: 1408,
    },
    overview:
      'AR-powered social commerce for Snapchat, turning try-on moments into a confident purchase path.',
    sections: [
      { type: 'heading', title: 'Trying Before Buying' },
      {
        type: 'text',
        body: [
          'Augmented reality removes the biggest barrier in ecommerce: uncertainty. We made the try-on moment the centerpiece, not the gimmick.',
        ],
      },
      {
        type: 'heading',
        title: 'Native by Design',
      },
      {
        type: 'text',
        body: [
          'The experience lives inside Snapchat’s camera-first flow, using lenses as the entry point to product discovery and checkout.',
        ],
      },
    ],
  },
  'joe-and-the-juice': {
    slug: 'joe-and-the-juice',
    client: 'Joe & The Juice',
    tagline: 'A digital commerce and loyalty app for a global coffee shop chain',
    roles: ['UI/UX', 'Mobile App', 'Consumer'],
    summary: [
      'Joe & The Juice needed a digital home for its fast-growing community of coffee and juice fans.',
      'We crafted a new app and visual identity that carries the brand’s energetic personality into mobile commerce and loyalty.',
    ],
    hero: {
      src: sanity('97a548b33e4c3e939ec22f5a3802cddf791340f4-1408x1760.png'),
      width: 1408,
      height: 1760,
    },
    overview:
      'A new mobile app, commerce flow, and visual identity for a global chain of coffee shops and juice bars.',
    sections: [
      { type: 'heading', title: 'Energy in Code' },
      {
        type: 'text',
        body: [
          'Joe & The Juice is loud, playful, and fast. The app had to feel like the stores — bold typography, music-driven energy, and an unmistakable point of view.',
        ],
      },
      {
        type: 'heading',
        title: 'Commerce That Feels Like the Brand',
      },
      {
        type: 'text',
        body: [
          'From ordering to loyalty rewards, every interaction reinforces the brand. We rebuilt the visual identity to scale across cups, stores, and screens.',
        ],
      },
    ],
  },
  vantara: {
    slug: 'vantara',
    client: 'Vantara',
    tagline: 'Website design and development for a landmark animal conservation center',
    roles: ['UI/UX', 'Design System', 'Website', '3D', 'Development'],
    summary: [
      'Vantara is a groundbreaking animal conservation center that needed a digital presence worthy of its mission.',
      'We designed and built a website combining cinematic storytelling, 3D, and a full design system.',
    ],
    hero: {
      src: sanity('513b71bee2d6aea1faba4c7232d2518c107632c3-704x880.png'),
      width: 704,
      height: 880,
    },
    overview:
      'A cinematic website and design system for one of the world’s landmark animal conservation centers.',
    sections: [
      { type: 'heading', title: 'A Mission That Demands Craft' },
      {
        type: 'text',
        body: [
          'Vantara’s story is about the future of conservation. We approached the site as a piece of visual advocacy, pairing 3D moments with real stewardship narratives.',
        ],
      },
      {
        type: 'heading',
        title: 'Bringing the Natural World Online',
      },
      {
        type: 'text',
        body: [
          'The design system supports dozens of stories, immersive galleries, and educational content — all built to stay fast and accessible everywhere.',
        ],
      },
    ],
  },
  grayscale: {
    slug: 'grayscale',
    client: 'Grayscale',
    tagline: "Web redesign for the world's largest crypto asset manager",
    roles: ['Web Design', 'Design System', 'Illustration'],
    summary: [
      'Grayscale manages billions in digital assets — but its brand needed to feel as trustworthy as the institutions it serves.',
      'We redesigned their website and built an illustration-led system that demystifies crypto for a mainstream audience.',
    ],
    hero: {
      src: sanity('a987dd78b64fb593712cb041cc3cd74b9e143087-704x880.png'),
      width: 704,
      height: 880,
    },
    overview:
      'A website redesign for the world’s largest crypto asset manager, grounded in a new illustration system.',
    sections: [
      { type: 'heading', title: 'Trust as a Design Material' },
      {
        type: 'text',
        body: [
          'Crypto moves fast; institutional trust moves slowly. Grayscale needed a web presence that communicated stability without feeling old.',
        ],
      },
      {
        type: 'heading',
        title: 'Illustration That Explains',
      },
      {
        type: 'text',
        body: [
          'We developed a custom illustration style that turns complex financial concepts into simple, human visuals across the entire site.',
        ],
      },
    ],
  },
  discover: {
    slug: 'discover',
    client: 'Discover',
    tagline: 'Design partnership focused on mobile app innovation',
    roles: ['UI/UX', 'Design System', 'Fintech'],
    summary: [
      'Discover partnered with us on an ongoing design engagement to evolve their mobile banking experience.',
      'Over multiple release cycles we established a scalable design system and a stream of app innovations.',
    ],
    hero: {
      src: sanity('69f1c6a2e5da2eb5f75df328d69fc47d49f4e007-704x704.png'),
      width: 704,
      height: 704,
    },
    overview:
      'A long-running design partnership bringing mobile app innovation and a durable design system to Discover.',
    sections: [
      { type: 'heading', title: 'A Partnership, Not a Project' },
      {
        type: 'text',
        body: [
          'As a partner embedded in Discover’s product teams, we helped shape features, ship releases, and keep a large organization moving in one visual direction.',
        ],
      },
      {
        type: 'heading',
        title: 'Design System as the Backbone',
      },
      {
        type: 'text',
        body: [
          'A shared component language let multiple squads ship consistently, cutting design and development time across the portfolio.',
        ],
      },
    ],
  },
  tipalti: {
    slug: 'tipalti',
    client: 'Tipalti',
    tagline: 'Web redesign for a modern payables automation platform',
    roles: ['UI/UX', 'Design System', 'Fintech', 'Website'],
    summary: [
      'Tipalti automates global payables — a category that’s complex and hard to describe quickly.',
      'We redesigned their web presence to communicate scale, reliability, and modern design in equal measure.',
    ],
    hero: {
      src: sanity('d4cf3aa6515e4e161dd473bf4b9c34952e691557-1408x1408.png'),
      width: 1408,
      height: 1408,
    },
    overview:
      'A web redesign for a modern payables automation platform, sharpening communication and elevating the design system.',
    sections: [
      { type: 'heading', title: 'Making Complexity Feel Simple' },
      {
        type: 'text',
        body: [
          'Global payables involve tax, compliance, and currency — the redesign had to make that complexity feel manageable and secure.',
        ],
      },
      {
        type: 'heading',
        title: 'A New Design System',
      },
      {
        type: 'text',
        body: [
          'We rebuilt the component system powering the site, making it faster to produce pages and easier for Tipalti’s team to maintain long-term.',
        ],
      },
    ],
  },
  wealth: {
    slug: 'wealth',
    client: 'Wealth',
    tagline: 'Designing a self-service digital estate planning platform',
    roles: ['Branding', 'UI/UX', 'Website', 'Design System'],
    summary: [
      'Wealth is making estate planning accessible to everyone — a category historically reserved for lawyers and the affluent.',
      'We delivered a brand, product UI, and website that make an intimidating topic feel calm and empowering.',
    ],
    hero: {
      src: sanity('d44de656a2d62bcb75c5ee69f1d20051cfb82ee3-1408x1760.png'),
      width: 1408,
      height: 1760,
    },
    overview:
      'Brand, product, and web design for a self-service digital estate planning platform built for everyone.',
    sections: [
      { type: 'heading', title: 'Removing the Fear' },
      {
        type: 'text',
        body: [
          'Estate planning is emotional and legal and personal all at once. Our brand language uses warmth to reduce that anxiety while keeping legal credibility intact.',
        ],
      },
      {
        type: 'heading',
        title: 'A Guided Journey',
      },
      {
        type: 'text',
        body: [
          'The product walks users through their estate one step at a time — the design system keeps each step clear, calm, and consistent across devices.',
        ],
      },
    ],
  },
  'art-bridges': {
    slug: 'art-bridges',
    client: 'Art Bridges',
    tagline: 'Website redesign for a niche nonprofit organization',
    roles: ['Website', 'Development', 'Web Design'],
    summary: [
      'Art Bridges shares American art with communities across the United States.',
      'We redesigned their site to make a deep collection navigable, joyful, and accessible for every kind of visitor.',
    ],
    hero: {
      src: sanity('444421694fbaca1e5e0952eabf451d4533837469-704x880.png'),
      width: 704,
      height: 880,
    },
    overview:
      'A website redesign for a nonprofit sharing American art, balancing accessibility with a rich editorial experience.',
    sections: [
      { type: 'heading', title: 'Art for Every Audience' },
      {
        type: 'text',
        body: [
          'Museum-goers, educators, and curious browsers all arrive with different needs. The redesign gives each an equal path through the collection.',
        ],
      },
      {
        type: 'heading',
        title: 'Built to Give Back Time',
      },
      {
        type: 'text',
        body: [
          'Editors needed to publish exhibitions without engineering support. The publishing workflow was rebuilt around a friendly CMS and reusable patterns.',
        ],
      },
    ],
  },
  'yahoo-games': {
    slug: 'yahoo-games',
    client: 'Yahoo! Games',
    tagline: 'Website design and development for Yahoo Games',
    roles: ['Web Design', 'Design System', 'Illustration', 'Development'],
    summary: [
      'Yahoo! Games brings millions of people together to play — across web, mobile, and casual titles.',
      'We designed and built a bold, playful experience that makes discovering and launching games feel effortless and fun.',
    ],
    hero: {
      src: sanity('cb9d37fa3a45e1eb9b5b3e36a6c46f7f724ed237-1408x1760.png'),
      width: 1408,
      height: 1760,
    },
    overview:
      'A playful website design and development for Yahoo! Games, built around personality, presence, and speed-to-play.',
    sections: [
      { type: 'heading', title: 'A Bold Playground' },
      {
        type: 'text',
        body: [
          'Games deserve more personality than the average portal. We gave Yahoo! Games a distinctive visual language — vibrant illustration, confident type, and motion that rewards scrolling.',
        ],
      },
      {
        type: 'heading',
        title: 'From Discovery to Play in Seconds',
      },
      {
        type: 'text',
        body: [
          'The harder a game is to find, the less it gets played. We rebuilt navigation and search around lightning-fast discovery, getting players into the action in seconds.',
        ],
      },
    ],
  },
  serenaandlily: {
    slug: 'serenaandlily',
    client: 'Serena & Lily',
    tagline: 'Ecommerce redesign for a leader in luxury home decor',
    roles: ['Web Design', 'Design System', 'Ecommerce'],
    summary: [
      'Serena & Lily brings the feeling of coastal California living into homes across the country.',
      'We redesigned their ecommerce site to let beautiful product and editorial storytelling take center stage while making shopping feel smooth and personal.',
    ],
    hero: {
      src: sanity('a91b24796c2914c61bd580261700608b6645206f-1408x1760-jpg'),
      width: 1408,
      height: 1760,
    },
    overview:
      'An ecommerce redesign for a luxury home decor retailer — elevating product photography and editorial into a single shopping experience.',
    sections: [
      { type: 'heading', title: 'Design That Feels Like Home' },
      {
        type: 'text',
        body: [
          'Luxury retail lives in the details. We designed a system where photography, scale, and calm white space do the selling, and the UI gets out of the way.',
        ],
      },
      {
        type: 'heading',
        title: 'Shopping, Reimagined as Editorial',
      },
      {
        type: 'text',
        body: [
          'Rooms-and-vibes browsing replaced rigid category tours. Shoppers move through styled looks, then purchase — collecting pieces as naturally as they would in a showroom.',
        ],
      },
    ],
  },
}

export function getCase(slug: string): CaseStudy | undefined {
  return cases[slug]
}

export function getNextCase(slug: string): { slug: string; client: string; image: string } | null {
  const order = [
    'slack',
    'stc-bank',
    'sky',
    'snapchat',
    'joe-and-the-juice',
    'vantara',
    'grayscale',
    'discover',
    'marqeta',
    'yahoo-games',
    'serenaandlily',
    'tipalti',
    'wealth',
    'art-bridges',
  ]
  const i = order.indexOf(slug)
  if (i === -1) return null
  const next = order[(i + 1) % order.length]
  const c = cases[next]
  if (!c) return null
  return { slug: next, client: c.client, image: c.hero.src }
}