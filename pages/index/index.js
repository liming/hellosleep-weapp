//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    report: {},
    userInfo: {},
    userOpenId: null,
    hasReport: false,
    hasUserInfo: false,    
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  getReport: function(userInfo) {
    report = {
      point: 1
    }
    this.setReport(report);
  },

  setReport: function(report) {
    this.setData({
      report:report,
      hasReport: true
    })
  },

  //事件处理函数
  goEvaluate: function(event) {
    wx.navigateTo({
      url: '../evaluation/evaluation',
    })
  },
  
  onShow: function() {
    if (app.globalData.userReport) {
      this.setReport(app.globalData.userReport)
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (app.globalData.userOpenId) {
      this.setData({
        userOpenId: app.globalData.userOpenId
      })
    } else {
      app.userOpenIdReadyCallback = res => {
        this.setData({
          userOpenId: app.globalData.userOpenId
        })
      }
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  getUserReport: function(e) {
    console.log(e)
    this.setReport({
      point: 2
    })
  }
})
