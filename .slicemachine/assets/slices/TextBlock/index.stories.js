import MyComponent from '../../../../slices/TextBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading1","text":"Monetize one-to-one models","spans":[]}],"description":[{"type":"paragraph","text":"Veniam ea Lorem ea adipisicing consectetur eiusmod dolor et culpa quis consequat. Exercitation eu deserunt do ipsum cillum amet quis cillum sit Lorem non quis.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
