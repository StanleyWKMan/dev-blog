import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'wingstako.dev',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'wingstako',
    avatar: '/assets/maskable@192.png',
    status: '🌸',
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/wingstako'
      },
      {
        icon: 'i-simple-icons-linkedin'
        
      }
    ]
  },
  themeColor: '#3D4451'
}
