<template>
    <div>
      <ul class="list">
        <li v-for="(item,index) in arr1" :key="index" >
          <div class="list_left">
            <img :src="item.author.avatar_url" @click="Url(index)"/>
            <p><span>{{item.reply_count}}/</span><span>{{item.visit_count}}</span></p>
            <p>
              <span v-if="item.top==true" class="green">置顶</span>
              <span v-else-if="item.good==true" class="green">精华</span>
              <span v-else-if="item.tab=='share'" class="gray">分享</span>
              <span v-else-if="item.tab=='ask'" class="gray">问答</span>
              <span v-else-if="item.tab=='job'" class="gray">招聘</span>
            </p>
            <p>
             <router-link :to="{name:'detail',params:{id:item.id}}">{{item.title}}</router-link>
            </p>
          </div>
          <div class="list_right">
            <img :src="item.author.avatar_url" @click="Url">
            <p>{{item.last_reply_at | formatDate}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  props: ['arr1'],
  methods: {
    Url (index) {
      let userName = this.arr1[index].author.loginname
      this.$router.push({path: '/userDetail/' + userName})
    }
  }
}
</script>
<style scoped lang="scss">
  $w:100%;
   .list{
      width:$w;
      background: #fff;
      li{
        width: $w;
        height: 50px;
        border-bottom:1px #ccc solid;
        overflow: hidden;
        line-height: 50px;
        &:hover{
          background:#ddd;
        }
        .list_left{
          width: 550px;
          height: $w;
          float: left;
          img{
            width: 35px;
            height: 35px;
            float: left;
            margin-top:7px;
            margin-left:10px;
            border-radius: 5px;
          }
          p:nth-of-type(1){
            margin-left:10px;
            width: 70px;
            color:#999;
            float: left;
            span:nth-child(1){
              font-size:16px;
              display: inline-block;
            }
            span:nth-child(2){
              font-size:12px;
              display: inline-block;
            }
          }
          p:nth-of-type(2){
            float: left;
            margin-top:15px;
            text-align: center;
            line-height: 20px;
            span{
              width: 30px;
              height: 20px;
              border-radius: 5px;
              font-size:12px;
            }
            .green{
              background: green;
              color:#fff;
            }
            .gray{
              background: #ccc;
              color:#000;
            }
          }
          p:nth-of-type(3){
            width: 380px;
            height: $w;
            font-size: 14px;
            float:right;
            /*超出内容...表示*/
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            a{
              color:#000;
            }
          }
        }
        .list_right{
          width: 90px;
          height: $w;
          float: right;
          margin-right: 10px;
          img{
            width: 25px;
            height: 25px;
            margin-top:10px;
            float: left;
            border-radius: 5px;
          }
          p{
            float: right;
            font-size:14px;
            color:#999;
          }
        }
      }
  }
</style>
