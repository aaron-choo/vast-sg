import MyComponent from '../../../../slices/NewsSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/NewsSlider'
}


export const _Default = () => ({
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
      mock: {"variation":"default","name":"Default","slice_type":"news_slider","items":[],"primary":{"title":[{"type":"heading1","text":"Facilitate magnetic methodologies","spans":[]}],"description":[{"type":"paragraph","text":"Dolore aliquip nulla commodo Lorem.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
