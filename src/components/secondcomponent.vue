<style>
li{
  list-style: none;
}
img{
  width: 100px;
  height: 100px;
}
.title{
  display: inline-block;
  width: 200px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  text-align: center;
  vertical-align: top;
  font-weight: bold
}
p span{
  font-size: 12px;
  color: gray;
  text-align: right
}
</style>

<template>
    <div id="secondcomponent">
        <!-- <h1>我是另外一个页面</h1>
        <a href="">作者：{{ author }}</a>
        <p>感谢大家的关怀<a href="https://github.com/">我的github</a></p> -->
        <ul>
          <li v-for="(item,index) in articles" :key="index">
            <span class="title">{{ item.title }}</span>
            <img :src="item.thumbnail_pic_s">
            <p><span>作者:{{item.author_name}}</span>  <span>发表于:{{item.date}}</span></p>
            <hr>
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
      return {
        author: 'zjl',
        articles: []
      }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData: function () {
      axios.post('/news').then((res) => {
        this.articles = res.data.data
        console.log(this.articles)
      })
    }
  }
}
</script>
