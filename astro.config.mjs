import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro";
import icon from "astro-icon";
import svelte from "@astrojs/svelte"; // 1. 新增：引入 Svelte 引擎

// https://astro.build/config
export default defineConfig({
    site: "https://toponezs111111-source.github.io",
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
        icon(),
        svelte(), // 2. 新增：启用 Svelte 集成
    ],
});