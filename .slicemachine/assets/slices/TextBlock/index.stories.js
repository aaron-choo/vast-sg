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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_block","items":[],"primary":{"title":[{"type":"heading1","text":"Cultivate viral content","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit aliquip voluptate voluptate est exercitation deserunt adipisicing ad. Aute consectetur commodo reprehenderit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
