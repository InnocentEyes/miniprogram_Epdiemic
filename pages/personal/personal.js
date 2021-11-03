// pages/personal/personal.js

let start_y = 0;
let move_y = 0;
let move_distance = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    converTransfrom: 'translateY(0rpx)',
    converTransition: '',
  },

  toLogin: function(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  touchStart: function(event){
    this.setData({
      converTransition: '',
    })
    start_y = event.touches[0].clientY;
  },

  touchMove: function(event){
    move_y = event.touches[0].clientY;
    move_distance = move_y - start_y;
    if(move_distance < 0){
      return;
    }
    if(move_distance >= 75){
      move_distance = 75;
    }
    this.setData({
      converTransfrom: `translateY(${move_distance}rpx)`
    })
  },

  touchEnd: function(event){
    this.setData({
      converTransfrom: 'translateY(0rpx)',
      converTransition: 'transform 1s linear',
    })
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