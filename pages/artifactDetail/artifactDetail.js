// pages/artifactDetail/artifactDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    isPlaying: false,
    lastTapTime: 0 // 记录上次点击时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  handleVideoTap() {
    const now = Date.now();
    // 双击判断（300ms间隔）
    if (now - this.data.lastTapTime < 300) {
      this.videoContext.pause();
      this.setData({
        lastTapTime: 0
      });
      return;
    }

    this.setData({
      lastTapTime: now
    });

    // 单击处理
    setTimeout(() => {
      if (Date.now() - this.data.lastTapTime < 300) return;
      this.data.isPlaying ? this.videoContext.pause() : this.videoContext.play();
      this.setData({
        isPlaying: !this.data.isPlaying
      });
    }, 300);
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