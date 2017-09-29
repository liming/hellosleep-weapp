// import {User, loadUser, saveUser} from 'utils/user'
import {getUser} from 'utils/user'
import {getSurvey} from 'utils/survey'
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
      typeof success == 'function' && success(this.globalData.user)
    } else {
      getUser({
        success: (user) => {
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
    const success = cb.success,
          fail = cb.fail

    if (this.globalData.survey) {
      typeof success == 'function' && success(this.globalData.survey)
    } else {
      getSurvey({
        success: survey => { 
          this.globalData.survey = survey;
          typeof success == 'function' && success(survey) 
        },
        fail: (err) => {typeof fail == 'function' && fail(err)}
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