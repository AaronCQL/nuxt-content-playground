<template>
  <article>
    <nuxt-content :document="page" />
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
    let page;
    const pages = await $content(params.pathMatch).fetch();

    if (Array.isArray(pages)) {
      page = pages.find((page) => page.slug === "index");
      if (!page) {
        return error({ statusCode: 404, message: "Page not found" });
      }
    } else {
      page = pages;
    }

    return {
      page,
      params,
    };
  },
};
</script>
