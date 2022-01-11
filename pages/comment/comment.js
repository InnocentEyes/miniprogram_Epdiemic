// pages/comment/comment.js

import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //初始值用于测试
    commentList: [],
    navId: '0',
    commentColor: ['#846bff','#feb447','#447dc5'],
  },

  getTypes: async function(){
    let res  = await request('/mobile/types?count=1',{isLogin: false})
    let commentList = res.data;
    if(commentList.status == 'SUCCESSFUL'){
      this.setData({
        navId: commentList.result[0].typeNo,
        commentList: commentList.result
      })
    }else{
      console.error("请求失败");
    }
  },

  toSearch: function(){
    wx.navigateTo({
      url: '/childPackage/pages/search/search'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!wx.getStorageSync('token')){
      wx.reLaunch({
        url: '/childPackage/pages/login/login',
      })
    }
    this.getTypes();
  },

  toCommentDetail: function(){
    if(!wx.getStorageSync('token')){
      wx.navigateTo({
        url: '/childPackage/pages/login/login',
      })
    }
    wx.navigateTo({
      url: '/childPackage/pages/commentDetail/commentDetail',
    })
  },

  changeNav: function(event){
    let navId = event.currentTarget.id;
    this.setData({
      navId
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
    return {
      title: '在线疫情防控系统',
      page: '/pages/comment/comment',
    }
  },

  /**
   * 还要再改进
   */
  onShareTimeline: function(){
    return{
      title: '在线疫情防控系统',
      page: '/pages/comment/comment'
    }
  }
})