<template>
   <div class="release">
     <app-header></app-header>
     <article>
       <section>
         <nav>
           <span @click="dian">主页 /</span>
           <span>发布话题</span>
         </nav>
         <div class="issue">
           <p><span class="red">请选择版块：</span>
             <select>
               <option>请选择</option>
               <option>分享</option>
               <option>问答</option>
               <option>招聘</option>
               <option>客户端测试</option>
             </select>
           </p>
           <input type="text" placeholder="标题字数10字以上" v-model="bt"/>
           <textarea rows="15" v-model="tex"></textarea>
           <button @click="submit">提交</button>
         </div>
       </section>
       <aside></aside>
     </article>
     <app-footer></app-footer>
   </div>
</template>
<script>
import axios from 'axios'
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
export default {
  components: {
    appHeader,
    appFooter
  },
  data () {
    return {
      bt: '',
      tex: ''
    }
  },
  methods: {
    dian () {
      this.$router.push({path: '/'})
    },
    submit () {
      var sel = document.getElementsByTagName('select')[0]
      var span = document.getElementsByClassName('red')[0]
      var This = this
      let compileId = this.$route.params.id
      if (sel.value === '请选择') {
        alert('必须选择一个版块')
        span.style.color = 'red'
        return
      }
      if (this.bt.length <= 10) {
        alert('标题必须10字以上')
        return
      }
      if (this.tex === '') {
        alert('内容不能为空')
        return
      }
      if (compileId !== undefined) {
        axios.post(global.globalData.api + '/topics/update', {
          accesstoken: global.ask,
          topic_id: compileId,
          title: This.bt,
          tab: 'dev',
          content: This.tex
        }).then((res) => {
          This.$router.push({path: '/detail/' + res.data.topic_id})
        })
      } else {
        axios.post(global.globalData.api + '/topics', {
          accesstoken: global.ask,
          title: This.bt,
          tab: 'dev',
          content: This.tex
        }).then((res) => {
          // console.log(res)
          This.$router.push({path: '/detail/' + res.data.topic_id})
        }).catch((res) => {
          console.log('失败')
        })
      }
    }
  },
  created () {
    let compileId = this.$route.params.id
    let This = this
    axios.get(global.globalData.api + '/topic/' + compileId).then((res) => {
      // console.log(res)
      This.bt = res.data.data.title
      This.tex = res.data.data.content
      This.tex = This.tex.slice(30, This.tex.length - 11)
    }).catch((res) => {
      console.log('error')
    })
  }
}
</script>
<style scoped lang="scss">
  .release{
    width:100% ;
    article {
      section {
        nav {
          width: 750px;
          height: 20px;
          background: #ddd;
          line-height: 20px;
          font-size: 14px;
          padding: 15px;
          span {
            display: inline-block;
          }
        }
        .issue{
          width: 750px;
          padding: 15px;
          background: #fff;
          font-size:14px;
          p{
            .red{
              display: inline-block;
            }
            select{
              width: 240px;
              height: 30px;
            }
          }
          input{
            margin-top:10px;
            width: 740px;
            height: 30px;
            border:none;
            border:1px #ccc solid;
            border-radius: 5px;
            padding-left:10px
          }
          textarea{
            margin-top:20px;
            width: 740px;
          }
          button{
            margin-top:20px;
            width: 60px;
            height: 35px;
            border:none;
            background:deepskyblue;
            border-radius: 5px;
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
