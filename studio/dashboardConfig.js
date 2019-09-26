export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8d00d52290d7916a01cf0f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3f8k3d64',
                  apiId: '224ee6b8-cb49-4904-9619-3ae249ffa56f'
                },
                {
                  buildHookId: '5d8d00d54e351989a7569457',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4xbfstx7',
                  apiId: '3b627f2b-d3c6-4ad2-9ca5-515c7241ede3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JohnGoodman/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4xbfstx7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
