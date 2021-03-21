<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from '@/components/SinglePost.vue';

    
    export default {
      props: ['posts'],
      components: { SinglePost },
      setup(props) {
          onMounted(() => console.log('component mounted'))
          onUnmounted(() => console.log('component umounted'))
          onUpdated(() => console.log('component updated'))
      }  
    }
</script>

<style scoped>

</style>