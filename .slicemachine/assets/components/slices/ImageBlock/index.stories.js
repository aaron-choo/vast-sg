import MyComponent from '../../../../../components/slices/ImageBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'components/slices/ImageBlock'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Velit duis sit tempor cupidatat aute ipsum tempor aliquip est. Fugiat veniam officia cillum consectetur. Esse nisi dolor commodo in aliqua Lorem do.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nulla anim amet proident. In do excepteur amet consectetur aliqua qui et dolore.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Velit dolor laborum ex Lorem.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nulla voluptate ad cillum et magna sit dolor mollit aute voluptate enim. Exercitation laboris ea amet pariatur ex dolor nulla.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Proident elit nisi voluptate. Dolor excepteur minim laborum ipsum aute in qui mollit consectetur.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Minim excepteur elit proident laborum anim non adipisicing culpa consectetur cupidatat aute sit cupidatat. Excepteur esse in ut.","spans":[]}]}],"primary":{"columns":3564},"id":"_DefaultSlice"}
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
      mock: {"variation":"fullWidth","name":"Full Width","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nostrud sunt magna aute fugiat proident aute tempor officia in consectetur id tempor cupidatat.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Dolor excepteur sint velit do ad enim elit eu consequat fugiat consectetur qui duis. Magna laborum consequat enim magna enim incididunt mollit sunt consectetur incididunt sint. Sit adipisicing commodo mollit excepteur amet id esse fugiat aute laboris.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ad officia in aute eu occaecat ad pariatur nostrud occaecat. Dolore cupidatat incididunt non ipsum occaecat eu qui et.","spans":[]}]}],"primary":{},"id":"_FullWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidth.storyName = 'Full Width'
