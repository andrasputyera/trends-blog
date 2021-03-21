<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <!-- If posts array has values already inside it (checking the lengths) -->
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <!-- Otherwise data is still loading (no lengths)-->
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Home',
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }

  }
}
</script>
