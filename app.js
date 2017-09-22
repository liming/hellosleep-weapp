// import {User, loadUser, saveUser} from 'utils/user'
import {loadUser, saveUser} from 'utils/user'
import {Survey} from 'utils/survey'
import {dumb} from 'utils/util'
import * as hs from 'utils/hellosleep'

//app.js
App({
  onLaunch: function () {
    const that = this;
    loadUser(
      function (user) {
        that.globalData.user = user;
        let cb = that.userReadyCallback
        if (cb) {
           cb(user)
        }
      }
    )
  },
  globalData: {
    user: null,
    survey: null,
  },

  saveUser: function(user) {
    if (user) {
      this.globalData.user = user;
    }
    saveUser(this.globalData.user)
  },

  loadSurvey: function(actions) {
    const that = this;
    const success = actions.success || dumb,
          fail = actions.fail || dumb;

    hs.getEvaluationData({
      success: (evalData) => {
        let survey = new Survey(evalData)
        that.globalData.survey = survey
        success(survey)
      },
      fail: () => {
        fail()
      }
    })
  }
})