<template>
    <header>
      <div class="nav">
        <div class="left">
          <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAolBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYAAAAAAAAAAAAFBQUFBQUEBAQEBAQEBAQICAQEBAQEBwQHBwcHBwcHBwcHBwMHCgMGBgYKCgoGBgYJCQYJCQkJCQkICwgICAgICwgICwgICwgICwgICwgLDQtGnG0lAAAANnRSTlMAAQIDBAUGDQ4PEBEUFRobHB4gIiMkJigsLjAyMzk6PEFCRUZISUtMUFBRVFdZW1xcXV5fYGEIq40aAAAAkElEQVQYGZ3B2RZCUAAF0CNEAyql0iiNaDCc//+1ZK2L7kMP7Q38ZPQ1fFMWCVkEJlqUA5k/yKeFhs/U62BwZqJDUF90UdJiziFYvKOy5B6CwysqM4YQesy6+Nhwi1rEHUrDjDZqdsGT66xThmioCStHHY0VGV1uwQQtZs7MgCQkfUgcMlYhmZIjyBRvjD+9Af7aD071jQI/AAAAAElFTkSuQmCC"/>
          <input type="text">
        </div>
        <div class="right">
          <ul>
            <router-link to="/" tag="li">首页</router-link>
            <router-link to="xin" tag="li">新手入门</router-link>
            <router-link to="api" tag="li">API</router-link>
            <router-link to="guan" tag="li">关于</router-link>
            <router-link to="register" tag="li">注册</router-link>
            <router-link to="login" tag="li">登录</router-link>
          </ul>
        </div>
      </div>
    </header>
</template>
<script>
export default {
}
</script>
<style lang="scss">
  $w:100%;
 header{
   width:$w;
   height: 50px;
   background: #0A2705;
   color:#fff;
   text-align: center;
   line-height: 50px;
   .nav{
     width: 90%;
     height:$w;
     margin: 0 auto;
     overflow: hidden;
     .left{
       width: 400px;
       height: $w;
       position: relative;
       float: left;
       overflow: hidden;
       img:nth-child(1){
         width:100px;
         height:40px;
         float: left;
       }
       img:nth-child(2){
         position: absolute;
         width:25px;
         height:25px;
         top:10px;left:140px;
       }
       input{
         float:right;
         width:250px;
         height:25px;
         margin-top:10px;
         margin-right:20px;
         border-radius: 10px;
         border:none;background:#ccc;
       }
     }
     .right{
       width: 420px;
       height: $w;
       float: right;
       font-size:14px;
       ul{
         width: $w;
         height: $w;
         overflow: hidden;
         li{
           width:70px ;
           height: $w;
           float: left;
         }
       }
     }
   }
}
</style>
