export type Client = {
  name: string
  description: string
  image: string
  width: number
  height: number
}

const c = (name: string, description: string, hash: string, width = 656, height = 656): Client => ({
  name,
  description,
  image: `https://cdn.sanity.io/images/r115idoc/production/${hash}-${width}x${height}.png?w=800&q=80&fit=clip&auto=format`,
  width,
  height,
})

export const clients: Client[] = [
  c('Meta', 'Strategy, web design, and development for Facebook’s new internet technology.', 'a3cc929ed7d647756fc31f07bee3b0ada324a84d'),
  c('Google', 'User experience and interaction design for Project Jacquard.', '652df4290af8d0d5422a34026ce4af02aefa13ca'),
  c('Slack', 'Web design and development partnership with Slack’s marketing team.', '61471b8d927b6be99374aa07a4b4d96df1ad6500'),
  c('Snapchat', "UX design for Snapchat's augmented reality shopping experience.", '81cf82806f5c4cdc89f9a1107be1bec67fbbb494'),
  c('Credit Karma', 'Digital product design partnership on building new enterprise tools.', '7a636d78ad88fcbf59bee55c8589b48e87d2ddc8', 656, 436),
  c('Discover', "Iterative UX and UI design for Discover's mobile apps.", 'db510e225c7932fb124502bf7ecd0855993346b5'),
  c('Coinbase', 'Mobile UX and UI design for a top digital currency platform.', '4132a0ce257b6eea1289a2147bb591c61e46a645', 656, 436),
  c('Amazon', 'Product design collaboration with Amazon’s innovation teams. Confidential.', '332705d535e7bf8e00c2589017115381c9a8a9e5', 656, 436),
  c('Stripe', 'Marketing web design collaboration with Stripe’s internal teams.', 'bf1c75e3f14576d090d3547bf0ffee1d3e7916c1'),
  c('UPS', 'Strategy, web design, and development for a new warehouse platform.', '1041832302b6cb014262550b03538b9ff7a672e1'),
  c('Cisco', 'Web design, content, and development for Meraki Go.', 'ebbdb911b09835f5b31bf4118d69cb1a47ab02b7', 656, 436),
  c('Marqeta', 'An interactive marketing site for a modern card issuing company.', '2fc2b859840f9f82eedfaf2426fb4152e522a165'),
  c('Coca-Cola', 'UI/UX design and branding for a customer loyality app by Coca-Cola Mexico.', 'e515664e82bbf98c69fba4ba0d2151c6f4064338'),
  c('Fossil', 'Mobile app design and design guidelines for a new generation smart watch.', '642a794fcf3f468acfaa6b2fefc3f6eab2c942de'),
  c('Zenefits', 'Marketing websites and UX design for an HCM software platform.', 'b2eb1014d84549049f3eae4e66cef0e71b1fbfa1'),
  c('STC Bank', 'Designing a consumer and business app and website ecosystem for the largest digital bank in Saudi Arabia.', '07132427c1ed21d8f1ccc8253d29d56c6d20bcb6'),
  c('Impossible', 'Supporting a plant-based meat brand with their Earth Day campaign.', '827cbc8a09dff632eb01378f9a798521974c3696'),
  c('AppDynamics', "Web design and guidelines for Cisco's business observability software.", '67e284c5e9fee8bc571819723a8b09f89597a598'),
  c('Sony', 'Android app design and development for Sony Xperia.', '15fa3058a2e14e71c81610a6b4e219ff974b884c', 656, 436),
  c('T-Mobile', "UX and visual design for T‑Mobile's customer mobile apps.", 'fc4fd6f8ea6309ca1eb6f00f93b30636be18c624'),
  c('VMware', 'Visual design exploration for Clarity, an open-source design system.', '567c3027199d26307e46156bf7490f1e55a46226', 656, 436),
  c('Joe & The Juice', "Branding and UI/UX design for Joe's new mobile app and ordering experience.", '22782fcce4d9fba8f093b03b9511505d26bc3024'),
  c('Uber', 'Branding, web design, and marketing assets.', '616da3b7acd3c85a5571c2959f204bf664f794e6'),
  c('MEXC', "Brand design and guidelines for Asia's leading crypto exchange.", '4ecc1ce805d19ecd72b4d91f525fdf5f3650b2d2'),
  c('TeamViewer', 'Mobile app design for an AR-powered visual assistance product.', '27390de9d1be09ebfd3d799dd338252bead97bfe'),
  c('Corsair', 'Desktop and mobile UI/UX design for a leading gaming hardware company.', '0393a5120c9edf5915c9813a6d5263b832353436', 656, 436),
  c('ADP', 'A multi-year UX design partnership with the ADP Innovation Lab.', '4cba436328e3aeee5f8f4108dcf0c645c9a1f5e5', 656, 436),
  c('Toyota', 'Visual design, illustrations, and icons for Toyota USA.', '23f571b208d10288c49e26a5316c57ea8f7101f6', 656, 436),
  c('Western Digital', "iOS and Android app design and guidelines for Sandisk's memory cards.", 'b550a2d17fabb0521a9c1bb04a093de17a9e6faa', 656, 436),
  c('MoneyLion', 'Branding, web design, and development for a fintech startup.', '7d4601473f24fb7f2463f37de3307faab426f33a'),
  c('Oppo', "Design innovation, UI and motion design for Oppo's flagship devices.", '86ac4864d0f833edf86703f574f5925ff285efb4'),
  c('Okta', 'Web design and guidelines for Okta.com.', 'eccc55b760ca1c02ea1ba7e73d7b3bab68c82f9b'),
  c('Samsung', 'Mobile UI/UX and interaction design for creative tools.', '5b0f323caade5d0d6228c67c0a08a10241b80a3b'),
]