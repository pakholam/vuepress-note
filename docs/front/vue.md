# Vue

## (1) CDN



对于制作原型或学习，你可以这样使用最新版本：

```html
<script src="https://unpkg.com/vue@next"></script>
```

对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏。

## (2) 下载并自托管

如果你想避免使用构建工具，但又无法在生产环境使用 CDN，那么你可以下载相关 `.js` 文件并自行托管在你的服务器上。然后你可以通过 `<script>` 标签引入，与使用 CDN 的方法类似。

这些文件可以在 [unpkg](https://unpkg.com/browse/vue@next/dist/) 或者 [jsDelivr](https://cdn.jsdelivr.net/npm/vue@next/dist/) 这些 CDN 上浏览和下载。各种不同文件将在[以后解释](https://v3.cn.vuejs.org/guide/installation.html#对不同构建版本的解释)，但你通常需要同时下载开发环境构建版本以及生产环境构建版本。

## (3) npm安装

在用 Vue 构建大型应用时推荐使用 npm 安装[[1\]](https://v3.cn.vuejs.org/guide/installation.html#footnote-1) 。npm 能很好地和诸如 [webpack](https://webpack.js.org/) 或 [Rollup](https://rollupjs.org/) 模块打包器配合使用。

```bash
# 最新稳定版
$ npm install vue@next
```

Vue 还提供了编写[单文件组件](https://v3.cn.vuejs.org/guide/single-file-component.html)的配套工具。如果你想使用单文件组件，那么你还需要安装 `@vue/compiler-sfc`：

```bash
$ npm install -D @vue/compiler-sfc
```

如果你是从 Vue 2 过渡而来的，请注意 `@vue/compiler-sfc` 替换掉了 `vue-template-compiler`

除了 `@vue/compiler-sfc` 之外，你还需要为已选择的打包工具选择一个配套的单文件组件 loader 或 plugin。更多信息请查阅[单文件组件文档](https://v3.cn.vuejs.org/guide/single-file-component.html)。

大多数情况下，我们更倾向于使用 Vue CLI 来创建一个配置最小化的 webpack 构建版本。

## (4) 命令行工具（CLI）

Vue 提供了一个[官方的 CLI](https://github.com/vuejs/vue-cli)，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了功能齐备的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org/)。

CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读[指南](https://v3.cn.vuejs.org/guide/introduction.html)，在熟悉 Vue 本身之后再使用 CLI。

对于 Vue 3，你应该使用 `npm` 上可用的 Vue CLI v4.5 作为 `@vue/cli`。要升级，你应该需要全局重新安装最新版本的 `@vue/cli`：

```bash
yarn global add @vue/cli
# 或
npm install -g @vue/cli
```

然后在 Vue 项目中运行：

```bash
vue upgrade --next
```

## (5) Vite

[Vite](https://github.com/vitejs/vite) 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目。

使用 npm：

```bash
$ npm init vite <project-name> -- --template vue
$ cd <project-name>
$ npm install
$ npm run dev
```

或者 yarn：

```bash
$ yarn create vite <project-name> --template vue
$ cd <project-name>
$ yarn
$ yarn dev
```