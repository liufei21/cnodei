<template>
  <div class="box">
    <app-header></app-header>
    <article>
      <section>
        <div id="content">
          <div class="panel">
            <div class="topic_header">
              <p v-show="obj.top==true" class="green">置顶</p>
              <p v-show="obj.top==false" class="green" >精华</p>
              <h2>{{obj.title}}</h2>
              <ul>
                <li>发布于{{obj.create_at | formatDate}}</li>
                <li>作者{{ author }}</li>
                <li>{{obj.visit_count}}次浏览</li>
                <li>来自
                  <span v-if="obj.tab=='share'" >分享</span>
                  <span v-else-if="obj.tab=='ask'" >问答</span>
                  <span v-else-if="obj.tab=='job'">招聘</span>
                  <span v-else-if="obj.tab=='dev'">客户端测试</span>
                </li>
                <li><button @click="collect" :class="{bian:bb}">{{coll}}</button></li>
              </ul>
              <p><span @click="compile">编辑</span><span>删除</span></p>
            </div>
            <div class="topic">
              <div class="topic_content" v-html="obj.content">
              </div>
            </div>
          </div>
          <ul class="comment">
            <p class="reply">{{replies}}回复</p>
            <li v-for="(val,index) in arr" :key="index">
              <div class="cont1">
                <img :src="val.author.avatar_url">
                <b>{{val.author.loginname}}</b>
                <a href="javascript:;">{{index+1}}楼·{{val.create_at |formatDate}}</a>
                <span v-show="val.author.loginname==author" class="author">作者</span>
                <p><span @click="zan(index)">赞</span>{{val.ups.length}}</p>
              </div>
              <div v-html="val.content" class="cont2"></div>
            </li>
          </ul>
        </div>
      </section>
      <aside>
        <release-author></release-author>
        <aside-pic></aside-pic>
        <aside-top></aside-top>
        <aside-com></aside-com>
      </aside>
    </article>
    <app-footer></app-footer>
  </div>
