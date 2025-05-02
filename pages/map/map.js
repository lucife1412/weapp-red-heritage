// pages/map/map.js
import culturalRelics from '../../utils/data';
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min');
const mapUtils = require('../../utils/mapUtils');
const utils = require('../../utils/util.js')

Page({
  data: {
    markers: [],
    clusters: [],
    scale: 14,
    levelFilter: '全部',
    searchValue: '',
    mapStyle: {
      width: '100%',
      height: '100vh'
    }
  },

  onReady() {
    // 在页面渲染完成后初始化地图上下文
    this.mapCtx = wx.createMapContext('heritageMap', this);
  },

  onLoad() {
    this.initMap();
    this.processMarkers();
  },

  // 初始化地图SDK
  initMap() {
    this.qqmapsdk = new QQMapWX({
      key: '66IBZ-DM5YG-RXKQ7-QKZ2S-FJZSS-EUB4A'
    });
  },

  // 处理标记点数据
  processMarkers(filterLevel = '全部') {
    const relics = culturalRelics.filter(item =>
      filterLevel === '全部' || item.level === filterLevel
    ).map((item, index) => ({
      ...item,
      id: index + 1,
      latitude: item.latitude,
      longitude: item.longitude,
      iconPath: '../../images/marker-red.png',
      width: 32,
      height: 40,
      callout: { // 新增标注配置
        content: item.title,
        color: '#fff',
        borderRadius: 8,
        bgColor: "rgb(136, 13, 11)",
        padding: 8,
        display: 'ALWAYS' // 始终显示
      }
    }));

    this.setData({
      markers: relics,
      clusters: mapUtils.clusterMarkers(relics, this.data.scale)
    });
  },

  // 地图缩放事件
  handleRegionChange(e) {
    this.setData({
      scale: e.scale
    });
    this.processMarkers();
  },

  // 筛选文物等级
  handleFilter(e) {
    const level = e.currentTarget.dataset.level;
    this.setData({
      levelFilter: level
    });
    this.processMarkers(level);
  },

  // 跳转详情
  handleMarkerTap(e) {
    const markerId = e.markerId;
    const targetMarker = this.data.clusters.find(m => m.id === markerId);
    console.log(targetMarker)
    if (targetMarker) {
      utils.navigateToLocation.call(this, targetMarker).catch(err => console.error(err));
    }
  },

  // 检查定位权限
  checkLocationAuth() {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: (res) => {
          if (!res.authSetting['scope.userLocation']) {
            wx.authorize({
              scope: 'scope.userLocation',
              success: () => resolve(),
              fail: () => this.showAuthGuide()
            });
          } else {
            resolve();
          }
        }
      });
    });
  },

  // 调用系统级导航
  openNativeNavigation(marker) {
    wx.openLocation({
      latitude: marker.latitude,
      longitude: marker.longitude,
      name: marker.title,
      address: marker.address,
      scale: 18
    });
  },

  // 显示授权引导
  showAuthGuide() {
    wx.showModal({
      title: '需要位置权限',
      content: '导航功能需要获取您的位置信息',
      confirmText: '去设置',
      success: (res) => {
        if (res.confirm) {
          wx.openSetting();
        }
      }
    });
  },

  handleSearchInput(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },

  // 搜索地点
  handleSearch() {
    this.qqmapsdk.geocoder({
      address: this.data.searchValue,
      success: (res) => {
        this.mapCtx.moveToLocation({
          latitude: res.result.location.lat,
          longitude: res.result.location.lng
        });
      },
      fail: (err) => {
        console.error('地理编码失败:', err);
      },
    });
  }
})