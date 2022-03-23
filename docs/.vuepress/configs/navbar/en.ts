import type { NavbarConfig } from "@vuepress/theme-default";
import { version } from '../meta';

export const en: NavbarConfig = [
  {
    text: 'Front',
    children: [
      {
        text: 'Node',
        link: '/front/node.html',
      },
      '/front/webpack.md',
      '/front/vue.md',
      '/front/react.md',
      '/front/umi.md',
      '/front/dva.md',
      '/front/ant-design-pro.md',
    ],
  },
  {
    text: 'BackEnd',
    children: [
      {
        text: 'Golang',
        link: '/backend/go.html',
      },
      '/backend/python.md',
      '/backend/java.md',
    ],
  },
  {
    text: 'Database',
    children: [
      {
        text: 'Database System',
        children: [
          {
            text: 'Mysql',
            link: '/database/mysql.html',
          },
          '/database/oracle.md',
        ],
      },
      {
        text: 'Database Software',
        children: [
          {
            text: 'Navicat',
            link: '/database/dbms/navicat.md',
          },
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/pakholam/cerf-blog/blob/main/README.md'
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org',
      },
    ],
  },
]