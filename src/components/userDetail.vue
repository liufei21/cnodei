<template>
  <div class="user">
    <app-header></app-header>
    <article>
      <section>
        <div class="userDetail">
          <p @click="dian">主页 /</p>
          <ul>
            <li>
              <img :src="obj.avatar_url" alt="">
              <span>{{obj.githubUsername}}</span>
            </li>
            <li></li>
          </ul>
        </div>
        <div class="create">
          <p>最近创建的话题</p>
          <app-section :arr1="list1"></app-section>
        </div>
        <div class="participation">
          <p>最近参与的话题</p>
          <app-section :arr1="list2"></app-section>
        </div>
      </section>
      <aside>
        <release-author></release-author>
        <release-btn></release-btn>
        <aside-pic></aside-pic>
        <aside-top></aside-top>
        <aside-score></aside-score>
        <aside-com></aside-com>
        <aside-client></aside-client>
      </aside>
    </article>
    <app-footer></app-footer>
  </div>
</template>
<script>
import axios from 'axios'
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appSection from '@/components/section'
import releaseBtn from '@/components/release/release1'
import releaseAuthor from '@/components/release/author'
import asidePic from '@/components/aside/picture'
import asideTop from '@/components/aside/topic'
import asideScore from '@/components/aside/scoreboard'
import asideCom from '@/components/aside/community'
import asideClient from '@/components/aside/client'
export default {
  components: {
    appHeader,
    appFooter,
    appSection,
    releaseBtn,
    releaseAuthor,
    asidePic,
    asideTop,
    asideScore,
    asideCom,
    asideClient
  },
  data () {
    return {
      obj: [],
      list1: [],
      list2: []
    }
  },
  methods: {
    // 点击跳回主页
    dian () {
      this.$router.push({path: '/'})
    }
  },
  created () {
    let Id = this.$route.params.id
    axios.get(global.globalData.api + '/user/' + Id).then((res) => {
      this.obj = res.data.data
      this.list1 = res.data.data.recent_replies
      this.list2 = res.data.data.recent_topics
    })
  }
}
</script>
<style scoped lang="scss">
  .user{
    width: 100%;
    article{
      section{
        .userDetail{
          width:780px;
          background: #fff;
          font-size: 14px;
          line-height: 30px;
          p{
            width: 760px;
            background: #ddd;
            padding-left:20px;
          }
          ul{
            line-height: 30px;
            width:760px;
            padding-left:20px;
            :first-child{
              height: 50px;
              overflow: hidden;
              img{
                width: 50px;
                height: 50px;
                float: left;
              }
              span{
                float:left;
                line-height: 50px;
              }
            }
          }
        }
        .create,.participation{
          width: 100%;
          background: #fff;
          font-size: 14px;
          line-height: 30px;
          margin-top:30px;
          p{
            width: 760px;
            background: #ddd;
            padding-left: 20px;
          }
          ul{
            line-height: 30px;
            width:760px;
            padding-left:20px;
          }
        }
      }
    }
  }
</style>
