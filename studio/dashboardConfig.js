export default {
  widgets: [
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
                  buildHookId: '5ee9cb8105dc838bb3594e41',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cm2jfe1p',
                  apiId: 'b2fb2b8f-6a01-4bec-8c81-1177e361fc22'
                },
                {
                  buildHookId: '5ee9cb810b2edb4485c6af82',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mtk4pvks',
                  apiId: '33048f61-7839-4524-ac0d-ef4b61563488'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MartinStamina/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mtk4pvks.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
