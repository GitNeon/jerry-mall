const navControl = require('../../behaviors/nav-control.js');
const safeArea = require('../../behaviors/safe-area.js');

Page({
  behaviors: [navControl, safeArea],
  data: {},
  onLoad() {
    this.setNavData({
      title: '商品详情',
      showBack: true,
      showHome: false,
      loading: false,
      background: '#fff',
      color: '#000'
    });
  }
})