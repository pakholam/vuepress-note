import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/front/": [
    {
      text: "Front",
      children: [
        "/front/node.md",
        "/front/webpack.md",
        "/front/vue.md",
        "/front/react.md",
        "/front/umi.md",
        "/front/dva.md",
        "/front/ant-design-pro.md",
      ],
    },
  ],
  "/backend/": [
    {
      text: "Backend",
      children: ["/backend/go.md", "/backend/python.md", "/backend/java.md"],
    },
  ],
  "/database/": [
    {
      text: "Database System",
      children: ["/database/mysql.md", "/database/oracle.md"],
    },
    {
      text: "Datase Software",
      children: ["/database/dbms/navicat.md"],
    },
  ],
};
