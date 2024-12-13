const navControl = require('../../behaviors/nav-control.js');
const safeArea = require('../../behaviors/safe-area.js');

Page({
  behaviors: [navControl, safeArea],
  data: {
    goodsList: [{
        goodsId: 1000,
        coverImgUrl: 'https://img14.360buyimg.com/n1/jfs/t1/192341/12/51236/43750/675699b9Fb4f9589d/da25010b22d17aa9.png',
        goodsTitle: '魅族（meizu）21 PRO AI旗舰手机 2k+臻彩屏 广域超声波指纹 5000万超稳AI影像 第三代骁龙8 魅族白 16GB+512GB',
        goodsPrice: '3799.00'
      },
      {
        goodsId: 1001,
        coverImgUrl: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/249069/34/27932/133986/67518016F7574756a/35aa6ffa36ac3c26.jpg',
        goodsTitle: '施华蔻（Schwarzkopf）怡然植物染发霜3.0/9羊绒脂深棕(一洗黑 草本染发剂染发膏盖白发)',
        goodsPrice: '66.00'
      },
      {
        goodsId: 1003,
        coverImgUrl: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/225461/12/23557/64979/67595db3F54810986/f0beccbb33e870b4.jpg',
        goodsTitle: '努比亚（nubia）红魔10 Pro 12GB+256GB暗夜骑士 骁龙8至尊版移动平台 1.5K屏下摄像 旗舰电竞游戏手机',
        goodsPrice: '4999.00'
      },
      {
        goodsId: 1004,
        coverImgUrl: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/225461/12/23557/64979/67595db3F54810986/f0beccbb33e870b4.jpg',
        goodsTitle: '努比亚（nubia）红魔10 Pro 12GB+256GB暗夜骑士 骁龙8至尊版移动平台 1.5K屏下摄像 旗舰电竞游戏手机',
        goodsPrice: '4999.00'
      },
      {
        goodsId: 1005,
        coverImgUrl: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/225461/12/23557/64979/67595db3F54810986/f0beccbb33e870b4.jpg',
        goodsTitle: '努比亚（nubia）红魔10 Pro 12GB+256GB暗夜骑士 骁龙8至尊版移动平台 1.5K屏下摄像 旗舰电竞游戏手机',
        goodsPrice: '4999.00'
      },
      {
        goodsId: 1006,
        coverImgUrl: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/225461/12/23557/64979/67595db3F54810986/f0beccbb33e870b4.jpg',
        goodsTitle: '努比亚（nubia）红魔10 Pro 12GB+256GB暗夜骑士 骁龙8至尊版移动平台 1.5K屏下摄像 旗舰电竞游戏手机',
        goodsPrice: '4999.00'
      }
    ]
  },
  goDetailPage() {
    wx.navigateTo({
      url: '/pages/goods-details/index'
    })
  },
  onLoad() {
    this.setNavData({
      title: '首页',
      showBack: false,
      showHome: false,
      loading: false,
      background: '#ff5454',
      color: 'white'
    });
  }
})