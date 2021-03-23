import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

// We need to pass in the id that we receive from selecting a specific post
const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let response = await projectFirestore.collection('posts').doc(id).get()
        
        // We need to check if document exists
        if (!response.exists) {
          throw Error('That trends post does not exist')
        }
        post.value = { ...response.data(), id: response.id }  
      }
      catch (err) {
        // err.message comes from the throw block Error ('no data is available')
        error.value = err.message
      }
    }

    return { post, error, load }
}

export default getPost