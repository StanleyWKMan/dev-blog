import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
    bridgy: {
        post: ['mastodon']
      },
      comment: {
        use: ['Webmention', 'Giscus'],
        style: 'boxed',
        webmention: {
          username: 'wingstako.dev',
          sortBy: 'created',
          sortDir: 'down',
          form: true,
          commentParade: true
        },
        giscus: {
            repo:"wingstako/dev-blog",
            repoID: 'R_kgDOHOzgEw',
            category: 'General',
            categoryID: 'DIC_kwDOHOzgE84CO9wZ',
            reactionsEnabled: true,
            lang: 'zh-TW',
            theme: 'preferred_color_scheme'
          }
    }
}
