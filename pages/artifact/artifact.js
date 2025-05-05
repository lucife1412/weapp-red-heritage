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
    filteredList: [],
    title: "",
    bannerImg: ""
  },

  onLoad(e) {
    this.setData({
      title: e.name,
      bannerImg: e.cover,
      filteredList: this.data.list
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