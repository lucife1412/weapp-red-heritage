const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 预览图片
function previewImages(currentUrl, urls) {
  wx.previewImage({
    current: currentUrl, // 当前显示图片链接
    urls: urls // 所有需要预览的图片链接列表
  })
}

// 跳转到导航
function navigateToLocation(marker) {
  return new Promise((resolve, reject) => {
    // 检查定位权限
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success: () => resolve(marker),
            fail: () => {
              this.showAuthGuide();
              reject('Permission denied');
            }
          });
        } else {
          resolve(marker);
        }
      }
    });
  }).then(marker => {
    // 调用系统级导航
    wx.openLocation({
      latitude: marker.latitude,
      longitude: marker.longitude,
      name: marker.title,
      address: marker.address,
      scale: 18
    });
  });
}

module.exports = {
  navigateToLocation,
  formatTime,
  previewImages
}