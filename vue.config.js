const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/cp1", //リポジトリ名を指定
  outputDir: "docs", //GitHubPagesで公開するにはdistではなくdocs配下にコンパイルする
  transpileDependencies: true,
});
