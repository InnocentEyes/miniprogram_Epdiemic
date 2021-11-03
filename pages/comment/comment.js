// pages/comment/comment.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //初始值用于测试
    commentList: [
      {
        id: 0,
        title: '护眼攻略',
      },
      {
        id: 1,
        title: '出门防护手段',
      },
      {
        id: 2,
        title: '吃出健康生活',
      },
      {
        id: 3,
        title: '人人都有好肠胃',
      },
      {
        id: 4,
        title: '生活中如何缓解压力',
      },
      {
        id: 5,
        title: '疫苗那些事儿',
      },
      {
        id: 6,
        title: '急救宝典',
      },
      {
        id: 7,
        title: '和慢性病和平相处',
      }
    ],
    navId: '0',
    commentColor: ['#846bff','#feb447','#447dc5'],
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

  }
})