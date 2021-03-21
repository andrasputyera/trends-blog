import { ref } from 'vue'

// We need to pass in the id that we receive from selecting a specific post
const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        // Simulating a delay
        await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })

        // The data will be fetched from the route along with the id of the post we are selecting  
        let data = await fetch('http://localhost:3000/posts/' + id)
        if (!data.ok) {
          throw Error('that post does not exist')
        }
        // We take the data that we receive and use the json method on it. Once it is done, the value updates a single post property
        post.value = await data.json()
      }
      catch (err) {
        // err.message comes from the throw block Error ('no data is available')
        error.value = err.message
      }
    }

    return { post, error, load }
}

export default getPost