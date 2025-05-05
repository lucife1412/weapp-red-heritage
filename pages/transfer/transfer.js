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
        image: "/images/person.png"
      },
      {
        name: "地方资料",
        key: "local",
        image: "/images/local.png"
      }
    ],
    cloudList: [{
        name: "纪录片",
        key: "record",
        image: "/images/record.png"
      },
      {
        name: "红色宣讲",
        key: "red",
        image: "/images/red.png"
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
    const {
      item
    } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/artifact/artifact?model=${item.key}&cover=${item.image}&name=${item.name}&`
    })
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