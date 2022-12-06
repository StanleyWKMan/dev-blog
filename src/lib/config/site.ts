import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'wingstako.dev',
  title: 'wingstako.dev',
  subtitle: 'Blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'wingstako',
    avatar: '/assets/maskable@192.png',
    status: '🌸',
    bio: '喺追求目標嘅道路上，<br>最容易唔記得嘅就係目標',
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/wingstako'
      },
      {
        icon: 'i-simple-icons-linkedin',
        link: 'https://www.linkedin.com/in/stanleywkman'
      }
    ]
  },
  themeColor: '#3D4451'
}
