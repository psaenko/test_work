<template>
    <div class="card-wrapper col-lg-4 col-md-6 col-12">
      <div class="card text-center my-3">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.body }}</p>
        </div>
        <div class="card-footer">
          <router-link :to="'/chart/' + post.id" class="text-muted">Кількість коментарів: {{ post.commentsCount }} </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "post.component",
  props: {
    post: Object
  }
}
</script>

<style scoped>
.card {
  min-width: 250px;
}

</style>
