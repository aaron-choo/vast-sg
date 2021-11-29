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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"slider_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Aute nisi dolor ad commodo occaecat mollit mollit nulla consectetur proident eu labore. In dolor magna eiusmod pariatur culpa proident. Ipsum fugiat nulla sint.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Lorem sint enim elit aliquip esse qui ullamco esse.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Aliquip laborum enim laborum occaecat consectetur magna do id labore anim sint consequat Lorem duis.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Reprehenderit excepteur ipsum pariatur qui. Reprehenderit ullamco consequat eu eiusmod labore voluptate ut ipsum eiusmod aliqua esse duis fugiat laborum do. Aute cupidatat excepteur tempor officia ad cillum quis.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
