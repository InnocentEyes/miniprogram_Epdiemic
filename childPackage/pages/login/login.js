// pages/login/login.js

import request from '../../../utils/request';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',//手机号
    password: '',//密码
    isChecked: false,//checkbox是否被选中
  },

  changeInput: function(event){
    this.setData({
      [event.currentTarget.id]: event.detail.value, 
    });
  },

  handleChange: function(){
    let isChecked = !this.data.isChecked;
    this.setData({
      isChecked
    })
  },

  sendMessage: async function(){
    if(!this.data.isChecked){
      return;
    }
    let {password,phone} = this.data;
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
      })
      return;
    }
    //手机号的正则表达式
    let phoneReg = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none',
      })
      return;
    }
    if(!password){
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
      })
      return;
    }
    //后端验证
    let result = await request('/login',{password,phone,isLogin: true},'POST');
    if(result.data.code == 302){
      wx.showToast({
        title: '密码错误',
        icon: 'error',
      })
      this.setData({
        password: '',
      })
      return;
    }
    if(result.statusCode == 200){
      wx.showToast({
        title: '登录成功',
        icon: 'success',
      })
      wx.setStorageSync('userInfo', result.data);
      wx.setStorageSync('token', result.header.user_token)
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})