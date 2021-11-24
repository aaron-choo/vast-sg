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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"slider_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Id id ea nulla labore fugiat pariatur nostrud quis sunt et ex.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Duis pariatur tempor enim eu sit esse anim eiusmod laboris ullamco anim nostrud.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ullamco eu ad adipisicing aute. Sunt aliqua irure excepteur anim tempor esse id commodo do ea nulla commodo. Dolore aliqua do ipsum magna et ullamco laborum sunt nulla enim elit.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Consequat enim mollit nostrud tempor laborum excepteur pariatur consequat anim amet do culpa ullamco et.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
