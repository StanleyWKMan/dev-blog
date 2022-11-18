import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'light',
    text: '🌕 Light'
  },
  {
    name: 'dark',
    text: '🌑 Dark'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'cyberpunk',
    text: '🌐 Cyberpunk'
  },
  {
    name: 'dracula',
    text: '🧛 Dracula'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  search: {
    provider: 'duckduckgo'
  },
  // nav: [
  //   {
  //     text: 'Get Started',
  //     link: '/hello-world'
  //   },
  //   {
  //     text: 'Elements',
  //     link: '/hello-world/elements'
  //   }
  // ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Taipei'
  }
}

export const feed: FeedConfig = {}
