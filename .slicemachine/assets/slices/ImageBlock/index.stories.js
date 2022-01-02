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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Enim Lorem duis quis excepteur commodo dolore eu aliqua dolor exercitation magna duis culpa.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Cillum Lorem minim et officia amet dolor nisi pariatur reprehenderit irure anim.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Ullamco duis labore velit duis cupidatat nostrud tempor ea fugiat qui quis fugiat culpa officia. Duis ad ullamco ex anim dolor. Ex labore irure do magna laborum labore proident cillum dolor sint mollit.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Dolor adipisicing occaecat ipsum eu proident laboris enim aute veniam consectetur magna.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Labore nisi irure in anim mollit reprehenderit dolor.","spans":[]}]}],"primary":{"columns":4237},"id":"_DefaultSlice"}
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
      mock: {"variation":"fullWidth","name":"Full Width","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Reprehenderit labore laborum ipsum do culpa culpa est mollit eu ea commodo. Cupidatat cupidatat id excepteur ex et aute reprehenderit elit nulla nulla pariatur et eu ipsum.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nostrud deserunt occaecat sint ea duis amet aute do esse anim aliqua anim anim. Lorem culpa consectetur magna duis proident nostrud quis laborum enim anim. Ad aute ea elit sit eu et elit ut tempor consequat amet.","spans":[]}]}],"primary":{},"id":"_FullWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidth.storyName = 'Full Width'
