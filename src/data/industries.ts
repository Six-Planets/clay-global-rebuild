import type { Project } from './projects'

export type IndustryLogo = { name: string; image: string; width: number; height: number }

export type IndustryQuote = {
  text: string
  name: string
  role: string
  image?: string
}

export type HowWeHelp = {
  index: string
  title: string
  description: string
  image: string
  width: number
  height: number
}

export type Industry = {
  slug: string
  label: string
  heroTitle: string
  heroDescription: string
  logos: IndustryLogo[]
  impactTitle: string
  impactDescription: string
  howWeHelpTitle: string
  howWeHelp: HowWeHelp[]
  perspectiveTitle: string
  perspectiveText: string
  perspectiveLink: string
  perspectiveImage: string
  focusTitle: string
  focusAreas: string[]
  workTitle: string
  workOrder: string[]
  quotes: IndustryQuote[]
  whyTitle: string
  whyDescription: string
  whyItems: { title: string; text: string }[]
  ctaTitle: string
  ctaDescription: string
  ctaLink: string
  ctaImage: string
  faq: { question: string; answer: string[] }[]
}

const img = (hash: string, w: number, h: number, q = 75, ext = 'png') =>
  `https://cdn.sanity.io/images/r115idoc/production/${hash}-${w}x${h}.${ext}?w=1200&q=${q}&fit=clip&auto=format`

const logo = (name: string, hash: string, w: number, h: number): IndustryLogo => ({
  name,
  image: `https://cdn.sanity.io/images/r115idoc/production/${hash}-${w}x${h}.png?q=75&fit=clip&auto=format`,
  width: w,
  height: h,
})

