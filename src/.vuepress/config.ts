import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Masterain Home Page",
      description: "Masterain Home Page",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Masterain 的主页",
      description: "Masterain 的主页",
    },
  },


  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
