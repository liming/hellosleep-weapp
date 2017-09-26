class User {
  constructor() {
    this.info = {}
    this.point = 0;
  }

  setPoint(point) {
    this.point = point;
  }
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
          })
        } else {
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
      },
      fail: res => { console.log("fail"); typeof fail == 'function' && fail(res) }
    })

  }

}

module.exports = {
  User: User,
  getUser: getUser
};