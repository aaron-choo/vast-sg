import MyComponent from '../../../../../components/slices/SliderBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'components/slices/SliderBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"slider_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Labore voluptate consequat eu incididunt esse officia do ad ex amet. Dolor non fugiat laboris esse eu magna exercitation.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Voluptate laboris sit eu dolor consectetur. Nostrud duis non proident ex consectetur ea tempor voluptate sit commodo amet esse.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Tempor nisi fugiat laboris adipisicing consectetur dolor Lorem nulla ea non sit et laboris mollit et. Ut est consectetur magna non nostrud ex Lorem ea ullamco est pariatur ut consectetur pariatur dolor. Occaecat sit anim ipsum dolore officia consectetur esse.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Consectetur eu consectetur ut cupidatat eu enim esse laborum ad cillum aute tempor enim incididunt consequat.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Veniam qui nostrud cupidatat.","spans":[]}]}],"primary":{"align":"full"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
