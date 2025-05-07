Page({
  data: {
    videoUrl: "http://www.yanan.gov.cn/sq/yxya/1.html",
  },

  onLoad(options) {
    // 若链接通过页面参数传递（例如从列表页跳转时传入）
    if (options.url) {
      this.setData({
        videoUrl: decodeURIComponent(options.url),
      });
    }
  },

  // 点击复制链接
  copyLink() {
    const { videoUrl } = this.data;
    wx.setClipboardData({
      data: videoUrl,
      success: () => {
        wx.showToast({
          title: "链接已复制",
          icon: "none",
        });
      },
      fail: (err) => {
        wx.showToast({
          title: "复制失败，请重试",
          icon: "none",
        });
      },
    });
  },
});
