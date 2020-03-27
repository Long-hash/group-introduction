
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

    audio.title = 'The Way I Am'


    audio.src = 'https://sharefs.yun.kugou.com/202003272108/87b111b9900318f0a6dde5b35bd0b562/G128/M00/0B/07/YJQEAFrrRYGATIj_AC1ydWI141M376.mp3'


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

