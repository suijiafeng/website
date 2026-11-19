# 代码工匠

suijiafeng 的个人站点。首页标题是「代码工匠 · 前端工程师 | 中后台 · 配置平台 · 数据可视化」：前端工程师主页，内容围绕复杂中后台、配置平台与数据可视化，并包含一份中文技术博客。

线上地址：<https://suijf.site>

## 仓库内容

本仓库只存放生成后的静态文件，没有站点源码。从现有产物可以确认：

- **Next.js 静态导出**：各路由的 `index.html`、`404.html`，以及 `_next/static` 下的 `_buildManifest.js`、`_ssgManifest.js` 和 Turbopack 运行时
- **Pagefind 1.5.2**：`pagefind/`（见 `pagefind/pagefind-entry.json`）
- `CNAME` 内容为 `suijf.site`；`.nojekyll` 让 GitHub Pages 按静态文件托管 `_next`

## 源码与部署

`develop` 上的提交信息为 `deploy: suijiafeng/blog-source@<sha>`（最早一笔是 `deploy: suijiafeng/blog@<sha>`），源码在 [suijiafeng/blog-source](https://github.com/suijiafeng/blog-source)。当前页面的 `data-rev` 与最新部署提交里的源码 SHA 一致。

构建结果提交到本仓库后，由 GitHub Pages 发布：分支 `main`、目录 `/`，自定义域使用 `CNAME`。

这些部署会按构建产物同步，并删除产物里已经不存在的文件。本文件不在静态导出中，下一次部署可能会把它删掉。需要长期保留的说明应放在源仓库的导出结果里，而不是只改本仓库。
