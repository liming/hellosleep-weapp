// import {User, loadUser, saveUser} from 'utils/user'
import {getUser} from 'utils/user'
import {Survey, Report} from 'utils/survey'
import {dumb} from 'utils/util'
import * as hs from 'utils/hellosleep'

//app.js
App({
  onLaunch: function () {
  },

  globalData: {
    user: null,
    survey: null,
    report: null,
  },

  getUser: function(cb) {
    const success = cb.success,
          fail = cb.fail

    if (this.globalData.user) {
      console.log("Found user")
      typeof success == 'function' && success(this.globalData.user)
    } else {
      console.log("request user")
      getUser({
        success: (user) => {
          console.log("Got User")
          this.globalData.user = user
          typeof success == 'function' && success(user)
        },
        fail: (err) => {
          this.globalData.user = null
          typeof fail == 'function' && fail(err)
        }
      })
    }
  }, 
  
  getSurvey: function(cb) {
    if (this.globalData.survey) {
      typeof cb.success == 'function' && cb.success(this.globalData.survey)
    } else {
      hs.getEvaluationData({
        success: (evalData) => {
          let survey = new Survey(evalData)
          this.globalData.survey = survey
          typeof cb.success == 'function' && cb.success(survey)
        },
        fail: () => { fail() }
      })
    }
  },
  
  getReport: function(cb) {
    const success = cb.success,
          fail = cb.fail

    if (this.globalData.report) {
      typeof success == 'function' && success(this.globalData.report)
    } else {
      typeof fail == 'function' && fail(this.globalData.report)
    }
  }
})