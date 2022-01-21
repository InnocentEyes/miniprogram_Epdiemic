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
    userInfo: '',
    visibility:'hidden',
    bordercolor:['black','black','black'],
    judge:'hidden',
    boolean:true
  },

  toLogin: function(){
    if(wx.getStorageSync('token')){
      return;
    }
    wx.navigateTo({
      url: '/childPackage/pages/login/login'
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
    if(wx.getStorageSync('userInfo')){
      this.setData({
        userInfo: wx.getStorageSync('userInfo'),
      })
    }
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

  },
  // 显示模态框
  personal_editor:function(){
    let that = this;
    that.setData({
      visibility:'visible'
    })
  },
  
  getuservalue:function(e){
    
    //正则表达式判断 输入由数字和26个英文字母组成的字符串
    let reg = /^[A-Za-z0-9]+$/;
    let res = reg.test(e.detail.value);
    let that = this;
    let index = 0;
    let str = "bordercolor["+index+"]";
    //console.log(str);
    if(res){
      that.setData({
        [str]:'black'
      })
    }else{
      that.setData({
        [str]:'red'
      })
    }
  },
  getphonevalue:function(e){
    //11位手机号码 第一位为1，第二位为3，4，5，7，8 剩下的9位为0-9随机
    let reg = /^[1][3,4,5,7,8][0-9]{9}$/
    let res = reg.test(e.detail.value);
    let index = 1;
    let str = "bordercolor["+index+"]";
    let that = this;
    if(res){
      that.setData({
        [str]:'black'
      })
    }else{
      that.setData({
        [str]:'red'
      })
    }
  },
  getpasswordvalue:function(e){
    //设置六位数密码
    let reg = /[^]{6,}$/;
    let res = reg.test(e.detail.value);
    let index = 2;
    let str = "bordercolor["+index+"]";
    let that = this;
    if(res){
      that.setData({
        [str]:'black'
      })
    }else{
      that.setData({
        [str]:'red'
      })
    }
  },

  sumbitbutton:function(data){
     let that = this;
    // 输入的用户名userinput 电话phoneinput 密码passwordinput 个人简介resumearea
     let formData = data.detail.value; 
     //全部input都填写正确
    if(this.data.bordercolor[0]=='black'
    &&this.data.bordercolor[1]=='black'
    &&this.data.bordercolor[2]=='black'){

      // 发出成功提示信息
      that.setData({
        boolean:true,
        judge:'visible'
        })
        //修改成功的数据提交表单到服务器
        wx.request({
          url:'',
          data:formData,
          header:{'Content-Type':'application/json'},
          success:function(res){
            console.log(res.data);
          }
        })
        // 隐藏提示信息和模态框
      setTimeout(function() {
         that.setData({
        judge:'hidden',
        visibility:'hidden'
         }) 
     }, 1000);
    
    }else{
      //提示修改错误信息
      that.setData({
        boolean:false,
        judge:'visible'
        
        })
        //隐藏提示信息
      setTimeout(function() {
         that.setData({
        judge:'hidden'
         }) 
     }, 1000);
    }
  },

  //关闭模态框
  closebutton:function(){
    let that = this;
    that.setData({
      visibility:'hidden'
    })
  },
  //点击关于数据页面跳转
  clickdata:function(){
    wx.navigateTo({
      url:'../../childPackage/pages/clickdata/clickdata'
    })
  }
})