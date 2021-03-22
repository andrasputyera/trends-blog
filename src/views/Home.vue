<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <!-- If posts array has values already inside it (checking the lengths) -->
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
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
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Home',
  components: { PostList, TagCloud, Spinner },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }

  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
