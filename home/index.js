Page({
  mixins: [require('../mixin/themeChanged')],
  data: {
    list: [

      {
        id: 'layout',
        name: '小组成员',
        open: false,
        pages: ['王泽龙', '杨文豪', '陈杰一', '安笛', '贾子安']
      }



    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  changeTheme: function () {
    console.log(this.data);
    getApp().themeChanged(this.data.theme === 'light' ? 'dark' : 'light');
  }
  ,
  player(audio) {
    var that = this

    audio.title = '千与千寻'

    audio.src = 'https://7465-test-condition-f3ufo-1302039225.tcb.qcloud.la/background%20music.mp3?sign=6592c2a4f5e00b2d323258ee5a3a5aaa&t=1588918938'

    
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
});
