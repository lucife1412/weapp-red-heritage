// pages/artifact/artifact.js
Page({
  data: {
    localList: [{
        id: 1,
        title: '延安红色记忆',
        img: 'https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/yanan.png'
      },
      {
        "id": 2,
        "title": "陕甘宁边区大生产运动",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/dachansheng.png"
      },
      {
        id: 3,
        title: '中共中央文件选集（1936-1938）',
        img: 'https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/zhongyang.png'
      },
      {
        id: 4,
        title: '共产党人的党性党风党纪建设',
        img: 'https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/dangxing.png'
      },
      {
        id: 5,
        title: '陕甘宁边区政府文件选编（第七辑）',
        img: 'https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/shangan.png'
      },
      {
        "id": 6,
        "title": "延安市人民代表大会志",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/yananshi.png"
      },
      {
        "id": 7,
        "title": "延安时期文献档案汇编",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/wenxian.png"
      },
      {
        "id": 8,
        "title": "延安整风实录",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/yanzheng.png"
      },
    ],
    personList: [{
        id: 1,
        title: '刘志丹与西北革命根据地研究',
        img: 'https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/liuzhidan.png'
      },
      {
        id: 2,
        title: '中央红军长征胜利到吴起',
        img: 'https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/wuqi.png'
      },
      {
        id: 3,
        title: '毛泽东在延安',
        img: 'https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/maozedong.png'
      },
      {
        "id": 4,
        "title": "朱德选集",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/zhude.png"
      },
      {
        "id": 5,
        "title": "革命烈士卷：谢子长",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/lieshi.png"
      },
      {
        "id": 6,
        "title": "谢子长传",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/xiezichang.png"
      },
      {
        "id": 7,
        "title": "刘志丹",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/liuzhantong_portrait.png"
      },
      {
        "id": 8,
        "title": "刘志丹纪念文集",
        "img": "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/books/jinian.png"
      }
    ],
    title: "",
    bannerImg: "",
    pageType: ""
  },

  onLoad(e) {
    this.setData({
      title: e.name,
      bannerImg: e.cover,
      pageType: e.model
    }, () => {
      // 在 setData 回调中确保数据更新后设置标题
      wx.setNavigationBarTitle({
        title: this.data.title
      });
    });
  },

  // 跳转详情
  navigateDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})