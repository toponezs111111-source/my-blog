import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro"; 

// https://astro.build/config
export default defineConfig({
    // 1. 你的 GitHub Pages 根地址
    site: "https://toponezs111111-source.github.io",

    // 2. 你的仓库名称（必须带斜杠）
    base: "/my-blog",
    
    trailingSlash: "always",
    
    integrations: [
        tailwind({
            nesting: true,
        }),
        swup({
            theme: false,
            animationClass: "transition-swup-", 
            containers: ["main"],
            smoothScrolling: false,
            cache: true,
            preload: false,
            accessibility: true,
            updateHead: true,
            updateBodyClass: false,
            globalInstance: true,
            resolveUrl: (url) => url,
            animateHistoryBrowsing: false,
            skipPopStateHandling: (event) => {
                return event.state && event.state.url && event.state.url.includes("#");
            },
        }),
    ], // <--- 你之前漏掉了这个中括号
}); // <--- 你之前漏掉了这个大括号和圆括号