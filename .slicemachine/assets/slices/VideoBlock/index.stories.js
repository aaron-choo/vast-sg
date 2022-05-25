import MyComponent from '../../../../slices/VideoBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/VideoBlock'
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
      mock: {"variation":"default","name":"Default","slice_type":"video_block","items":[],"primary":{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"device":"device-ipad-pro-l","align":"center","poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"caption":"incubate dynamic blockchains"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
