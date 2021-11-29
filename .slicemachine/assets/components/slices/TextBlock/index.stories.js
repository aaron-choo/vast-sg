import MyComponent from '../../../../../components/slices/TextBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'components/slices/TextBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading1","text":"Visualize proactive eyeballs","spans":[]}],"description":[{"type":"paragraph","text":"Anim non pariatur labore.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
