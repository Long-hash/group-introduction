const db = wx.cloud.database({});
const cont = db.collection('wangzelong');

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
  player(audio) {
    var that = this

    audio.title = 'The Way I Am'


    audio.src = 'https://7465-test-condition-f3ufo-1302039225.tcb.qcloud.la/the%20way%20i%20am.mp3?sign=50bac6291758983f21b75269a9b0ad3b&t=1588919231'


    audio.onEnded(() => {
      that.player(wx.getBackgroundAudioManager())
    })
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

  },



  onLoad: function (options) {
    this.player(wx.getBackgroundAudioManager())
    var _this = this;
    const db = wx.cloud.database({
      env: 'test-condition-f3ufo',
      traceUser: true,
    })
    db.collection('wangzelong').get({
      success: res => {
        console.log(res.data)
        this.setData({
          ne: res.data
        })
      }
    })
  },
})

