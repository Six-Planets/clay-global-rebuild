export type Article = {
  slug: string
  category: string
  title: string
  image: string
  created: string
  updated?: string
  readTime: string
  /** short lede used on cards when needed */
  summary: string
}

const im = (hash: string, w: number, h: number) =>
  `https://cdn.sanity.io/images/r115idoc/production/${hash}-${w}x${h}.png?w=1920&q=80&fit=clip&auto=format`

export const featuredArticles: Article[] = [
  {
    slug: 'tipalti-digest',
    category: 'News',
    title: 'Tipalti Redesign Wins Design Awards and Features',
    image: im('0d70d6f3a3ab94f90764a14497db8200760922fd-2338x1238', 2338, 1238),
    created: 'Sep 3, 2026',
    readTime: '2 min read',
    summary:
      'The Tipalti website redesign continues to earn recognition across the design community. Here is a roundup of the awards and features it has picked up since launch.',
  },
  {
    slug: 'buttons-web-design',
    category: 'Web Design',
    title: 'Complete Guide to Buttons in Web Design for 2026',
    image: im('3e54a43cac2ac123d4cacb2a78be77065340395b-1169x619', 1169, 619),
    created: 'Apr 21, 2026',
    updated: 'May 14, 2026',
    readTime: '12 min read',
    summary:
      'Buttons carry more conversion weight than any other element on a page. This guide covers hierarchy, states, affordance, and the details that separate good buttons from great ones.',
  },
  {
    slug: 'webby-2026',
    category: 'News',
    title: 'Clay Global Shows Up Strong at The Webby Awards 2026',
    image: im('77de1dad905039783695a2fb3c4effc50d86d451-2338x1238', 2338, 1238),
    created: 'May 6, 2026',
    readTime: '1 min read',
    summary:
      'Multiple projects built by Clay were honored at the 2026 Webby Awards. A quick look at the work that got recognized and the people behind it.',
  },
]

export const latestArticles: Article[] = [
  {
    slug: 'ai-guide/ai-ui-ux',
    category: 'AI',
    title: 'How AI Is Rewriting the Rules of User Interface Design',
    image: im('25122d957ea9cc10fedd34c7c2b1502d49b02e9d-1169x619', 1169, 619),
    created: 'Sep 15, 2026',
    readTime: '10 min read',
    summary:
      'AI is shifting the interface from something users operate to something that operates alongside them. We examine what that means for UI design.',
  },
  {
    slug: 'top-branding-agencies/how-long-is-the-branding-process',
    category: 'Branding',
    title: 'How Long Does the Branding Process Take? (2026 Timeline)',
    image: im('036fa421e769d8520be29eec30d73fdeb0ec0438-2338x1238', 2338, 1238),
    created: 'Sep 4, 2026',
    readTime: '13 min read',
    summary:
      'A realistic timeline for brand projects, from discovery and strategy through identity design, guidelines, and rollout.',
  },
  ...featuredArticles.slice(0, 1),
  {
    slug: 'web-design-guide/illustrations-web-design',
    category: 'Web Design',
    title: 'When and Why to Use Illustrations in Web Design',
    image: im('4ecdd60a0c5aea03e62288a26fcdcb9e9dfbc51b-1169x619', 1169, 619),
    created: 'Sep 1, 2026',
    readTime: '11 min read',
    summary:
      'Illustration can differentiate a site in a sea of stock photography — when it is used with intent. Here is how to decide, and how to brief it.',
  },
  {
    slug: 'brand-strategy-guide/brand-purpose-examples',
    category: 'Branding',
    title: 'Brand Purpose Defined: 15 Great Examples to Learn From',
    image: im('7e9ba8ede79b16ecd723da2ab4d5f0de7c52e66b-1169x619', 1169, 619),
    created: 'Aug 17, 2026',
    readTime: '12 min read',
    summary:
      'Purpose only matters when it shapes decisions. Fifteen brands that translate stated purpose into design, product, and behavior.',
  },
]