</template>
<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import releaseAuthor from '@/components/release/author'
import asidePic from '@/components/aside/picture'
import asideTop from '@/components/aside/topic'
import asideCom from '@/components/aside/community'
import axios from 'axios'
export default {
  components: {
    appHeader,
    appFooter,
    releaseAuthor,
    asidePic,
    asideTop,
    asideCom
  },
  data () {
    return {
      obj: [],
      arr: [],
      author: '',
      replies: '',
      coll: '',
      bb: ''
    }
  },
  updated () {
    this.author = this.obj.author.loginname
    this.replies = this.obj.replies.length
  },
  methods: {
    // 收藏
    collect () {
      if (this.coll === '收藏') {
        axios.post(global.globalData.api + '/topic_collect/collect ', {
          accesstoken: global.ask,
          topic_id: this.obj.id
        }).then((res) => {
          this.coll = '取消收藏'
          this.bb = true
        })
      }
      if (this.coll === '取消收藏') {
        axios.post(global.globalData.api + '/topic_collect/de_collect ', {
          accesstoken: global.ask,
          topic_id: this.obj.id
        }).then((res) => {
          this.coll = '收藏'
          this.bb = false
        })
      }
    },
    // 编辑
    compile () {
      let releaseId = this.$route.params.id
      this.$router.push({path: '/release/' + releaseId})
    },
    // 点赞
    zan (index) {
      axios.post(global.globalData.api + '/reply/' + this.arr[index].id + '/ups', {
        accesstoken: global.ask
      }).then((res) => {
        console.log(res.data)
        if (res.data.action === 'up') {
          this.$set(this.arr, 'is_uped', true)
        }
        if (res.data.action === 'down') {
          this.$set(this.arr, 'is_uped', false)
        }
      })
    }
  },
  created () {
    // 创建实例前调取详情接口
    let detailId = this.$route.params.id
    axios.get(global.globalData.api + '/topic/' + detailId, {
      params: {
        accesstoken: global.ask
      }
    }).then((res) => {
      this.obj = res.data.data
      this.arr = res.data.data.replies
      console.log(res.data.data)
      // 判断是否已经收藏
      if (res.data.data.is_collect) {
        this.coll = '取消收藏'
        this.bb = true
      } else {
        this.coll = '收藏'
        this.bb = false
      }
    })
  }
}
</script>
<style lang="scss">
  $w:100%;
  .box{
    width: $w;
    article {
      section {
        /*详情页*/
        #content {
          width: $w;
          .panel {
            width: $w;
            background: #fff;
            font-size: 14px;
            .topic_header {
              width: 770px;
              padding-top: 15px;
              padding-left: 10px;
              .green {
                width: 40px;
                height: 20px;
                background: green;
                display: inline-block;
                text-align: center;
                line-height: 20px;
                color: #fff;
                border-radius: 5px;
              }
              h2 {
                display: inline-block;
                font-size: 20px;
              }
              ul {
                margin-top: 10px;
                overflow: hidden;
                li {
                  float: left;
                  margin-left: 20px;
                  list-style-type: disc;
                  color: #ccc;
                  span {
                    display: inline-block;
                  }
                }
                :last-child{
                  float: right;
                  margin-right:20px;
                  list-style-type: none;
                  button,.bian{
                    border:none;
                    background: green;
                    height: 30px;
                    border-radius: 5px;
                    color:#fff;
                  }
                  .bian{
                    background:#ddd;
                  }
                }
              }
              p:last-child{
                span{
                  display: inline-block;
                  width: 50px;
                  height: 30px;
                  background: #ccc;
                  margin-left:10px;
                  border-radius: 5px;
                  text-align: center;
                  line-height: 30px;
                }
              }
            }
            .topic {
              width: 760px;
              padding: 10px;
              border-top: 1px #e5e5e5 solid;
              .topic_content {
                width: 740px;
                margin: 0 auto;
                .markdown-text {
                  width: $w;
                  p {
                    width: $w;
                    margin-top: 20px;
                    line-height: 30px;
                    padding-left:0;
                    background: #fff;
                    /* 保留空白符序列,但是正常地进行换行*/
                    white-space: pre-wrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    a {
                      display: inline-block;
                    }
                  }
                  h2 {
                    font-size: 26px;
                    margin-top: 30px;
                    border-bottom: 1px #ccc solid;
                  }
                  ul {
                    width: $w;
                    margin-top: 10px;
                    margin-left: 20px;
                    li {
                      width: $w;
                      line-height: 30px;
                      list-style-type: disc;
                      /* 保留空白符序列,但是正常地进行换行*/
                      /*white-space: pre-wrap;*/
                      /*overflow: hidden;*/
                      /*text-overflow: ellipsis;*/
                      a {
                        display: inline-block;
                      }
                      ul {
                        li {
                          list-style-type: circle;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          /*评论区*/
          .comment {
            width: $w;
            margin-top: 20px;
            background: #fff;
            .reply {
              width: 770px;
              line-height: 40px;
              padding-left: 10px;
              background: #ddd;
              border-bottom: 1px #ccc solid;
            }
            li {
              width: $w;
              border-bottom: 1px #ccc solid;
              .cont1 {
                width: $w;
                height: 45px;
                overflow: hidden;
                img {
                  float: left;
                  width: 30px;
                  height: 30px;
                  margin-left: 10px;
                  margin-top: 10px;
                  border-radius: 5px;
                }
                b {
                  float: left;
                  color: #ccc;
                  margin-top: 10px;
                  margin-left: 10px;
                  font-size: 16px;
                }
                a, .author {
                  float: left;
                  margin-top: 10px;
                  margin-left: 10px;
                  font-size: 12px;
                }
                .author {
                  background: green;
                  width: 30px;
                  height: 20px;
                  color: #fff;
                  text-align: center;
                  line-height: 20px;
                }
                p {
                  width: 30px;
                  font-size: 12px;
                  float: right;
                  margin-right: 20px;
                  margin-top: 10px;
                  font-style: normal;
                  span{
                    display: inline-block;
                  }
                }
              }
              .cont2 {
                width: $w;
                line-height: 30px;
                .markdown-text {
                  width: 720px;
                  margin-left: 60px;
                  p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    a {
                      display: inline-block;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
