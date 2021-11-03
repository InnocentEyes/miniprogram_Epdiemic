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
      method: method,
      success: (res)=>{
        if(data.isLogin){
          wx.setStorage({
            key: 'cookies',
            data: res.cookies
          })
        }
        reslove(res.data);
      },
      fail: (err)=>{
        console.log(err);
        rejects(err);
      }
    })
  })
}