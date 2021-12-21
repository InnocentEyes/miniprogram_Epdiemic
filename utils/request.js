/**
 * @author qzlzzz
 * @version 1.0
 * @since 2021/10/29
 */
import config from './config'
export default (url,data={},method='GET') => {
  return new Promise((reslove,reject)=>{
    wx.request({
      url: config.host+url,//在本机上测试时使用localhost网址,在移动端测试时使用内网穿透地址
      data: data,
      header: wx.getStorageSync('token') ? wx.getStorageSync('token') : '',
      dataType: 'json',
      method: method,
      success: (res)=>{
        if(data.isLogin){
          if(res.header.user_token){
            wx.setStorage({
              key: 'token',
              data: res.header.user_token,
            })
          }
        }
        reslove(res);
      },
      fail: (err)=>{
        console.log(err);
        rejects(err);
      }
    })
  })
}