<template>
  <div class="row justify-content-center m-auto">
    <div class="form-check form-switch">
      <input class="form-check-input" v-model="isSort" @change="sortedPosts" type="checkbox"
             id="flexSwitchCheckDefault">
      <label class="form-check-label" for="flexSwitchCheckDefault">A-Z</label>
    </div>

    <post-component v-for="post in posts" :post="post"/>
  </div>
</template>

<script>
import postComponent from '@/components/posts/post.component.vue'

export default {
  name: "post",
  data() {
    return {
      isSort: false
    }
  },
  props: {
    posts: Array,
  },
  components: {
    postComponent,
  },
  methods: {
    sortedPosts() {
      this.isSort = !this.isSort;
      if (this.isSort === true) {
        this.isSort = false;
      } else {
        this.isSort = true;
      }

      switch (this.isSort) {
        case true:
          return this.posts.sort((a, b) => a.title.localeCompare(b.title));
        default:
          return this.posts.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
  },
  updated() {
    this.sortedPosts()
  }
}
</script>

<style scoped>

</style>
