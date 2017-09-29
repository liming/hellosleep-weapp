export class User {
  constructor() {
    this.info = {}
  }
}

function getUserInfo(success) {
  wx.getUserInfo({
    success: res => {
      let user = new User()
      user.info = res.userInfo;
      user.point = 0;
      wx.setStorageSync('hsUser', user)
      typeof success == 'function' && success(user)
    }
  })
}

export function getUser(cb) {
  const success = cb.success,
        fail = cb.fail;
  let user = wx.getStorageSync('hsUser', )
  if (user) {
    typeof success == 'function' && success(user) 
  } else {
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              getUserInfo(success)
            }
          })
        } else {
          getUserInfo(success)
        }
      },
      fail: res => { typeof fail == 'function' && fail(res) }
    })

  }

}
