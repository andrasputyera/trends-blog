import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        // Simulating a delay
        await new Promise(resolve => {
          setTimeout(resolve, 2000)
      })

        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data is available')
        }
        // We take the data that we receive and use the json method on it. Once it is done, the value updates the posts property
        posts.value = await data.json()
      }
      catch (err) {
        // err.message comes from the throw block Error ('no data is available')
        error.value = err.message
      }
    }

    return { posts, error, load }
}

export default getPosts