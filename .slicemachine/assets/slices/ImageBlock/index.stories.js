import MyComponent from '../../../../slices/ImageBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ex aute adipisicing ex deserunt laboris ullamco cillum sunt. Voluptate commodo aliqua nisi sint reprehenderit aliquip dolore. Ad ex nulla ut.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Aliquip magna consequat velit laborum eu mollit ea nisi qui. Nostrud mollit laboris ex.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Dolore sunt qui sunt ullamco sunt irure proident nisi. Aute velit sit et. Qui dolore eu esse velit culpa.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Laboris proident ipsum ad mollit. Ad enim dolor ipsum irure laborum occaecat deserunt est esse.","spans":[]}]}],"primary":{"columns":875},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _FullWidth = () => ({
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
      mock: {"variation":"fullWidth","name":"Full Width","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Aliquip adipisicing incididunt aute dolor.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Et elit ullamco sit aute mollit pariatur excepteur non consectetur cillum. Deserunt incididunt anim Lorem sit.","spans":[]}]}],"primary":{},"id":"_FullWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidth.storyName = 'Full Width'
