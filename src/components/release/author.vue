<template>
  <div class="author">
    <p>个人信息</p>
    <ul>
      <li>
        <img src="https://avatars3.githubusercontent.com/u/34757702?v=4&amp;s=120" title="liufei21">
        <a href="/user/liufei21">liufei21</a>
      </li>
      <li><span>积分:0</span></li>
      <li><i>“这个家伙很懒什么个性签名都没有留下”</i></li>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
 .author{
   margin-top:0;
   ul{
     li{
       overflow: hidden;
       img{
         float: left;
         width: 45px;
         height: 45px;
       }
       a{
         float:left;
         color:#000;
         font-size:14px;
         line-height: 45px;
         margin-left:15px;
       }
     }
   }
 }
</style>
