// pages/index/index.js
//引入 echarts.js
const OPTION = require('../../utils/utils')
import { RFC_2822 } from "moment";
import * as echarts from "../../ec-canvas/echarts"
let chart = null;
const time = require('../../utils/utils');
//index页需要用到echarts-for-wexin
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTime: '',
    detailTime: '',//现在的时间
    footId: '1',//被选中的id,默认为1
    isShow: false,//是否展示数据，默认是否
    message: [{id: 1,fontColor: '#f74c31',info: '现存确诊'},{id: 2,fontColor: '#f78207',info: '境外输入'},{id: 3,fontColor: '#a25a4e',info: '现存无症状'},{id: 4,fontColor: '#ae212c',info: '累计确诊'},{id: 5, fontColor: '#8795ae',info: '累计死亡'},{id: 6,fontColor: '#28b7a3',info: '累计治愈'}],
    ec: {
      onInit: function (canvas,width,height,dpr) {
                chart = echarts.init(canvas,null,{
                      width: width,
                      height: height,
                      devicePixelRatio: dpr
                    })
                canvas.setChart(chart);
                chart.setOption(OPTION.option);
                return chart;
              },
    },
    
  },

  isShow: function(){
    let isShow  = !this.data.isShow;
    this.setData({
      isShow
    })
  },

  changeFooter: function(event){
    let footId = event.currentTarget.dataset.id;
    this.setData({
      footId
    })
  },

  //get DetailTime in this day 
  getcurrentTime: function(){
    let currentTime = time.getTime();
    this.setData({
      currentTime
    })
    setInterval(()=>{
      let detailTime = time.getDetailTime();
      this.setData({
        detailTime
      })
    },1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getcurrentTime();
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