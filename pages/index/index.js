// index.js
// 获取应用实例
const util = require('../../utils/util')
var now = util.formatTime(new Date())


Page({
  data: {
    date: now,
  },

  onPullDownRefresh() {
    
    // console.log(now);
    this.setData({
      date:now
    })
  },
 
  onLoad() {
    
  },

  go() {
    wx.navigateTo({
      url: '/pages/go/go',
    })
  },

  arrive() {
    wx.navigateTo({
      url: '/pages/arrive/arrive',
    })
  },

  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },



  

})
