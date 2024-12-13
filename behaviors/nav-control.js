// eslint-disable-next-line no-undef
module.exports = Behavior({
  data: {
    title: '首页',
    showBack: false,
    showHome: false,
    loading: false,
    background: '#fff',
    color: 'black',
  },
  methods: {
    setNavData(_data) {
      const updateData = {};
      if (_data.title) {
        updateData.title = _data.title;
      }
      if (_data.showBack) {
        updateData.showBack = _data.showBack;
      }
      if (_data.showHome) {
        updateData.showHome = _data.showHome;
      }
      if (_data.loading) {
        updateData.loading = _data.loading;
      }
      if (_data.background) {
        updateData.background = _data.background;
      }
      if (_data.color) {
        updateData.color = _data.color;
      }
      if (Object.keys(updateData).length > 0) {
        this.setData(updateData);
      }
    }
  }
})