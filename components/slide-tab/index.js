// components/slide-tab/index.js
const { splitArray } = require("../../utils/parse-data.js");
const touchDistance = require("../../behaviors/touch-distance.js");

Component({
  behaviors: [touchDistance],
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value: [
        {
          title: "京东超市",
          imgPath:
            "https://img12.360buyimg.com/babel/jfs/t20270715/38278/23/22574/7960/6694edb4F07db03e3/d663cd498321eadc.png",
        },
        {
          title: "京东电器",
          imgPath:
            "https://m.360buyimg.com/babel/jfs/t20270715/237082/37/21845/7616/6694edddFc764124a/38d00b686257b0f4.png",
        },
        {
          title: "服饰美妆",
          imgPath:
            "https://img20.360buyimg.com/babel/jfs/t20270715/36751/25/21385/7651/6694ee02F878cddef/13ce837dd39ad1ad.png",
        },
        {
          title: "充值中心",
          imgPath:
            "https://img20.360buyimg.com/babel/jfs/t20270715/44839/8/24550/7935/6694ee27F8775a577/b63c6a2fa0327964.png",
        },
        {
          title: "PLUS 会员",
          imgPath:
            "https://img14.360buyimg.com/babel/jfs/t20270715/243181/3/13649/9018/6694ee5fF6aa391d4/1b020aa3f9cf89a0.png",
        },
        {
          title: "京东生鲜",
          imgPath:
            "https://m.360buyimg.com/babel/jfs/t20270715/22456/27/20943/10381/6694ee81F684396bb/0ba51f592d28dfdd.png",
        },
        {
          title: "京东国际",
          imgPath:
            "https://img11.360buyimg.com/babel/jfs/t20270715/29760/28/21267/11992/6694eea3F0fe3dca2/d5672661722bfc42.png",
        },
        {
          title: "京东拍卖",
          imgPath:
            "https://img10.360buyimg.com/babel/jfs/t20270715/233990/3/23983/8102/6694eec4F2aad82cf/2144631769da49b9.png",
        },
        {
          title: "红包惊喜",
          imgPath:
            "https://img20.360buyimg.com/babel/jfs/t20270926/241563/14/18702/9401/66f4bc8aFc8e6d309/ed7c86f700aba111.png",
        },
        {
          title: "全部",
          imgPath:
            "https://img14.360buyimg.com/babel/jfs/t20270715/42046/6/20985/8690/6694ef01Ff3769032/bfa11aada78ce515.png",
        },
      ],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 滑动索引，用于计算向左向右滑动
    slideIndex: 0,
    // 指示器小圆点索引，用于判断激活的样式使用
    dotIndex: 0,
    // 渲染列表，对传入的tabList进行分组，默认每5个一组
    renderList: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTouchMove(event) {
      const touchMoveCallBack = (direction) => {
        if (direction === "left") {
          let step = this.data.slideIndex - 1;
          // 不能超过分组长度
          if (Math.abs(step) >= this.data.renderList.length) return;
          console.log("left-执行：", step);
          this.setData({
            slideIndex: step,
            dotIndex: this.data.dotIndex + 1
          });
        } else {
          let step = this.data.slideIndex + 1;
          if (step > 0) return;
          console.log("right-执行：", step);
          this.setData({
            slideIndex: this.data.slideIndex + 1,
            dotIndex: this.data.dotIndex - 1
          });
        }
      };
      this.handleTouchMove(event, touchMoveCallBack);
    },
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function () {
      const splitResult = splitArray(this.data.tabList);
      this.setData({
        renderList: splitResult,
      });
    },
  },
});
