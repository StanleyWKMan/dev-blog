import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'wingsman-dev-blog.vercel.app/',
  title: 'Urara',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'zh-HK',
  descr: 'Powered by SvelteKit/Urara',
  author: {
    name: 'WingsMan',
    photo: '/assets/maskable@512.png',
    status: '🎮',
    bio: 'Backend software engineer',
    github: 'StanleyWKMan'
  },
  themeColor: '#3D4451'
}
