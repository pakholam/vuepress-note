import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { path } from "@vuepress/utils";
import { navbar, sidebar } from "./configs";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/vuepress-note/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "imge/png",
        sizes: "16x16",
        href: `/imges/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "Cerf-Blog" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Cerf-Blog" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/safari-pineed-tab.svg",
        color: "#3eaf7c",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Cerf-Blog",
      description: "Vuepress Blog",
    },
  },

  bundler: process.env.DOCS_BUNDLER ?? "@vuepress/vite",

  themeConfig: {
    logo: "/images/hero.png",

    repo: "/pakholam/vuepress-note",

    docsDir: "docs",

    locales: {
      "/": {
        navbar: navbar.en,

        sidebar: sidebar.en,

        editLinkText: "Edit this page on Github",
      },
    },

    themePlugins: {
      git: isProd,
      prismjs: !isProd,
    },
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, "../../package/@vuepress")
        ),
    },
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
            hotKey: ['s', '/'],
            maxSuggestions: 10,
            isSearchable: (page) => page.path != '/',
            getExtraFields: () => [],
          },
        },
      },
    ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      '@vuepress/plugin-shiki',
      isProd ? { theme: 'dark-plus', } : false,
    ],
  ],
});
