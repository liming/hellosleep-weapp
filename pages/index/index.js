//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user: null,
    report: null,
  },

  goEvaluate: function(event) {
    wx.navigateTo({
      url: '../evaluate/evaluate',
    })
  },
  
  onLoad: function() {
    app.getUser({
      success: (user) => {
        this.setData({user: user})
      }
    })
  },

  onShow: function() {
    app.getReport({
      success: (report) => {
        this.setData({report: report})
      }
    })
  }

})
