import MyComponent from '../../../../slices/ImageBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ipsum voluptate aute nisi nostrud deserunt veniam cupidatat id non incididunt.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Do id cupidatat mollit consectetur ut non sit nulla sit in nostrud mollit. Pariatur irure incididunt do sunt dolore dolore veniam ipsum aute dolor eu. Do dolore nisi occaecat ullamco commodo consequat ipsum consectetur aliqua.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Enim eiusmod anim eiusmod enim proident.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Anim ea laboris id non officia fugiat velit voluptate sint officia proident labore.","spans":[]}]}],"primary":{"columns":1},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _FullWidth = () => ({
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
      mock: {"variation":"fullWidth","name":"Full Width","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Adipisicing commodo sint voluptate excepteur labore fugiat eu commodo voluptate cillum adipisicing do. Excepteur qui incididunt dolor cupidatat aute ex laboris irure ea qui voluptate tempor incididunt nulla. Exercitation cillum sint cillum ullamco minim elit ad consectetur laboris quis aute culpa.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Deserunt id cupidatat magna aliqua exercitation. Dolore pariatur dolore ipsum dolor ullamco exercitation elit adipisicing ut exercitation cillum ad ullamco.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Duis adipisicing excepteur id ipsum aliqua nostrud excepteur deserunt aliqua esse veniam sint ut.","spans":[]}]}],"primary":{},"id":"_FullWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidth.storyName = 'Full Width'
