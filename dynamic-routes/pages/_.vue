<template>
  <article>
    <nuxt-content :document="content" />
  </article>
</template>

<script>
export default {
  middleware({ params, redirect }) {
    // redirect all instances of `xxx/index` or `xxx/index/` to `xxx`
    const path = "/" + params.pathMatch;
    const trailingIndexRegex = /\/index\/?$/;
    if (path.match(trailingIndexRegex)) {
      redirect(path.replace(trailingIndexRegex, "") || "/");
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      let content = await $content(params.pathMatch).fetch();

      if (Array.isArray(content)) {
        content = content.find((page) => page.slug === "index");
      }

      if (!content) {
        throw new Error();
      }

      return {
        content,
      };
    } catch (e) {
      console.log(e);
      return error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
