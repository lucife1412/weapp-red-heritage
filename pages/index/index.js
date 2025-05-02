// pages/index/index.js
import culturalRelics from '../../utils/data';

Page({
  data: {
    list: culturalRelics
  },

  navigateRedMap(e) {
    wx.switchTab({
      url: '/pages/map/map',
    });
  },

  navigateArtifact(e) {
    wx.navigateTo({
      url: '/pages/artifact/artifact',
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