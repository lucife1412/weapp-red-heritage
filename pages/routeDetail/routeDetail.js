// pages/routeDetail/routeDetail.js
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
const utils = require('../../utils/util.js')

Page({
  data: {
    addressList: [{
        id: 1,
        title: "黄花岗七十二烈士墓",
        address: "越秀区黄花岗街道先烈中路79号",
        latitude: 23.141944,
        longitude: 113.298611,
        img: "/images/02.png"
      },
      {
        id: 2,
        title: "广州公社旧址",
        address: "越秀区起义路200号之一",
        latitude: 23.123456,
        longitude: 113.258734,
        img: "/images/03.png"
      }
    ]
  },

  onLoad() {
    this.qqmapsdk = new QQMapWX({
      key: '66IBZ-DM5YG-RXKQ7-QKZ2S-FJZSS-EUB4A'
    })
  },

  // 导航处理
  handleNavigation(e) {
    const {
      item
    } = e.currentTarget.dataset
    utils.navigateToLocation.call(this, item).catch(err => console.error(err));
  },

  // 预览图片
  previewImage(e) {
    // const current = e.currentTarget.dataset.src
    // const urls = e.currentTarget.dataset.all
    utils.previewImages("/images/way-map.png", ["/images/way-map.png"])
  }
})