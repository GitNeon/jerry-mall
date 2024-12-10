/**
 * 判断左右滑动距离
 */

// 滑动的初始位置
let startPoint = 0;
// 滑动事件节流标志, 防止一次滑动触发多次滑动事件
let slipFlag = false;

// eslint-disable-next-line no-undef
module.exports = Behavior({
  data: {},
  methods: {
    handleTouchStart(event) {
      slipFlag = true;
      startPoint = event.touches[0];
    },
    handleTouchMove(event, callbackFn) {
      if (
        startPoint.clientX - event.touches[event.touches.length - 1].clientX >
          80 &&
        slipFlag
      ) {
        slipFlag = false;
        callbackFn && callbackFn("left", event);
        return;
      } else if (
        startPoint.clientX - event.touches[event.touches.length - 1].clientX <
          -80 &&
        slipFlag
      ) {
        slipFlag = false;
        callbackFn && callbackFn("right", event);
        return;
      }
    },
  },
});
