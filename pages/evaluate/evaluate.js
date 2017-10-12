// pages/evaluate/evaluate.js
import {getEvaluationData} from "../../utils/hellosleep"

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    answers: {},
    groups: null,
    current: null,
    canEvaluate: false,
    showOptions: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getSurvey({
      success: (survey) => {
        this.survey = survey
        this.setData({
          groups: this.survey.groups,
          answers: this.survey.answers,
          availables: Array.from(this.survey.availables),
          canEvaluate: this.survey.canEvaluate()
        })
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

  onValueChange: function(e) {
    console.log(e);
    let qname = e.target.dataset.name,
        answer = e.detail.value
    this.setAnswer(qname, answer)
  },

  onSelectChange: function(e) {
    console.log(e);
    let qname = e.target.dataset.name,
        options = e.target.dataset.options,
        answer = options[Number(e.detail.value)].value
    this.setAnswer(qname, answer)
  },

  setAnswer: function(qname, answer) {
    this.survey.setAnswer(qname, answer);
    let answerKey = 'answers.' + qname,
        showKey = 'showOptions.' + qname

    this.setData({
      [answerKey]: answer,
      [showKey]: false,
      availables: Array.from(this.survey.availables),
      canEvaluate: this.survey.canEvaluate()
    })
  },

  onSubmit: function () {
    wx.navigateTo({
      url: '../report/report',
    })
  },

  onToggleOptions: function(e) {
    console.log(e)
    let qname = e.currentTarget.dataset.name;
    let key = 'showOptions.' + qname,
        value = this.data.showOptions[qname] ? false: true
    this.setData({[key]: value})
  }

})