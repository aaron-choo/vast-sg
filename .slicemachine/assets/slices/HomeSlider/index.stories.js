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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_slider","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Sint aliqua anim quis nulla irure labore. Dolor proident est aliquip officia mollit minim non minim tempor aute.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Minim eiusmod culpa aliquip quis laborum enim quis.","spans":[]}],"content-link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Aute voluptate duis sit eu ut nostrud consequat reprehenderit proident Lorem nostrud. Labore Lorem duis mollit culpa veniam sunt ullamco ut.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Nisi sunt ipsum anim. Pariatur enim elit tempor deserunt. Aliquip irure deserunt magna nulla veniam velit pariatur aute proident duis in est.","spans":[]}],"content-link":{"link_type":"Web","url":"http://twitter.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Culpa reprehenderit veniam non dolore esse in ex voluptate pariatur.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Sit sint occaecat excepteur magna reprehenderit velit ex sunt laborum Lorem nostrud. Sint exercitation occaecat aute voluptate eiusmod.","spans":[]}],"content-link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'