// pages/evaluation/evaluation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [10, 20, 30, 60, 80, 100],
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  

  radioChange: e => {
    console.log(e.detail.value)
  },

  formSubmit: e => {
    let point = e.detail.value['radio-group'];
    app.globalData.userReport = {
      point: point
    }
    console.log(point)
    wx.navigateBack({
      url: '../index/index'
    })
    
  }

})