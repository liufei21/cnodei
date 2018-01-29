<template>
    <footer>
      <p>RSS|源码地址</p>
      <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <p>
        服务器赞助商为
        <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
          <img src="//dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="">
        </a>
        ,存储赞助商为
        <a href="http://www.qiniu.com/?ref=cnode">
          <img src="//dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="">
        </a>
        ,由
        <a href="https://alinode.aliyun.com/?ref=cnode">
          <img src="//dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="">
        </a>
        提供应用性能服务。
      </p>
      <p>新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com/?refcode=eba02656eeb3m/">DigitalOcean(https://www.digitalocean.com/)</a></p>
    </footer>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  $w:100%;
  footer{
    width: $w;
    height: 180px;
    background: #fff;
    margin-top:20px ;
    padding-top:30px;
    p{
      margin-left:55px;
      font-size:14px;
      color:#ccc;
    }
    p:nth-child(1){
      color:#000;
    }
    p:nth-child(2){
      margin-top:10px;
    }
    p:nth-child(3){
      margin-top:20px;
      height: 50px;
      display: flex;
      align-content: center;
      line-height: 50px;
      a{
        width: 130px;
        img{
          vertical-align: middle;
        }
      }
      a:nth-of-type(1){
        width: 90px;
        height: 20px;
        margin-top:15px;
      }
    }
    p:nth-child(4){
      margin-top:20px;
      color:#ccc;
      a{
        display: inline-block;
        color:#08c;
      }
    }
  }
</style>
