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
    changeTheme: function() {
        console.log(this.data);
        getApp().themeChanged(this.data.theme === 'light' ? 'dark' : 'light');
    }
});
