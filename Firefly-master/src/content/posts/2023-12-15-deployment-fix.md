---
title: 踩坑记录：如何完美部署 GitHub Pages 学术主页
published: 2023-12-15
description: 记录使用 Jekyll 模版部署个人主页时遇到的样式丢失问题，以及详细的修复过程。
tags: [Github, Tutorial, VS Code]
category: 技术复盘
draft: false
---

## 前言

最近我基于 `luost26/academic-homepage` 模版搭建了自己的学术主页。原本以为 "Fork" 之后就能直接用，结果部署上线后，页面变成了这样：

![样式丢失的错误页面](/images/homepage-error.png)
*图 1：样式丢失，CSS 无法加载，导航栏点击 404*

这不仅不美观，完全无法使用。经过一番研究，我发现这是 GitHub Pages 的路径配置问题。

## 问题根源：Baseurl

GitHub Pages 有两种模式：
1. **User Page**: `username.github.io` （根目录）
2. **Project Page**: `username.github.io/project-name` （子目录）

我的主页仓库名为 `shaungzhou`，属于第二种。但是 Jekyll 模版默认是按照第一种配置的。这就导致网页在加载图片和 CSS 时，去根目录找，结果当然找不到。

## 解决方案：修改 _config.yml

我使用 **VS Code** 打开了项目，找到了根目录下的 `_config.yml` 核心配置文件。

我们需要显式地告诉 Jekyll，这个网站是运行在 `/shaungzhou` 这个子路径下的。

### 具体代码修改

```yaml
# 修改前
url: "[http://yoursite.com](http://yoursite.com)"
baseurl: ""

# 修改后 (重点)
url: "[https://toponezs111111-source.github.io](https://toponezs111111-source.github.io)"
baseurl: "/shaungzhou"