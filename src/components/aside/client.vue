<template>
  <div class="client">
    <p>客户端二维码</p>
    <p>
      <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
      <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
    </p>
  </div>
</template>
<script>
export default {
}
</script>
<style  lang="scss">
  .client{
    p:nth-child(1){
      background: #ddd;
      padding-left:15px;
    }
    p:nth-child(2){
      width: 270px;
      padding: 15px;
      img{
        margin: 0 auto;
        width: 150px;
        height: 150px;
      }
      a{
        font-size:14px;
        color:#000;
        text-align: center;
      }
    }
  }
</style>
