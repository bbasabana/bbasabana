export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5eaa75e8247691b7af45f33f',
                  title: 'Sanity Studio',
                  name: 'bbasabana-studio',
                  apiId: '8e7fce4e-b903-4d49-9fc8-00d4be6adfa1'
                },
                {
                  buildHookId: '5eaa75e8247691a8dd45f36d',
                  title: 'Blog Website',
                  name: 'bbasabana',
                  apiId: 'bda72689-48a7-462e-8c3d-087223a272ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bbasabana/bbasabana',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bbasabana.netlify.app', category: 'apps'}
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
