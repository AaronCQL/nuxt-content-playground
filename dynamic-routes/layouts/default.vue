<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/index">/</nuxt-link>
        </li>
        <br />
        <li>
          <nuxt-link to="/first/index">/first</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/first/hello">/first/hello</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/first/world">/first/world</nuxt-link>
        </li>
        <br />
        <li>
          <nuxt-link to="/second/index">/second</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/second/hello">/second/hello</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/second/world">/second/world</nuxt-link>
        </li>
      </ul>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
