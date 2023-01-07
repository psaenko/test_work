<template>
  <section>
    <div class="container">

      <posts-component :posts="createRange()" :offset="offset"/>

      <pagination-component @changePage="loadNext" :pageCount="pagesCount"/>
    </div>
  </section>
</template>

<script>
import postsComponent from '@/components/posts/posts.component.vue'
import paginationComponent from '@/components/paginations/pagination.component.vue'
import {PostsAPI} from '@/api/posts.api'
import {CommentsAPI} from "@/api/comments.api";
import {Toasts} from "@/toasts";

export default {
  name: 'Home',
  data() {
    return {
      posts: {},
      postsCount: 0,
      postsOnPage: 10,
      offset: 10
    }
  },
  async created() {
    try {
      this.posts = await PostsAPI.getPosts().then((posts) => posts.data);
      this.postsCount = this.posts.length;

      const stack = this.posts.map((post) =>
          CommentsAPI.getComments(post.id).then((comments) => {
            post.commentsCount = comments.data.length;
          })
      );

      await Promise.all(stack);

    } catch (err) {
      Toasts.createErrorToast()
    }
  },
  methods: {
    loadNext(page) {
      this.offset = (this.postsOnPage * page.next_page)
    },

    createRange() {
      const data = [];

      for (let i = this.offset ? this.offset - 10 : this.offset; i < this.offset; i++) {
        data.push(this.posts[i]);
      }
      return data;
    }
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.postsCount / this.postsOnPage)
    }
  },
  components: {
    postsComponent,
    paginationComponent
  }
}
</script>
