import MyComponent from '../../../../slices/HomeSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSlider'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_slider","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Veniam culpa minim laborum deserunt aliquip.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Nisi nisi ea laboris proident quis ut aliquip ipsum irure eu in exercitation dolor laborum officia.","spans":[]}],"content-link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Aliquip qui est officia et laboris esse adipisicing Lorem qui sunt anim excepteur irure fugiat. Ea minim cillum amet. Sint exercitation magna fugiat velit quis aute do ad laborum incididunt officia culpa.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Dolor sunt nisi do.","spans":[]}],"content-link":{"link_type":"Web","url":"https://prismic.io"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Mollit dolor ad nisi ea tempor pariatur irure. Fugiat do fugiat Lorem aliqua velit aliquip.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Cillum irure quis elit eiusmod pariatur id magna. Enim minim sit fugiat proident fugiat velit aute laborum exercitation cillum esse. Magna veniam laborum consectetur duis consequat ullamco voluptate est ipsum nostrud fugiat proident.","spans":[]}],"content-link":{"link_type":"Web","url":"http://twitter.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Ipsum do eiusmod mollit reprehenderit do aliquip elit. Id veniam eiusmod ea eiusmod tempor labore sint. Aliqua esse ea in aliqua ex.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Deserunt labore voluptate laborum ipsum et irure reprehenderit ut eu sit cupidatat do Lorem. Labore minim dolor enim nostrud ipsum cupidatat dolor.","spans":[]}],"content-link":{"link_type":"Web","url":"http://google.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Sunt consequat amet enim mollit sit.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Culpa incididunt excepteur sint tempor.","spans":[]}],"content-link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"branding-showcase":{"link_type":"Web","url":"http://google.com"},"web-showcase":{"link_type":"Web","url":"https://prismic.io"},"interior-showcase":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
