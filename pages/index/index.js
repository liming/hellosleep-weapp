//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user: null, 
    hasUser: false,    
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  goEvaluate: function(event) {
    wx.navigateTo({
      url: '../evaluation/evaluation',
    })
  },
  
  onShow: function() {
    this.loadUser()
  },
  onLoad: function () {
    this.loadUser()
  },

  loadUser: function() {
    let that = this
    if (app.globalData.user) {
      this.setData({
        user: app.globalData.user,
        hasUser: true
      })
    } else if (this.data.canIUse) {
      app.userReadyCallback = function(user) {
        that.setData({
          user: app.globalData.user,
          hasUser: true
        })
      }
      console.log("userReadyCallback set")
    }
  }
})
