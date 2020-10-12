<template>
  <section class="posts-list">

      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :is-admin="isAdmin"
        :previewText="post.previewText"
        :thumbnail="post.thumbnail"
        :title="post.title" />

      <!-- <PostPreview :is-admin="isAdmin" id='2' previewText="This is my second post" thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTE5pOr4wI-1ZPNraeKVgETQLUOD0CD1QPWow&usqp=CAU" title="Post Title 2" />
      <PostPreview :is-admin="isAdmin" id='3' previewText="This is my third post" thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAo5fz7xP2uK2PdrDhBH9BkItCqCYy_116oQ&usqp=CAU" title="Post Title 3" /> -->
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'
export default {
  components: {PostPreview},
  props:{
    isAdmin:{
      type: Boolean,
      default: false
    },
    posts:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
