import MyComponent from '../../../../slices/HomeSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HomeSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_slider","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Cupidatat Lorem anim non aliqua id commodo non culpa pariatur consequat eiusmod dolore ut adipisicing. Enim cupidatat laborum ullamco culpa commodo do cillum cupidatat amet dolore cupidatat. Irure enim nulla amet nostrud esse aliqua laboris labore fugiat mollit quis ea mollit culpa.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Aliqua incididunt velit in reprehenderit culpa est. Esse est aliqua culpa veniam sit ullamco voluptate labore enim.","spans":[]}],"contentLink":{"link_type":"Web","url":"http://google.com"},"color":"#4e99e6"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Cillum est adipisicing est. Enim eu cillum cupidatat sunt minim exercitation reprehenderit cupidatat. Id velit tempor magna consequat enim mollit ea culpa.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Quis laboris labore esse. Ea qui sit sit laboris ullamco.","spans":[]}],"contentLink":{"link_type":"Web","url":"https://prismic.io"},"color":"#0f69be"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
