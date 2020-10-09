<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post='loadedPost' />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  components:{AdminPostForm},
  layout:"admin",
  data(){
    return{
      loadedPost:{
        author:"King",
        title:"My awesome blog app",
        content:"It's my content NVM",
        thumbnailLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTE5pOr4wI-1ZPNraeKVgETQLUOD0CD1QPWow&usqp=CAU"
      }
    }
  }
}
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