export const guidesArticles: Article[] = [
  {
    slug: 'web-design-guide',
    category: 'Web Design',
    title: 'How to Design a Website in 2026?',
    image: im('9ca839394f71b1aff720b4b343b77e50d4e2f7e6-2338x1238', 2338, 1238),
    created: 'Aug 1, 2026',
    readTime: '20 min read',
    summary: 'A comprehensive walkthrough of the modern website design process.',
  },
  {
    slug: 'brand-strategy-guide',
    category: 'Branding',
    title: 'Brand Strategy Guide 2026: Aligning Your Brand for Long-Term Success',
    image: im('8ab9994bd0b7dcacc449c6b05551f7a46551dbd7-2338x1238', 2338, 1238),
    created: 'Jul 1, 2026',
    readTime: '22 min read',
    summary: 'Frameworks for building a brand strategy that lasts.',
  },
  {
    slug: 'ux-guide',
    category: 'UI/UX',
    title: 'The Ultimate UI/UX Design Guide for 2026',
    image: im('a56461e3138debfb37a0169b8de6f2c73b4ca010-2338x1238', 2338, 1238),
    created: 'Jan 15, 2026',
    readTime: '25 min read',
    summary: 'Everything we know about designing quality digital products.',
  },
]

export const webDesignArticles: Article[] = [
  {
    slug: 'web-design-guide/cognitive-load',
    category: 'Web Design',
    title: 'Cognitive Load: Hidden Reason Users Leave Your Website',
    image: im('eca9b26ab19c83d1afe13c0623c59a8f59dbd6a0-1164x619', 1164, 619),
    created: 'Jul 28, 2026',
    readTime: '14 min read',
    summary: 'Every extra decision you ask of a user is a cost. Reducing cognitive load is the highest-ROI design work there is.',
  },
  {
    slug: 'web-design-guide/website-navigation',
    category: 'Web Design',
    title: 'Website Navigation Tips for a User-Friendly Site',
    image: im('29795bcfd06675df87537353008139b18cf2db75-1164x619', 1164, 619),
    created: 'Oct 30, 2024',
    updated: 'Jul 21, 2026',
    readTime: '12 min read',
    summary: 'Navigation is the wayfinding of the web. Patterns and pitfalls for IA that actually helps people.',
  },
  {
    slug: 'practices-for-mobile-web-design',
    category: 'Web Design',
    title: '10 Mobile Design Practices that Hold Up in 2026',
    image: im('5488e09457857dd2f4e813a67aad7bc835adbb33-2338x1238', 2338, 1238),
    created: 'Aug 28, 2024',
    updated: 'Aug 21, 2026',
    readTime: '11 min read',
    summary: 'Thumb zones, motion budgets, and performance: the mobile practices that still matter.',
  },
  {
    slug: 'web-design-guide/tips-for-designing-a-website',
    category: 'Web Design',
    title: '14 Web Design Best Practices for Creating a Great Website',
    image: im('55abb4207a259364418f040c433cacdc5b7250cd-2338x1238', 2338, 1238),
    created: 'Mar 13, 2024',
    updated: 'May 13, 2026',
    readTime: '13 min read',
    summary: 'The fundamentals we return to on every single project.',
  },
  {
    slug: 'web-design-guide/what-is-flat-design',
    category: 'Web Design',
    title: 'What Is Flat Design?',
    image: im('09b299b2d668a4419df45ffe8a35341e9f8b105e-2338x1238', 2338, 1238),
    created: 'Sep 23, 2024',
    updated: 'Apr 14, 2026',
    readTime: '12 min read',
    summary: 'A history and practical guide to flat design, and how the movement evolved.',
  },
]

