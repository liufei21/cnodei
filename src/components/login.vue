<template>
  <div class="login">
    <app-header></app-header>
    <article>
      <section>
        <nav>
          <span @click="dian">主页 /</span>
          <span>登录</span>
        </nav>
        <div class="verify">
          <p>
            <input type="text" placeholder="输入正确的验证码" v-model="val">
            <button @click="login">登录</button>
          </p>
        </div>
      </section>
      <aside></aside>
    </article>
    <app-footer></app-footer>
  </div>
</template>
<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import axios from 'axios'
export default {
  data () {
    return {
      val: ''
    }
  },
  components: {
    appHeader,
    appFooter
  },
  methods: {
    dian () {
      this.$router.push({path: '/'})
    },
    login () {
      let This = this
      axios.post(global.globalData.api + '/accesstoken', {
        accesstoken: this.val
      }).then((res) => {
        This.$router.push({path: '/'})
      }).catch((res) => {
        alert(403)
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .login{
    width: 100%;
    article{
      section{
        nav{
          width: 750px;
          height: 20px;
          background: #ddd;
          line-height: 20px;
          font-size:14px;
          padding: 15px;
          span{
            display: inline-block;
          }
        }
        .verify{
          width: 750px;
          height: 200px;
          background: #fff;
          padding:15px;
          margin-top:20px;
          p{
            width:100%;
            height: 50px;
            margin-top:100px;
            input{
              margin-left:30px;
              width: 450px;
              height: 35px;
            }
            button{
              width: 70px;
              height: 40px;
              border:none;
              border-radius: 5px;
              background: #0DAD9E;
            }
          }
        }
      }
      aside{
        height: 300px;
        background: red;
      }
    }
  }
</style>
