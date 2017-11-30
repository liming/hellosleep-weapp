//index.js
//获取应用实例
const app = getApp()

const mockReport = {
  survey: null,
  tags: [
    { text: ' tag1' },
    { text: ' tag1' },
    { text: ' tag1' }
  ]
}

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
    // this.setData({ report: mockReport })
  },

  onShow: function() {
    app.getReport({
      success: (report) => {
        this.setData({ report: report})
      }
    })
  }

})
