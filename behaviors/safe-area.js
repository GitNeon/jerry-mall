// 获取安全区域高度
module.exports = Behavior({
  data: {
    // 状态栏高度
    statusBarHeight: '',
    // 导航栏高度
    navBarHeight: '',
    // 顶栏整体高度
    topBarFullHeight: '',
    // 底部安全高度(即需要减去导航条的高度)
    bottomSafeHeight: '',
    // 内容区域安全高度
    contentSafeHeight: '',
    // 给scroll-view组件使用的高度
    scrollViewHeight: ''
  },
  lifetimes: {
    attached() {
      const windowInfo = wx.getWindowInfo();
      const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
      console.log('windowInfo', windowInfo);
      console.log('menuButtonInfo', menuButtonInfo);

      // 状态栏高度
      const statusBarHeight = windowInfo.statusBarHeight;
      // 导航栏高度
      const navBarHeight = menuButtonInfo.height + (menuButtonInfo.top - statusBarHeight) * 2;
      // 顶栏整体高度
      const topBarFullHeight = statusBarHeight + navBarHeight;
      // 底部安全高度(即相当于导航条的高度)，部分机型可能没有safeArea属性
      const bottomSafeHeight = windowInfo.screenHeight - ((windowInfo.safeArea || {}).bottom || 0);
      // 内容区域高度
      const contentHeight = windowInfo.screenHeight - statusBarHeight - navBarHeight - bottomSafeHeight;
      // scroll-view组件高度
      const scrollViewHeight = `height: calc(100vh - ${topBarFullHeight}px)`;

      this.setData({
        statusBarHeight: statusBarHeight,
        navBarHeight: navBarHeight,
        topBarFullHeight: topBarFullHeight,
        bottomSafeHeight: bottomSafeHeight,
        contentSafeHeight: contentHeight,
        scrollViewHeight: scrollViewHeight
      })
    }
  }
})