// pages/index/index.js
import culturalRelics from '../../utils/data';

Page({
  data: {
    list: culturalRelics
  },

  navigateTransfer(e) {
    const {
      type
    } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/transfer/transfer?type=${type}`
    });
  },

  navigateRedMap(e) {
    wx.switchTab({
      url: '/pages/map/map',
    });
  },

  navigateRedWay(e) {
    wx.navigateTo({
      url: `/pages/route/route`
    });
  },

  toVideoDetails(e) {
    wx.navigateTo({
      url: `/pages/artifactDetail/artifactDetail`
    });
  }
})