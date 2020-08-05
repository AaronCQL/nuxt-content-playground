export default {
  mode: "universal",
  target: "static",
  modules: ["@nuxt/content"],
  components: true,
  generate: {
    fallback: "404.html",
    routes: async function() {
      const { $content } = require("@nuxt/content");
      const files = await $content()
        .only(["path"])
        .fetch();

      return files.map((file) => {
        const trailingIndexRegex = /\/index\/?$/;
        return file.path.replace(trailingIndexRegex, "") || "/";
      });
    },
  },
};
