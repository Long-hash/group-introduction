Page({
  mixins: [require('../../mixin/themeChanged')],
  data: {
    dialog1: false,
    dialog2: false
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
  player(audio) {
    var that = this

    audio.title = '千与千寻'


    audio.src = 'https://sharefs.yun.kugou.com/202003252103/1a4e69325d5a02ecb5a05f856478fb17/G175/M01/11/05/T4cBAF2VS3SAXYfNACBF_YjTbsk326.mp3'


    audio.onEnded(() => {
      that.player(wx.getBackgroundAudioManager())
    })
  },

  onLoad: function () {

    this.player(wx.getBackgroundAudioManager())
  },


  onUnload: function () {

    wx.getBackgroundAudioManager().stop();
  },


  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  },
  onPageScroll: function (ev) {

  }
})

