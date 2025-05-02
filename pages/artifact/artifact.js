// pages/artifact/artifact.js
Page({
  data: {
    list: [{
        id: 1,
        title: '广州农民运动讲习所旧址',
        region: '越秀区',
        img: '/images/02.png'
      },
      {
        id: 2,
        title: '广州公社旧址',
        region: '越秀区',
        img: '/images/03.png'
      },
      // 更多数据...
    ],
    filteredList: []
  },

  onLoad() {
    this.setData({
      filteredList: this.data.list
    })
  },

  // 跳转详情
  navigateDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})