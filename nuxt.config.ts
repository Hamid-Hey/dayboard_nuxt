// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@kit": "../client/components/kit",
    "@shered": "../client/components/shared",
    "@page": "../client/pages",
    "@helper": "../client/assets/helpers",
    "@mixin": "../client/assets/mixins",
    "@store": "../client/store",
  },

  // Global CSS
  css: ["~/assets/styles/main.scss"],

  // Globally Register Components
  components: [
    { path: "~/components/kit/VBtn" },
    { path: "~/components/kit/VCard" },
    { path: "~/components/kit/VContainer" },
    { path: "~/components/kit/VDataTable" },
    { path: "~/components/kit/VDialog" },
    { path: "~/components/kit/VDivider" },
    { path: "~/components/kit/VOtpInput" },
    { path: "~/components/kit/VRadio" },
    { path: "~/components/kit/VCol" },
    { path: "~/components/kit/VRow" },

    { path: "~/components/shared/VTimer" },
  ],

  // Extend Default Routing
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "home",
        path: "/",
        file: "/pages/home/index.vue",
      });
    },
  },

  modules: ["@pinia/nuxt"],

  // Define Source Directory
  srcDir: "./client",

  vite: {
    // Import SASS Variables, Functions, and Mixins
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/vars/_breakpoints.scss";
          @import "@/assets/styles/vars/_colors.scss";
          @import "@/assets/styles/vars/_typography.scss";
          @import "@/assets/styles/mixins/_button.scss";
          @import "@/assets/styles/mixins/_clearfix.scss";
          @import "@/assets/styles/mixins/_extend.scss";
          @import "@/assets/styles/mixins/_responsive.scss";
          @import "@/assets/styles/mixins/_grid.scss";
          @import "@/assets/styles/mixins/_selection.scss";
          @import "@/assets/styles/mixins/_radius.scss";
          @import "@/assets/styles/mixins/_margin.scss";
          @import "@/assets/styles/mixins/_padding.scss";
          `,
        },
      },
    },
  },
});
