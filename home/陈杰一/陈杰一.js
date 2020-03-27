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
    poster: 'https://i0.hdslb.com/bfs/bangumi/image/9bf9e66968f85b33ec3769a16c86b36dc984abbc.png@268w_358h.webp',
    name: '异度侵入钢琴曲',
    author: '',
    src: 'http://music.163.com/song/media/outer/url?id=1425573002.mp3',
  },





})