export const industries: Record<string, Industry> = {
  fintech: {
    slug: 'fintech',
    label: 'Fintech',
    heroTitle: 'The Future of Finance is Intelligent',
    heroDescription:
      'We partner with visionary companies in financial technology to design the next chapter of financial services through human-centered fintech design and purposeful AI.',
    logos: [
      logo('Stripe', 'b651f130866212bfa4f9ac7c943e21b4eab40db1', 486, 255),
      logo('Coinbase', '8470c36a35bd15924eec8987cf8cdc878eaf851b', 486, 255),
      logo('Credit carma', '42a644c52be5bd6be3287a486921d2ee29acd037', 486, 255),
      logo('Discover', 'ca7ea6ad4c19d50049eb95499c521d6853e31926', 486, 255),
      logo('Lydian', '9c4ec3062a9b3d469bc3fda24faf56b26784cafb', 486, 255),
      logo('ADP', 'ce5b1a8a7c938bf707fee715bff17d7ace9d9075', 486, 255),
      logo('Empower', '320eaed5a6918363ecb21e13e61a13c3eb214dbf', 580, 304),
      logo('Grayscale', '1f14b828a1a93496db9009c0aae16d3462e8c00c', 580, 304),
      logo('Lulo', '61e6906025f8ea5ebec001df847c547933dd4773', 580, 304),
      logo('Marqeta', '641707732ac27a300a98f901b74209c538a775e9', 580, 304),
      logo('Mexc', '25e07ad1f55b5fe3eca4a26e00f2b0707069ad30', 580, 304),
      logo('Money lion', 'b45f7c9f42123c89b1833d621206f399daa49e26', 580, 304),
      logo('NDAX', 'dcca34d8bd9c6293df72fb6ef112775bf72d2050', 580, 304),
      logo('Q2', '4e3d53e6cb3ac24a31c5eb49fcc7d3062c749226', 580, 304),
      logo('Sky', 'f34da123fb519097bf23315cfdc8b089ca7ffb22', 580, 304),
      logo('STC Bank', 'd5928d6fde0c35d3abb2281249d13f3b9aa468ed', 580, 304),
      logo('Tipalti', '7723756894b1325879d8b2aa545d09b7cd0a28d7', 580, 304),
      logo('Wealth', '8cdc747f398f917b516fe98cf9e64174a20af696', 580, 304),
    ],
    impactTitle: 'Shaping the Future of Fintech Through AI and Design',
    impactDescription:
      'Work that helped the world’s leading fintechs build trusted digital products and brands.',
    howWeHelpTitle: 'How We Help',
    howWeHelp: [
      {
        index: '01',
        title: 'AI Transformation',
        description:
          'AI that works for people. We design AI-powered experiences that are intuitive, useful, and centered on human needs.',
        image: img('1d66abb4a91acaf2e8e5742df142d1c1855d545f-1494x1121', 1494, 1121, 75, 'jpg'),
        width: 1494,
        height: 1121,
      },
      {
        index: '02',
        title: 'Design Innovation',
        description:
          'Modern fintech industry UI/UX design that removes legacy friction, simplifies complex journeys, and keeps operations accurate, safe, and efficient with strong error prevention.',
        image: img('c6b6b20f8435ffd63aa9dc48d1e64a15a803efca-1494x1121', 1494, 1121, 75, 'jpg'),
        width: 1494,
        height: 1121,
      },
      {
        index: '03',
        title: 'Branding',
        description:
          'Making your brand look like the future of finance. We craft strategy and identity systems that are credible, differentiated, and built to grow your brand identity.',
        image: img('84b5be738a2fd43e0f643c3f906270a0e2a471ce-1494x1121', 1494, 1121, 75, 'jpg'),
        width: 1494,
        height: 1121,
      },
      {
        index: '04',
        title: 'Digital Products & CX',
        description:
          'We design UI and UX for modern fintech platforms trusted by millions, shaping every user interface with clarity and care. Our work is scalable, compliant, accessible, and mobile first to build trust and engagement.',
        image: img('f548a120441f32d808c1f228b9a349084361b890-1494x1121', 1494, 1121, 75, 'jpg'),
        width: 1494,
        height: 1121,
      },
      {
        index: '05',
        title: 'Marketing',
        description:
          'We bring strategy and story to life through seamless, accessible websites that strengthen your digital presence. We align brand and performance across web design and launch campaigns for fintech teams and financial institutions.',
        image: img('2581dabbc9beefd47c4e9c250c925909dc126e58-1494x1121', 1494, 1121, 75, 'jpg'),
        width: 1494,
        height: 1121,
      },
    ],
    perspectiveTitle: 'Clay Perspective',
    perspectiveText: 'The Next Era of Fintech — How AI is transforming the fintech landscape.',
    perspectiveLink: '/blog/future-of-ai-in-fintech',
    perspectiveImage: img('02891ce34a673d356f026cd1e62633b7a1cd27ea-5120x5120', 5120, 5120),
    focusTitle: 'Where We Focus',
    focusAreas: [
      'Financial Infrastructure',
      'Payroll & HR Tech',
      'Wealth Management',
      'Payments',
      'BNPL & Embedded Finance',
      'Lending Platforms',
      'Crypto & DeFi',
      'Compliance & RegTech',
      'Insurance & Insurtech',
      'Digital Banking',
    ],
    workTitle: 'Our Work',
    workOrder: [
      'sky',
      'discover',
      'stc-bank',
      'marqeta',
      'lulo-bank',
      'grayscale',
      'tipalti',
      'cornerstone',
      'wealth',
      'streetbeat',
    ],
    quotes: [
      {
        text: 'We loved working with Clay – they are professional, creative, and thorough. You’ll find a partner who feels equal ownership over the look and feel of the website as you do.',
        name: 'Seres Lu',
        role: 'VP of Marketing, Grayscale Investments',
        image: img('69276021f712c4cddfb77c67550bdb37514bb6a5-200x201', 200, 201),
      },
      {
        text: 'We needed a partner who saw our vision and pushed us to new levels. Clay’s expertise helped us deliver early and scale for future expansion through the design system and brand they developed.',
        name: 'Hanna Byers',
        role: 'VP of Product, Wealth, Inc.',
        image: img('d568917736d30fac7a27ab5888128ef26a8ebe50-160x160', 160, 160),
      },
      {
        text: "We have had the pleasure of collaborating with Clay's team since 2012. Their constant drive for innovation and meticulous attention to detail have consistently led to positive changes in our product and metrics.",
        name: 'Damian Scavo',
        role: 'CEO, Streetbeat',
        image: img('57cf0e103dd708780b0989857107e3238b7430f9-160x160', 160, 160),
      },
      {
        text: "Clay were great partners and weren’t afraid to think outside the box. We’re thrilled with the result and feel it communicates a unique and distinctive brand in our space.",
        name: 'Marc Elliott',
        role: 'Chief Technology Officer, Echo Street Capital',
        image: img('d460f08c2c232b6ca649a707f25eaecc819c15f8-160x160', 160, 160),
      },
    ],
    whyTitle: 'Why Clay',
    whyDescription:
      'We’ve been designing for digital finance since the early days, building platforms for banks and fintech pioneers. Today, our senior, founder-led teams bring strategy and craft together to help ambitious companies simplify complexity and scale with clarity.',
    whyItems: [
      {
        title: 'In Finance Since 2008',
        text: "We've built everything from early neobanks to modern payment ecosystems, including banking app experiences and end-to-end financial apps.",
      },
      {
        title: 'Based in San Francisco',
        text: 'Operating globally with deep roots in the heart of fintech innovation.',
      },
      {
        title: 'We Know the Hard Parts',
        text: 'We understand the regulatory, compliance, and accessibility challenges and how to design for them across financial institutions, including evolving financial regulations.',
      },
      {
        title: 'Trusted by Leaders',
        text: 'We help fintech teams turn vision into clarity, trust, and intelligent design across every touchpoint, from brand identity to financial apps and digital banking platforms.',
      },
    ],
    ctaTitle: "Let's Build the Future of Fintech Together",
    ctaDescription:
      'We help fintech teams turn vision into clarity, trust, and intelligent design across every touchpoint, from brand identity to financial apps and digital banking platforms.',
    ctaLink: '/contact',
    ctaImage: img('4cd6150b513388ee3841f98f15555521876dddd9-1600x1601', 1600, 1601, 75, 'png'),
    faq: [
      {
        question: 'What makes Clay different?',
        answer: [
          'Clay is a UI/UX design agency with a founder-led team of senior designers and strategists with decades of fintech design experience. We have extensive expertise in fintech UX design, ensuring that our solutions deliver good UX tailored to the unique needs of financial services.',
          'Our process is design-system driven and built for scale, helping companies stay consistent, compliant, and ready for the future across the broader digital ecosystem of modern financial technology.',
        ],
      },
      {
        question: 'Do you work with both startups and large enterprises?',
        answer: [
          'Yes. We partner with early-stage fintech startups as well as global fintech companies. Whether it is shaping a new brand identity or redesigning a complex banking app, our approach adapts to the size, pace, and goals of each client and their target audience.',
        ],
      },
      {
        question: 'How long do projects typically take?',
        answer: [
          'Timelines vary depending on scope and complexity. Brand design projects usually start at around three months, web redesigns take four to five months, and full digital banking product transformations often span six months or more.',
        ],
      },
      {
        question: 'How do you approach AI in your work?',
        answer: [
          'Our process integrates compliance, accessibility, and security considerations from the start, ensuring every product meets both user and regulatory standards. Fintech UX designers must signal security at every critical step and make security decisions visible to users.',
        ],
      },
      {
        question: 'How experienced are you with compliance and regulation?',
        answer: [
          'We have worked extensively with fintech companies and regulated fintechs worldwide. Our process integrates compliance, accessibility, and security considerations from the start, ensuring every product meets both user and regulatory standards.',
        ],
      },
      {
        question: 'What kind of support do you offer after a project is completed?',
        answer: [
          'We often continue as an embedded partner, supporting design, product, and strategy beyond the initial launch. This allows our clients to move faster while maintaining consistency and quality as their needs evolve across digital and traditional banking.',
        ],
      },
      {
        question: 'How do you ensure designs stay relevant over time?',
        answer: [
          'We build design systems and strategic frameworks that evolve with your business. Every project is created to scale, adapt, and stay effective as technologies, markets, and user expectations change in financial technology.',
        ],
      },
    ],
  },
}

