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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ipsum adipisicing cillum cupidatat eiusmod consequat. Et aliqua tempor minim elit eiusmod reprehenderit anim deserunt non aliquip sint amet. Cupidatat sunt pariatur irure sunt veniam ullamco proident culpa veniam.","spans":[]}],"device":"device mbp-13","align":"center"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Commodo veniam aute incididunt. Occaecat nulla ea consequat nisi ipsum amet pariatur.","spans":[]}],"device":"device ipad-pro-p","align":"left"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Mollit do non do ut do quis do quis consectetur irure tempor magna laborum. Et nisi ipsum incididunt anim ut ut qui minim voluptate velit. Sit in eu ullamco nulla et officia fugiat.","spans":[]}],"device":"device ipad-pro-p","align":"center"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Non elit pariatur aute excepteur laboris ad consectetur ipsum Lorem laboris dolore reprehenderit aliquip duis dolore. Pariatur proident dolore mollit qui magna ut aute aliquip id. Dolor ad qui commodo qui labore ipsum pariatur ea elit eu sint eiusmod ex velit cillum.","spans":[]}],"device":"device ipad-pro-l","align":"center"}],"primary":{"columns":1,"mobileColumns":2300,"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
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
      mock: {"variation":"fullWidth","name":"Full Width","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ad id deserunt ut commodo magna pariatur fugiat laborum. Culpa esse officia ex ullamco incididunt aute in. Eiusmod tempor in et anim fugiat laboris eiusmod minim laborum labore et id laboris ipsum.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Consectetur cillum in nisi reprehenderit voluptate amet nulla occaecat elit qui.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Velit est ex tempor id consequat minim cillum exercitation aliquip commodo. Dolore tempor nisi occaecat ullamco laboris consectetur culpa magna excepteur duis minim labore Lorem. Nisi dolor nostrud in ex laborum id cillum mollit laboris id eu.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nulla cillum sint dolor sint.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Sint proident sint anim dolor deserunt occaecat tempor dolore consectetur. Esse aliquip esse aliqua qui consectetur occaecat irure anim nisi commodo.","spans":[]}]}],"primary":{},"id":"_FullWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidth.storyName = 'Full Width'
