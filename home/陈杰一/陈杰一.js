const db = wx.cloud.database({});
const cont = db.collection('chenjieyi');

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


  onReady: function (e) {

    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'https://7465-test-condition-f3ufo-1302039225.tcb.qcloud.la/%E5%BC%82%E5%BA%A6%E5%85%A5%E4%BE%B5.webp.jpg?sign=07e90f68d98d66aabe2abcaa0dc8f89f&t=1588919128',
    name: '异度侵入钢琴曲',
    author: '',
    src: 'https://7465-test-condition-f3ufo-1302039225.tcb.qcloud.la/%E5%BC%82%E5%BA%A6%E5%85%A5%E4%BE%B5%E9%92%A2%E7%90%B4%E6%9B%B2.mp3?sign=14060320554bdb19fe08673e575087e3&t=1588919160',
  },

  onLoad: function (options) {
    var _this = this;
    const db = wx.cloud.database({
      env: 'test-condition-f3ufo',
      traceUser: true,
    })
    db.collection('chenjieyi').get({
      success: res => {
        console.log(res.data)
        this.setData({
          ne: res.data
        })
      }
    })
  },




})

