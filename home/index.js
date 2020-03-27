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
});
