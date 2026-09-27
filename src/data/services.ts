export type Capability = {
  id: string
  title: string
  text: string
  href: string
  image: string
}

const isSanity = (i: string) => i.startsWith('http')

const img = (hash: string) => `https://cdn.sanity.io/images/r115idoc/production/${hash}-810x810.jpg`

const c = (id: string, title: string, text: string, href: string, hash: string): Capability => ({
  id,
  title,
  text,
  href,
  image: isSanity(hash) ? hash : img(hash),
})

export const capabilities: Capability[] = [
  c(
    'branding',
    'Branding',
    `A brand is more than just a logo or some colors. It's how people recognize and connect with your business. We build strong visual and verbal identities, design the assets you need, and create clear brand guidelines so your message stays consistent everywhere.`,
    '/services',
    'a873e487cda3cdf478af38d30c3e0d1f31e991f7',
  ),
  c(
    'digital-products',
    'Digital Products',
    `At Clay, we focus on creating real connections. We combine smart design with behavioral science to make digital products that feel human. Our senior UI and UX designers craft websites and apps that are not just beautiful, but meaningful, and help your brand succeed.`,
    '/services',
    '1e53a75c2842b62a1322f4990421622ffed676ba',
  ),
  c(
    'websites',
    'Websites',
    `Your digital presence starts with your website. That's where your brand comes to life. We design sites that clearly show who you are and what you stand for, all while giving users a smooth, engaging experience.`,
    '/services',
    '54cba1fec22e71214cc134de9a43525b198eafff',
  ),
  c(
    'development',
    'Development',
    `Our app and web developers care about both looks and performance. We build fast, reliable products that work great on every device. Whether it's the backend or the frontend, we aim for a seamless experience.`,
    '/services',
    '219c903e193d94f2157d75b6bb23de9423d4208b',
  ),
  c(
    'content',
    'Content',
    `Great content is a big part of how people experience your brand. We create everything from words to visuals: copywriting, illustrations, 2D and 3D graphics, icons, animations, videos, and photography.`,
    '/services',
    '40995c641bae1b6d2997167c0962e3ab31c498e0',
  ),
  c(
    'generative-ai',
    'Generative AI',
    `We use AI to work smarter and build better products. Our team leads the way in AI-powered UX, creating new ways for people to interact with digital tools and setting the standard for what's next.`,
    '/services',
    'fe065db7047f888d330145095399127b8d273f82',
  ),
]

export const logoClients: { name: string; image: string }[] = [
  { name: 'Meta', image: 'fec80243487507f850d46efb17657f9329e8d7a2' },
  { name: 'Google', image: '48881701416bfe3a936978ed18f6a58fc6d67c7f' },
  { name: 'Discover', image: '061542de752f4104501a3de85036353859c3cb19' },
  { name: 'Stripe', image: '05a30888894787f4f9f4e6d62f6e1616a22c5d58' },
  { name: 'Cola-Cola', image: 'd69f2d9eee55346d76b73aa781fdaf7cac2aa82c' },
  { name: 'Coinbase', image: '8fa95a2295fa1fac386adec8be52f9fe2c1df5d0' },
  { name: 'Uber', image: 'ec91c013d3e377ef1c5d071c0d77412aaabeffca' },
  { name: 'Sony', image: 'e1c460921d2f529fbfd90e32c0daf87a63636230' },
  { name: 'Slack', image: 'aa53a120ee2be6816e0df8d6f3eae709359bd506' },
  { name: 'Amazon', image: '5d38ce1740005a11ad065ee952a9e90ee3c49bf0' },
  { name: 'Fiverr', image: 'e9d4651e06e15eebaf210f7fef52a45525df6215' },
  { name: 'Credit Karma', image: '08d498076dcc85e88604df750e703bd088bb0739' },
  { name: 'Cisco', image: '20c6636bb99e00f196051c193ef26faa0a2e84bb' },
  { name: 'ADP', image: 'a8daa049aec8898e10741b1df3cd220b0ee05cbc' },
  { name: 'UPS', image: 'abf9548073d2585fc8be6b83e5dda0af817abebc' },
  { name: 'VMware', image: 'c72a0d29e05d02709e989e418aa68d44df269e06' },
  { name: 'Fossil', image: '799b9a8948861fe02ae54f822c15d15fb856b228' },
  { name: 'Western Digital', image: 'e9298aa93e88edf1213816f34eaf84611da291a0' },
  { name: 'Toyota', image: 'bf348105109288859968f775061e1d4871929736' },
  { name: 'Samsung', image: 'd2877f873fa8754455c4a1fa2baf067ef66cef37' },
  { name: 'Grayscale', image: '1cee19cd2e7c52ce2fadc880c2e7d660dc365242' },
]

