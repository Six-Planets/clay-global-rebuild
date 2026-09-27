export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
  main?: { label: string; href: string }
}

export const siteConfig = {
  name: 'Clay',
  legalName: 'Clay Global, LLC',
  description:
    'Clay is a global UI/UX design and branding firm headquartered in San Francisco. We create digital products, websites, design systems, and brand identities across industries, with deep experience in B2B, SaaS, AI, and fintech.',
  email: 'hey@clay.global',
  emailHref: 'mailto:hey@clay.global',
  phone: '+1 415 796 6262',
  phoneDisplay: '+1 (415) 796-6262',
  copyright: '© 2016–2026 Clay',
  missionControl:
    "We're creating standout brands and digital experiences that captivate users.",
}

export const navigation: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Clients', href: '/clients' },
  { label: 'Services', href: '/services' },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Fintech', href: '/fintech' },
      { label: 'Crypto & Web3', href: '/crypto' },
    ],
    main: { label: 'All Industries', href: '/industries' },
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export const footerNav = navigation

export const legalNav = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap' },
]

export type Office = {
  city: string
  lines: string[]
  href: string
}

export const offices: Office[] = [
  {
    city: 'San Francisco',
    lines: ['300 Broadway,', 'San Francisco, CA 94133'],
    href: 'https://maps.app.goo.gl/G1VHdzEgTTHyJKRDA',
  },
  {
    city: 'New York',
    lines: ['148 Lafayette St,', 'New York, NY 10013'],
    href: 'https://maps.app.goo.gl/Wr1xNTxAh4Hx4zuV6',
  },
  {
    city: 'Austin',
    lines: ['600 Congress Ave,', 'Austin, TX 78701'],
    href: 'https://maps.app.goo.gl/tHM3o7BnMvMM3Nks7',
  },
  {
    city: 'Denver',
    lines: ['1700 Lincoln St 17th fl,', 'Denver, CO 80203'],
    href: 'https://maps.app.goo.gl/7snLQRA35qpEJQ7R8',
  },
  {
    city: 'Lisbon',
    lines: ['Av. Alm. Reis 139, 1150-015', 'Lisbon, Portugal'],
    href: 'https://maps.app.goo.gl/U2uawhnTvn7AQWCPA',
  },
  {
    city: 'Belgrade',
    lines: ['Nušićeva 15, 11000', 'Belgrade, Serbia'],
    href: 'https://maps.app.goo.gl/pUqg7Exq6m88mSkdA',
  },
]

export type Social = {
  label: string
  href: string
}

export const socials: Social[] = [
  { label: 'Dribbble', href: 'https://dribbble.com/clayglobal' },
  { label: 'Behance', href: 'https://behance.net/clayglobal' },
  { label: 'Instagram', href: 'https://instagram.com/clayglobal/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/clayglobal/' },
  { label: 'Twitter', href: 'https://twitter.com/clayglobal' },
  { label: 'Facebook', href: 'https://facebook.com/claydesignstudio/' },
]

export const logo = {
  mark: '/images/logo-left.svg',
  title: '/images/logo-right.svg',
}