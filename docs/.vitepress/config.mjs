import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nepal Redcross Society, Kaski Chapter",
  description: "NRCS Kaski Documentation",
  base:'./',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Project Overview', link: '/project-overview' },
      { text: 'Objectives', link: '/objectives' },
      {text: 'Scope Definition', link:'/scope-definition'},
      {text: ' Workflow', link:'/flow.md'},
      {text: ' User Stories & AC', link:'/userstories-acceptanceCriteria.md'},
      {text: ' WBS', link:'/wbs.md'},
      {text: 'PERT', link:'/PERT.md'}

    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Project Overview', link: '/project-overview' },
          { text: 'Objectives', link: '/objectives' },
          {text: 'Scope Definition', link: '/scope-definition'},
          {text: 'Workflow', link: '/flow.md'},
          {text: ' User Stories & AC', link:'/userstories-acceptanceCriteria.md'},
          {text: ' WBS', link:'/wbs.md'},
          {text: 'PERT', link:'/PERT.md'}

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}
)

