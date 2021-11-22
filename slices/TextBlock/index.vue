<template>
  <div class="section px-4 lg:px-36">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>