export const uiUxArticles: Article[] = [
  {
    slug: 'ux-guide/diary-studies',
    category: 'UI/UX',
    title: 'What Is a Diary Study in UX Research?',
    image: im('8f47658aca62331e43add2390622448073c37c8a-1169x619', 1169, 619),
    created: 'Nov 4, 2024',
    updated: 'Aug 20, 2026',
    readTime: '14 min read',
    summary: 'Diary studies capture behavior in context over time — the technique, the setup, and when to use it.',
  },
  {
    slug: 'glassmorphism-ui',
    category: 'UI/UX',
    title: 'Why Everything Is Going Glassmorphism (And How to Do It Right)',
    image: im('8b7cfd8b33321512551dcc5277045499d8029fe2-1169x619', 1169, 619),
    created: 'Jul 21, 2025',
    updated: 'Jun 4, 2026',
    readTime: '14 min read',
    summary: 'Frosted glass interfaces are everywhere. The version that works is subtle, layered, and legible.',
  },
  {
    slug: 'ux-guide/ux-mockup',
    category: 'UI/UX',
    title: 'UX Mockups and How to Get Them Right',
    image: im('759b74b51b899def919cfafe8da67c156af6025d-1169x619', 1169, 619),
    created: 'Dec 19, 2023',
    updated: 'Jun 8, 2026',
    readTime: '13 min read',
    summary: 'From rough wires to high-fidelity mocks: what each fidelity level is for, and how to move between them.',
  },
  {
    slug: 'skeuomorphism-ui',
    category: 'UI/UX',
    title: 'Skeuomorphism Design Best Practices for 2026',
    image: im('3f517ae91c023ecaf24f3f2d3c1f8fc67ce77452-1169x619', 1169, 619),
    created: 'Aug 3, 2026',
    readTime: '14 min read',
    summary: 'Skeuomorphism is back in a refined form. Real-world metaphor used sparingly still teaches interfaces fast.',
  },
  {
    slug: 'ux-guide/ui-ux-process',
    category: 'UI/UX',
    title: 'What Is the UI/UX Design Process? 5 Core Steps',
    image: im('f3f0fe96b8f240483f26497a85c612843bdef25f-1169x619', 1169, 619),
    created: 'Apr 22, 2024',
    updated: 'Mar 16, 2026',
    readTime: '8 min read',
    summary: 'Our take on the five stages that every successful design project moves through.',
  },
]

export const brandingArticles: Article[] = [
  {
    slug: 'brand-strategy-guide/brand-experience',
    category: 'Branding',
    title: 'What Is Brand Experience?',
    image: im('2c2cca34411f457c03fbf6d61e51eb45bee2c33b-1169x619', 1169, 619),
    created: 'Sep 26, 2024',
    updated: 'Jul 21, 2026',
    readTime: '12 min read',
    summary: 'Brand is the sum of every touchpoint. Here is how to design the whole experience, not just the logo.',
  },
  {
    slug: 'brand-strategy-guide/unlock-brand-loyalty-through-brand-recognition',
    category: 'Branding',
    title: 'How to Build Brand Recognition?',
    image: im('1108799f3dc50de09810eefd9f650acf1690dc55-1169x619', 1169, 619),
    created: 'Mar 19, 2024',
    updated: 'Mar 31, 2026',
    readTime: '14 min read',
    summary: 'Recognition is memory at work. The systems that make a brand unforgettable.',
  },
  {
    slug: 'brand-identity-guide/create-animated-logo',
    category: 'Branding',
    title: 'Motion Logo Basics. How to Hook Viewers Fast?',
    image: im('c04e0ef4f7727c3ef492fb1f104bef142a0d9c51-2338x1238', 2338, 1238),
    created: 'Apr 17, 2024',
    updated: 'May 7, 2026',
    readTime: '12 min read',
    summary: 'An animated logo can set the tone in under two seconds. The principles behind motion that lands.',
  },
  {
    slug: 'brand-failures',
    category: 'Branding',
    title: '10 Famous Brand Failures Worth Learning From',
    image: im('bc841e9630b0ea13b3b3d5dd2278ccdbd056e445-2338x1238', 2338, 1238),
    created: 'May 27, 2025',
    updated: 'Jun 5, 2026',
    readTime: '15 min read',
    summary: 'High-profile rebrands went wrong for understandable reasons. The lessons are universal.',
  },
]

export const blogCategories = ['All Posts', 'UI/UX', 'Web Design', 'Branding', 'AI', 'News']

export function getArticle(slug: string): Article | undefined {
  const all = [
    ...featuredArticles,
    ...latestArticles,
    ...guidesArticles,
    ...webDesignArticles,
    ...uiUxArticles,
    ...brandingArticles,
  ]
  return all.find((a) => a.slug === slug)
}