industries.crypto = {
  slug: 'crypto',
  label: 'Crypto & Web3',
  heroTitle: 'Design for Decentralized Worlds',
  heroDescription:
    'We partner with crypto and Web3 teams to bring emerging technology to mainstream audiences through clear brands, human interfaces, and trustworthy digital experiences.',
  logos: [
    logo('Coinbase', '8fa95a2295fa1fac386adec8be52f9fe2c1df5d0', 580, 384),
    logo('Grayscale', '1cee19cd2e7c52ce2fadc880c2e7d660dc365242', 580, 384),
    logo('Sky', 'f34da123fb519097bf23315cfdc8b089ca7ffb22', 580, 304),
    logo('DFINITY', '48630999ba6adde2edcb53ed18f337778d453138', 1408, 1760),
    logo('Nuant', '133d129f60eb7ae8f487c99608760ac296c82779', 1408, 1760),
    logo('Partstack', '16794ed441e6dc43e4ef58188a7e793bad2a72ee', 705, 881),
  ],
  impactTitle: 'Building Trust in the New Internet',
  impactDescription:
    'From exchanges to asset managers, we help Web3 brands feel credible, clear, and human enough for the people who will actually use them.',
  howWeHelpTitle: 'How We Help',
  howWeHelp: [
    {
      index: '01',
      title: 'Crypto Brands',
      description:
        'Identity systems that communicate maturity and differentiation in a crowded, fast-moving market.',
      image: img('e26675c8b7d988ef9f5672d0c7134bd98938ee4e-1408x1760', 1408, 1760),
      width: 1408,
      height: 1760,
    },
    {
      index: '02',
      title: 'Exchange & Wallet UX',
      description:
        'Products that make trading, custody, and self-custody understandable to users of every level of experience.',
      image: img('a987dd78b64fb593712cb041cc3cd74b9e143087-704x880', 704, 880),
      width: 704,
      height: 880,
    },
    {
      index: '03',
      title: 'Web3 Platforms',
      description:
        'Dashboards and data products that turn raw on-chain signals into clear, decision-ready information.',
      image: img('133d129f60eb7ae8f487c99608760ac296c82779-1408x1760', 1408, 1760),
      width: 1408,
      height: 1760,
    },
  ],
  perspectiveTitle: 'Clay Perspective',
  perspectiveText: 'How design earns trust in decentralized finance.',
  perspectiveLink: '/blog/future-of-ai-in-fintech',
  perspectiveImage: img('02891ce34a673d356f026cd1e62633b7a1cd27ea-5120x5120', 5120, 5120),
  focusTitle: 'Where We Focus',
  focusAreas: [
    'Crypto Exchanges',
    'DeFi Protocols',
    'Digital Asset Management',
    'Wallets & Custody',
    'Data & Analytics',
    'Token Launches',
    'Web3 Infrastructure',
  ],
  workTitle: 'Our Work',
  workOrder: ['sky', 'grayscale', 'dfinity', 'nuant', 'partstack', 'wealth'],
  quotes: [
    {
      text: 'Clay turned our legacy enterprise software into a consumer-grade digital experience.',
      name: 'Gary Trainor',
      role: 'CEO, Viventium',
    },
    {
      text: 'We needed a partner who saw our vision and pushed us to new levels, from ideation to implementation. Clay’s deep bench of athletes and expertise allowed us to deliver on target early on and scale for future expansion."',
      name: 'Hanna Byers',
      role: 'VP of Product, Wealth',
    },
  ],
  whyTitle: 'Why Clay',
  whyDescription:
    'We have designed for crypto since its first wave — pairing deep product discipline with an understanding of the regulatory and security realities of Web3.',
  whyItems: [
    {
      title: 'Early Internet, Deep Experience',
      text: 'We’ve designed for exchanges, asset managers, and protocols since the earliest days of the industry.',
    },
    {
      title: 'Security by Design',
      text: 'Trust signals, error prevention, and clarity at every critical step of the journey.',
    },
    {
      title: 'Mainstream Clarity',
      text: 'We translate decentralized complexity into experiences anyone can navigate.',
    },
    {
      title: 'Brands That Last',
      text: 'Identity and design systems built to survive market cycles and scale across ecosystems.',
    },
  ],
  ctaTitle: 'Let’s Design the Decentralized Future Together',
  ctaDescription:
    'From exchange platforms to protocol brands, we help Web3 teams build trust through design that people actually understand.',
  ctaLink: '/contact',
  ctaImage: img('4cd6150b513388ee3841f98f15555521876dddd9-1600x1601', 1600, 1601, 75, 'png'),
  faq: [
    {
      question: 'Can you design for regulated crypto companies?',
      answer: [
        'Yes. We have experience designing for exchanges, custodians, and asset managers operating under strict compliance regimes. Our process integrates compliance, accessibility, and security considerations from the start.',
      ],
    },
    {
      question: 'Do you design token launches and brand systems?',
      answer: [
        'We create complete brand identities for Web3 companies — strategy, naming support, visual and verbal identity, and brand guidelines that scale from a token launch to a long-lived protocol.',
      ],
    },
    {
      question: 'How do you handle security-sensitive product design?',
      answer: [
        'Trust is the core design material in crypto. We design explicit security and privacy signals into every critical step, following the same standards used across financial institutions.',
      ],
    },
  ],
}

export function getIndustryProjects(industry: Industry, all: Project[]): Project[] {
  return industry.workOrder.map((s) => all.find((p) => p.slug === s)).filter((p): p is Project => Boolean(p))
}