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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_block","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Tempor cillum adipisicing sunt tempor occaecat laboris eiusmod duis esse. Esse proident aliquip Lorem deserunt dolore officia.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Proident aliquip id irure sit voluptate cillum ad officia quis eiusmod deserunt exercitation est dolor ex. Minim consectetur cupidatat qui eiusmod dolor sunt dolore ipsum excepteur nisi irure exercitation laboris. Minim fugiat et enim officia sit aliqua excepteur adipisicing pariatur esse anim ut veniam esse.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nulla aute incididunt anim do nulla laborum cillum adipisicing aliquip commodo nisi sunt amet ut.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Consectetur anim eu ut. Ad minim commodo fugiat aliquip eiusmod et excepteur.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"In sit reprehenderit sit culpa sunt quis quis nisi quis occaecat esse laboris sunt consectetur ullamco.","spans":[]}]}],"primary":{"columns":6032},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
