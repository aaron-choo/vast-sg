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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading1","text":"Reintermediate user-centric convergence","spans":[]}],"description":[{"type":"paragraph","text":"Sint tempor irure fugiat aute nulla proident irure ad. Proident quis sit exercitation duis qui dolore.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
