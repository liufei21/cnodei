<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  $w:100%;
  div,p,span,a,header,footer,html,body,h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
    display: block;
    text-decoration: none;
  }
  ul,ol,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  html,body,img{
    width:$w;
    height: $w;
    display: block;
  }
  body{
    background: #ccc;
  }
  /*@media screen and */
</style>
