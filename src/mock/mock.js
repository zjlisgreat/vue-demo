const Mock = require('mockjs')
// var data = Mock.mock({
//   'list|1-10':[{
//     'id|+1': 1
//   }]
// })
// https://www.cnblogs.com/orange2013/p/10520632.html
// console.log(JSON.stringify(data, null, 4))

const Random = Mock.Random
const produceData = function (opt) {
  console.log('opt', opt)
  let articles = []
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}

Mock.mock('/news', /post|get/i, produceData)
