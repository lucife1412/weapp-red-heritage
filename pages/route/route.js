// pages/route/route.js
Page({
  data: {
    routes: [{
        id: 1,
        name: '“红色广州·革命之城”精品线路',
        points: 6
      },
      {
        id: 2,
        name: '“广州起义”红色之旅',
        points: 4
      },
      {
        id: 3,
        name: '中国革命统一战线史迹之旅',
        points: 8
      },
      {
        id: 4,
        name: '广州抗战史迹之旅',
        points: 4
      }
    ]
  },

  navigateDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/routeDetail/routeDetail?id=${id}`
    })
  }
})