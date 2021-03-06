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
      mock: {"variation":"default","name":"Default","slice_type":"video_block","items":[{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"caption":"grow intuitive vortals","device":"device ipad-pro-p"},{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"caption":"orchestrate viral users","device":"device iphone-x"},{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"caption":"target rich models","device":"device iphone-x"},{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"caption":"syndicate killer networks","device":"device mbp-13"}],"primary":{"columns":9718,"mobileColumns":1189},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _GridWithBackground = () => ({
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
      mock: {"variation":"gridWithBackground","name":"Grid with Background","slice_type":"video_block","items":[{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"caption":"architect compelling infomediaries","device":"device mbp-13"},{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"caption":"embrace B2B infomediaries","device":"device mbp-13"},{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"caption":"expedite viral infomediaries","device":"device iphone-x"},{"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"poster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"caption":"aggregate out-of-the-box schemas","device":"device iphone-x"}],"primary":{"columns":5125,"mobileColumns":6762,"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"}},"id":"_GridWithBackground"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_GridWithBackground.storyName = 'Grid with Background'
