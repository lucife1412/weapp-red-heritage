// pages/route/route.js
Page({
  data: {
    list: [{
        id: 1,
        title: '中共中央落脚陕北到进驻延安城的足迹',
        image: 'https://weapp-red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/jiuju.png'
      },
      {
        id: 2,
        title: '毛主席在陕北的足迹（1935年10月18日-1937年1月13日）',
        image: 'https://weapp-red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/junshi.png'
      },
      {
        id: 3,
        title: '毛主席在陕北的足迹（1937年1月13日-1947年3月18日）',
        image: 'https://weapp-red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/kangri.png'
      },
      {
        id: 4,
        title: '毛主席在陕北的足迹（1947年3月18日-1947年3月19日）',
        image: 'https://weapp-red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/erju.png'
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