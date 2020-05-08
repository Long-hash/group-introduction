const db = wx.cloud.database({});
const cont = db.collection('jiazian');

Page({
  mixins: [require('../../mixin/themeChanged')],
  data: {
    dialog1: false,
    dialog2: false,
    ne: [],
  },
  close: function () {
    this.setData({
      dialog1: false,
      dialog2: false
    });
  },
  open1() {
    this.setData({
      dialog1: true
    });
  },
  open2() {
    this.setData({
      dialog2: true
    });
  },

  onLoad: function (options) {
    var _this = this;
    const db = wx.cloud.database({
      env: 'test-condition-f3ufo',
      traceUser: true,
    })
    db.collection('jiazian').get({
      success: res => {
        console.log(res.data)
        this.setData({
          ne: res.data
        })
      }
    })
  },
})

