<template>
  <div
    class="module text-block section my-24 mx-4 lg:mx-8 grid grid-cols-12 gap-4"
  >
    <h4
      class="
        title
        tracking-tight
        leading-none
        text-4xl
        lg:text-5xl lg:leading-none
        col-span-10 col-start-1
        lg:col-start-1 lg:col-span-6
      "
    >
      {{ $prismic.asText(slice.primary.title) }}
    </h4>
    <!-- <prismic-rich-text :field="slice.primary.title" class="title uppercase" /> -->
    <prismic-rich-text
      :field="slice.primary.description"
      class="
        leading-tight
        text-base
        lg:text-lg lg:leading-tight
        col-span-10 col-start-1
        lg:col-start-8 lg:col-span-5
      "
    />
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
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
<style>
.text-block p:nth-child(n + 2) {
  text-indent: 4em;
}
</style>
