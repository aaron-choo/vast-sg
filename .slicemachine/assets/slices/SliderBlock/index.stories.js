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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"slider_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Deserunt ut do est consectetur laboris ad cillum ea occaecat enim cillum veniam tempor.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Aliqua aliquip nulla do. Duis tempor nisi ipsum consequat deserunt culpa ea pariatur labore occaecat occaecat occaecat dolore. Amet est minim dolor mollit enim velit enim reprehenderit sint.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Non aliqua Lorem laboris cillum. Dolor proident do nisi. Amet nulla quis sit excepteur in deserunt laboris mollit aliquip esse magna pariatur cupidatat consequat do.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ad ut exercitation culpa. Do deserunt pariatur esse aliquip laboris dolor ullamco sint qui.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Enim culpa quis veniam cillum aute aliquip exercitation sit.","spans":[]}]}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
