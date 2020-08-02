<template>
  <div style="background-color: azure;">
    <h4>Hello from GlobalComponent</h4>
    <ul>
      <li>
        <code>kebab-case-prop: {{ kebabCaseProp }}</code>
      </li>
      <li>
        <code>camelCaseProp: {{ camelCaseProp }}</code>
      </li>
    </ul>
  </div>
</template>

<script>
const notSet = "Not set! Remember to use kebab-case prop names in the html/md.";

export default {
  name: "MyComponent",
  props: {
    kebabCaseProp: {
      type: String,
      default: notSet,
    },
    camelCaseProp: {
      type: String,
      default: notSet,
    },
  },
};
</script>
