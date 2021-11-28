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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Quis ea mollit esse aliqua labore adipisicing duis dolor cupidatat.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Anim commodo irure et Lorem aliquip velit aliqua proident. Officia ad cillum elit.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Irure incididunt dolor tempor eiusmod ea et.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ad anim enim commodo mollit aliquip cillum laboris labore sint ullamco irure tempor ipsum. Est nisi ex consectetur laborum culpa cupidatat laboris Lorem sit dolor dolor consequat mollit proident exercitation.","spans":[]}]}],"primary":{"columns":6219},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _FullScreenFixed = () => ({
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
      mock: {"variation":"fullScreenFixed","name":"Full Screen Fixed","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nostrud anim id velit cillum voluptate consectetur.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Sit quis commodo incididunt. Culpa est sit dolore cupidatat et tempor anim id est duis velit aliqua esse.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Amet Lorem incididunt quis reprehenderit in exercitation elit sint nulla pariatur.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Dolor dolore ut esse adipisicing fugiat excepteur do laborum incididunt aute.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nulla id fugiat consectetur consectetur voluptate. Et laborum enim officia.","spans":[]}]}],"primary":{},"id":"_FullScreenFixed"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullScreenFixed.storyName = 'Full Screen Fixed'

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
      mock: {"variation":"fullWidth","name":"Full Width","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Culpa ea officia esse commodo pariatur. Duis aliquip ea ut.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ea in laborum Lorem sit sint velit commodo Lorem occaecat. Occaecat veniam Lorem sint Lorem dolor laboris. Irure pariatur incididunt deserunt irure ea eu ea pariatur laboris fugiat pariatur sunt ea.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Culpa enim labore velit proident mollit aute magna quis exercitation consectetur. Ullamco ipsum et aliquip cillum sunt ut ea sit.","spans":[]}]}],"primary":{},"id":"_FullWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidth.storyName = 'Full Width'
