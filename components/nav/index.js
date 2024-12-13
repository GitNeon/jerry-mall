const safeArea = require("../../behaviors/safe-area.js");

Component({
  behaviors: [safeArea],
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    extClass: {
      type: String,
      value: "",
    },
    title: {
      type: String,
      value: "",
    },
    background: {
      type: String,
      value: "",
    },
    color: {
      type: String,
      value: "#000000",
    },
    backButton: {
      type: Boolean,
      value: true,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    homeButton: {
      type: Boolean,
      value: false,
    },
    animated: {
      // 显示隐藏的时候opacity动画效果
      type: Boolean,
      value: true,
    },
    // back为true的时候，返回的页面深度
    delta: {
      type: Number,
      value: 1,
    },
  },
  /**
   * 组件的初始数据
   */
  data: {},
  lifetimes: {
    attached() {
      const rect = wx.getMenuButtonBoundingClientRect();
      const windowInfo = wx.getWindowInfo();
      const deviceInfo = wx.getDeviceInfo();
      const isAndroid = deviceInfo.platform === "android";
      const isDevtools = deviceInfo.platform === "devtools";
      const navConfig = {
        innerPaddingRight: `padding-right: ${
          windowInfo.windowWidth - rect.left
        }px`,
        leftWidth: `width: ${windowInfo.windowWidth - rect.left}px`,
        safeAreaTop: isDevtools || isAndroid ? `height: ${this.data.topBarFullHeight}px; padding-top: ${this.data.statusBarHeight}px` : ``,
      };
      this.setData(navConfig);
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    back() {
      const delta = this.data.delta;
      wx.navigateBack({
        delta: delta || 1,
      });
      this.triggerEvent(
        "back",
        {
          delta: delta,
        },
        {}
      );
    },
    home() {
      console.log("home");
    },
  },
});
