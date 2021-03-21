<!--
<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p> {{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja 1</button>
    <h2>Reactive</h2>
    <p> {{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja 2</button>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop watching</button>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue';
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })

    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet nisi. Vestibulum eu dui dictum, ornare est non, dignissim dui. Donec at ex nulla. Aenean sem tortor, bibendum ac accumsan vel, elementum vel turpis. Nam auctor egestas pulvinar. Aenean placerat finibus finibus. Praesent dictum velit at purus aliquam, sit amet mattis est molestie. Duis a nulla et mauris luctus feugiat nec cursus odio. Nam elementum vitae est eu porttitor. Nulla vestibulum gravida magna eu ultricies. Nunc posuere tincidunt pellentesque. Sed id condimentum nisl, ultricies viverra orci. Fusce sit amet massa ut nibh feugiat elementum ac id est.', id: 1 },
      { title: 'top 5 CSS tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Purus sit amet volutpat consequat. Nisi quis eleifend quam adipiscing.', id: 2 },
    ])

    const showPosts = ref(true)

    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    // const stopWatchEffect = watchEffect(() => {
    //   console.log('watchEffect function run', search.value)
    // })
    
    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    // Need to invoke the Watch and WatchEffect functions to stop them running
    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    // Using refs, we have to access the value property
    const updateNinjaOne = () => {
      ninjaOne.value.age = '40'
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = '45'
    }
    // *** reactive does NOT work with primitive values

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, search, posts, showPosts, matchingNames, handleClick }
  }
}
</script>
-->
