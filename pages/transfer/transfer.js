// pages/transfer/transfer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    list: [{
        name: "人物传记",
        key: "person",
        image: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/wabao1.png"
      },
      {
        name: "地方资料",
        key: "local",
        image: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/xiangbizi1.png"
      }
    ],
    cloudList: [{
        name: "纪录片",
        key: "record",
        image: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/baoan1.png"
      },
      {
        name: "红色宣讲",
        key: "red",
        image: "https://red-heritage.oss-cn-wuhan-lr.aliyuncs.com/images/red-info/xiangbizi2.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      type: options.type
    }, () => {
      // 在 setData 回调中确保数据更新后设置标题
      wx.setNavigationBarTitle({
        title: this.data.type === "text" ? "党史资料" : "云上思政"
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  navigateDetail(e) {
    if (this.data.type === "text") {
      const {
        item
      } = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/artifact/artifact?model=${item.key}&cover=${item.image}&name=${item.name}`
      })
    } else if (this.data.type === "video") {
      wx.navigateTo({
        url: `/pages/webview/webview?url=http://www.tcmap.com.cn/view/index1765_list.html`
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})