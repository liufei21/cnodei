<template>
  <div class="box">
    <app-header></app-header>
    <article>
      <section>
        <nav>
          <ul>
            <router-link v-for="(val,index) in arr" :key="index" :to="val.url" tag="li">{{val.text}}</router-link>
          </ul>
        </nav>
        <app-section :arr1="dat"></app-section>
        <page @fun="page"></page>
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
import appSection from '@/components/section'
import appFooter from '@/components/footer'
import releaseBtn from '@/components/release/release1'
import releaseAuthor from '@/components/release/author'
import asidePic from '@/components/aside/picture'
import asideTop from '@/components/aside/topic'
import asideScore from '@/components/aside/scoreboard'
import asideCom from '@/components/aside/community'
import asideClient from '@/components/aside/client'
import page from '@/components/page'
export default {
  components: {
    appHeader,
    appSection,
    appFooter,
    releaseBtn,
    releaseAuthor,
    asidePic,
    asideTop,
    asideScore,
    asideCom,
    asideClient,
    page
  },
  data () {
    return {
      arr: [
        {text: '全部', url: '/?tab=all'},
        {text: '精华', url: '/?tab=good'},
        {text: '分享', url: '/?tab=share'},
        {text: '问答', url: '/?tab=ask'},
        {text: '招聘', url: '/?tab=job'},
        {text: '客户端测试', url: '/?tab=dev'}
      ],
      dat: []
    }
  },
  methods: {
    page (index) {
      axios.get(global.globalData.api + '/topics', {
        params: {
          page: index,
          tab: this.$route.query.tab,
          limit: 30
        }
      }).then((res) => {
        this.dat = res.data.data
        console.log(res)
      })
    }
  },
  created () {
    // this.page(1)
    axios.get(global.globalData.api + '/topics', {
      params: {
        page: 1,
        tab: this.$route.query.tab,
        limit: 30
      }
    }).then((res) => {
      this.dat = res.data.data
      console.log(res)
    })
  },
  watch: {
    $route () {
      axios.get(global.globalData.api + '/topics', {
        params: {
          page: 1,
          tab: this.$route.query.tab,
          limit: 30
        }
      }).then((res) => {
        this.dat = res.data.data
      })
    }
  }
}
</script>
<style scoped lang="scss">
  $w:100%;
  .box{
    width:100%;
    section {
      nav {
        width: $w;
        height: 40px;
        background: #ddd;
        text-align: center;
        font-size: 14px;
        ul {
          width: 380px;
          height: $w;
          overflow: hidden;
          color: green;
          li {
            width: 50px;
            height: 30px;
            float: left;
            line-height: 30px;
            margin-left: 8px;
            margin-top: 5px;
            &:hover {
              cursor: pointer;
            }
          }
          li:last-child {
            width: 75px;
          }
          .router-link-exact-active {
            background: green;
            color: #fff;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
        }
      }
    }
}
</style>
