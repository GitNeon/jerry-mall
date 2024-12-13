Component({
  options: {
    multipleSlots: true
  },
  properties: {
    // 封面图片路径
    coverImgUrl: {
      type: String,
      value: ''
    },
    // 商品标题
    goodsTitle: {
      type: String,
      value: ''
    },
    // 商品价格
    goodsPrice: {
      type: String,
      value: ''
    },
    // 图标列表,包含自营、京东超市等小图标
    iconList: {
      type: Array,
      value: []
    }
  }
})