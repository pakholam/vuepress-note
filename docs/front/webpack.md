# Webpack

## 局部安装

`npm install --save-dev webpack`

`npm intall --save-dev webpack@<version>`

如果你使用 webpack v4+ 版本，并且想要在命令行中调用 `webpack`，你还需要安装CLI

`npm install --save-dev webpack-cli`

构建 打包

```js
"scripts": {
  "build": "webpack --config webpack.config.js"
}
```

## 全局安装

`npm install -g webpack`

## 最新体验版本

```bash
npm install --save-dev webpack@next
# 或特定的 tag/分支
npm install --save-dev webpack/webpack#
```