export const logoClientUrl = (hash: string) =>
  `https://cdn.sanity.io/images/r115idoc/production/${hash}-580x384.png?q=75&fit=clip&auto=format`

export type ServiceRow = {
  id: string
  index: string
  title: string
  description: string
  image: string
  subs: { num: string; title: string; description: string }[]
  link: string
}

export const serviceRows: ServiceRow[] = [
  {
    id: 'branding',
    index: '01',
    title: 'Branding',
    description:
      'A brand is more than just a logo or some colors. It’s how people recognize and connect with your business. We build strong visual and verbal identities, design the assets you need, and create clear brand guidelines so your message stays consistent everywhere.',
    image: 'a873e487cda3cdf478af38d30c3e0d1f31e991f7-810x810.jpg',
    subs: [
      { num: '1', title: 'Brand strategy', description: 'Positioning, naming, messaging and architecture that gives the work a spine.' },
      { num: '2', title: 'Visual identity', description: 'Logos, color, type, and the systems that make a brand unmistakable.' },
      { num: '3', title: 'Brand guidelines', description: 'Rules and assets so any team can apply the brand without drifting.' },
    ],
    link: '/work?filter=Branding',
  },
  {
    id: 'digital-products',
    index: '02',
    title: 'Digital Products',
    description:
      'At Clay, we focus on creating real connections. We combine smart design with behavioral science to make digital products that feel human. Our senior UI and UX designers craft websites and apps that are not just beautiful, but meaningful, and help your brand succeed.',
    image: '1e53a75c2842b62a1322f4990421622ffed676ba-810x810.jpg',
    subs: [
      { num: '1', title: 'Product discovery', description: 'Research, jobs-to-be-done, and rapid validation before pixels move.' },
      { num: '2', title: 'UI & UX design', description: 'Interfaces engineered around how people actually behave.' },
      { num: '3', title: 'Design systems', description: 'Component libraries that keep dozens of products on one page.' },
    ],
    link: '/work?filter=Digital-Products',
  },
  {
    id: 'websites',
    index: '03',
    title: 'Websites',
    description:
      'Your digital presence starts with your website. That’s where your brand comes to life. We design sites that clearly show who you are and what you stand for, all while giving users a smooth, engaging experience.',
    image: '54cba1fec22e71214cc134de9a43525b198eafff-810x810.jpg',
    subs: [
      { num: '1', title: 'Marketing sites', description: 'Positioning-heavy sites built to qualify and convert.' },
      { num: '2', title: 'Content hubs', description: 'Editorial systems that scale to hundreds of pages.' },
      { num: '3', title: 'Interaction design', description: 'Motion and micro-interactions that reward exploration.' },
    ],
    link: '/work?filter=Websites',
  },
  {
    id: 'development',
    index: '04',
    title: 'Development',
    description:
      'Our app and web developers care about both looks and performance. We build fast, reliable products that work great on every device. Whether it’s the backend or the frontend, we aim for a seamless experience.',
    image: '219c903e193d94f2157d75b6bb23de9423d4208b-810x810.jpg',
    subs: [
      { num: '1', title: 'Frontend & CMS', description: 'Headless builds with the right CMS for your team.' },
      { num: '2', title: 'Web apps', description: 'Complex products that need real engineering care.' },
      { num: '3', title: 'Performance', description: 'Core Web Vitals treated as a design requirement.' },
    ],
    link: '/work?filter=Websites',
  },
  {
    id: 'content',
    index: '05',
    title: 'Content',
    description:
      'Great content is a big part of how people experience your brand. We create everything from words to visuals: copywriting, illustrations, 2D and 3D graphics, icons, animations, videos, and photography.',
    image: '40995c641bae1b6d2997167c0962e3ab31c498e0-810x810.jpg',
    subs: [
      { num: '1', title: 'Copywriting', description: 'Voice and words that carry your positioning.' },
      { num: '2', title: '2D & 3D graphics', description: 'Illustration, icons, and 3D that make ideas tangible.' },
      { num: '3', title: 'Motion & video', description: 'Animation and film that bring the brand to life.' },
    ],
    link: '/work?filter=Branding',
  },
  {
    id: 'generative-ai',
    index: '06',
    title: 'Generative AI',
    description:
      'We use AI to work smarter and build better products. Our team leads the way in AI-powered UX, creating new ways for people to interact with digital tools and setting the standard for what’s next.',
    image: 'fe065db7047f888d330145095399127b8d273f82-810x810.jpg',
    subs: [
      { num: '1', title: 'AI product design', description: 'Interfaces for models: prompts, evals, and human-in-the-loop flows.' },
      { num: '2', title: 'AI-ready design systems', description: 'Components designed to absorb generative outputs gracefully.' },
      { num: '3', title: 'AI transformation', description: 'Strategy for where intelligent features actually move metrics.' },
    ],
    link: '/contact',
  },
]