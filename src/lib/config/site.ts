import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'wingstako.dev',
  title: './wingstako.dev',
  subtitle: '',
  lang: 'zh-HK',
  description: 'wingstako.dev喺一個以粵語入文，分享Tech嘢嘅地方。',
  author: {
    name: 'wingstako',
    avatar: '/assets/maskable@192.png',
    status: '🌸',
    bio: "Don't forget your goal",
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://www.github.com/wingstako'
      },
      {
        icon: 'i-simple-icons-linkedin',
        link: 'https://www.linkedin.com/in/stanleywkman'
      }
    ]
  },
  themeColor: '#3D4451'
}
