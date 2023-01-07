<template>
  <paginate
      :page-count=pageCount
      :click-handler="changePage"
      :prev-text="'Назад'"
      :next-text="'Далі'"
      :container-class="'pagination justify-content-center flex-wrap'"
  >
  </paginate>
</template>

<script>
export default {
  name: "pagination.component",
  props:{
    pageCount: Number
  },
  methods:{
    changePage(page_num){
      this.$emit('changePage', {
        next_page: page_num
      })
    },
  }
}
</script>

<style scoped>

</style>
