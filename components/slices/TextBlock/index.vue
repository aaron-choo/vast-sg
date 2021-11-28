<template>
  <div class="text-block section my-24 mx-4 lg:mx-40 grid grid-cols-12 gap-4">
    <h3 class="title tracking-tight font-light uppercase text-3xl lg:text-4xl col-span-12 lg:col-span-4">{{$prismic.asText(slice.primary.title)}}</h3>
    <!-- <prismic-rich-text :field="slice.primary.title" class="title uppercase" /> -->
    <prismic-rich-text :field="slice.primary.description" class="font-light text-lg lg:text-2xl col-span-12 lg:col-span-8" />
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
<style>
  .text-block p:nth-child(2){
    text-indent: 4em;
  }
</style>