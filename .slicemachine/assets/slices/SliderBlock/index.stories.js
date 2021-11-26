import MyComponent from '../../../../slices/SliderBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SliderBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"slider_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Reprehenderit Lorem ipsum commodo amet aute eu cupidatat cupidatat elit anim adipisicing labore. Non adipisicing nisi Lorem dolore ullamco nostrud fugiat laborum.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ad consectetur sit commodo et sit deserunt incididunt ex veniam dolore cupidatat. Officia veniam Lorem exercitation.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
