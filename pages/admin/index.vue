<template>
  <div class="admin">
    <section class="new-post">
      <AppButton style="margin-top: 1em;" @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h2>Existing Post</h2>
      <PostList isAdmin />
    </section>
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
import PostList from '~/components/Posts/PostList'
export default {
  layout:"admin",
  components: {PostList,AppButton}
}
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>
