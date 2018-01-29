<template>
 <div class="release1">
    <button @click="release1">发布话题</button>
 </div>
</template>
<script>
export default {
  methods: {
    release1 () {
      this.$router.push({path: '/release'})
    }
  }
}
</script>
<style scoped lang="scss">
  .release1{
    width: 270px;
    padding: 15px;
    background: #fff;
    margin-top:20px;
    border-radius: 5px;
    button{
      width: 80px;
      height: 40px;
      background: green;
      border:none;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
  }
</style>
