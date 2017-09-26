// pages/evaluation/evaluation.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    question: null,
    value: null,
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getSurvey({
      success: (survey) => {
        this.survey = survey
        this.setCurrentQuestion()
      }
    })
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

  onSelect: function(e) {
    this.setData({
      value: e.target.dataset.value
    })
    this.answerAndNext()
  },

  onDateChange: function (e) {
    this.onValueChange(e)
  },

  onSlide: function(e) {
    this.onValueChange(e)
  },

  onValueChange: function(e) {
    this.setData({
      value: e.detail.value
    })
  },

  onNext: function(e) {
    this.answerAndNext() 
  },

  onPrevious: function(e) {
    if (this.survey.goPreviousInTrace()) {
      this.setCurrentQuestion()
    }
  },

  answerAndNext: function () {
    this.survey.setAnswer(this.data.value)
    this.goNext()
  },

  
  goNext: function() {
    if (this.survey.goNextAvailable()) {
      this.setCurrentQuestion()
    } else {
      wx.navigateTo({
        url: '../submit/submit',
      })
    }
  },

  setCurrentQuestion: function() {
    this.setData({
      question: this.survey.currentQuestion,
      value: null,
      loading: false
    })
  }
})