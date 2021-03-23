import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config.js'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        const response = await projectFirestore.collection('posts')
         .orderBy('createdAt', 'desc') 
         .get()

        // Update value of the posts array
        posts.value = response.docs.map(doc => {
          // Spread the properties and values into a new object
          return { ...doc.data(), id: doc.id }
        })
      }
      catch (err) {
        // err.message comes from the throw block Error ('no data is available')
        error.value = err.message
      }
    }

    return { posts, error, load }
}

export default getPosts