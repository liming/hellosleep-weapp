class User {
  constructor() {
    this.info = {}
    this.point = 0;
  }

  setPoint(point) {
    this.point = point;
  }
}

function saveUser(user) {
  wx.setStorageSync('hsUser', user);
}

function loadUser(success, fail) {
  let user = wx.getStorageSync('hsUser', )
  if (user && success) {
      success(user)
  } else {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              let user = new User()
              user.info = res.userInfo;
              user.point = 0;
              wx.setStorageSync('hsUser', user)
              if (success) {
                success(user)
              }
              saveUser();
            }
          })
        }
      },
      fail: res => {
        if (fail) {
          fail(res)
        }
      }
    })

  }

}

module.exports = {
  User: User,
  loadUser: loadUser,
  saveUser: saveUser
};