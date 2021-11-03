const getTime = ()=>{
  let year = new Date().getFullYear();
  let month = new Date().getMonth()+1;
  let day = new Date().getDate();
  return `${[year,month,day].map(formatNumber).join('/')}`
}

const getDetailTime = ()=>{
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  return `${[hour,minute,seconds].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
};
module.exports = {
  getTime,
  getDetailTime,
  option
}