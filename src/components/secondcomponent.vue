<template>
    <div id="secondcomponent">
        <h1>我是另外一个页面</h1>
        <a href="">作者：{{ author }}</a>
        <p>感谢大家的关怀<a href="https://github.com/">我的github</a></p>
    </div>
</template>

<script>
export default {
  data () {
      return {
        author: 'zjl',
        articles: []
      }
  }
}
</script>
