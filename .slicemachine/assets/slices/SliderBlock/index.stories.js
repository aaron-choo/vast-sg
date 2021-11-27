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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"slider_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Do et magna in aute non quis dolore dolore velit nostrud officia labore eu. Anim enim proident pariatur cupidatat id est aute exercitation tempor elit id. Minim aute ad qui qui et eu officia ea consectetur velit aliquip fugiat aliqua laborum.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Magna in dolore in cillum magna ex deserunt Lorem do commodo. Elit esse ullamco pariatur fugiat ipsum esse. Lorem duis laborum culpa.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Minim consequat cupidatat culpa dolor do ullamco nostrud sunt reprehenderit cupidatat do.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
