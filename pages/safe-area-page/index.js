const safeArea = require('../../behaviors/safe-area.js');

Page({
  behaviors: [safeArea],
  data: {},
  back() {
    wx.navigateBack({
      delta: 1,
    })
  }
})