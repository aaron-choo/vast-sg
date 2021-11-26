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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"home_slider","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Enim quis exercitation aliqua eu culpa duis et qui ullamco sunt nulla officia ex culpa. Reprehenderit occaecat amet eu. Magna proident magna sit laboris aliquip ut adipisicing nulla.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Sunt velit sint Lorem consequat.","spans":[]}],"content-link":{"link_type":"Web","url":"https://prismic.io"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Id ad elit ea sunt fugiat tempor anim qui ad. Culpa nulla in reprehenderit ullamco quis tempor minim sint cupidatat laborum est Lorem.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Ex aliquip consequat deserunt pariatur amet do amet id amet ipsum consequat. Sint ut et officia cupidatat irure quis consectetur anim irure voluptate esse irure.","spans":[]}],"content-link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"title":[{"type":"paragraph","text":"Nulla consequat commodo anim Lorem dolor occaecat irure commodo occaecat sunt. Duis duis in non occaecat velit consectetur elit.","spans":[]}],"subtitle":[{"type":"paragraph","text":"Magna anim id id enim laborum veniam ex nisi irure. Eiusmod laborum ullamco consequat. Exercitation dolore enim fugiat minim dolor quis exercitation adipisicing velit amet consectetur ad.","spans":[]}],"content-link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"branding-showcase":{"link_type":"Web","url":"http://google.com"},"web-showcase":{"link_type":"Web","url":"https://prismic.io"},"interior-showcase":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
