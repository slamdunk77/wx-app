// pages/demo02/demo02.js
Page({
  data:{
    gander:"",
    list:[
      {
        id:0,
        name:"apple"
      },
      {
        id:1,
        name: "banana"
      },
      {
        id:2,
        name: "grape"
      }
    ],
    checkList:[]
  },
  handleItemChange(e){
    //获取被选中的复选框中的值
    const checkList = e.detail.value;
    //把值赋给data中的数据
    this.setData({
      checkList
    })
  },
  handleChange(e){name
    console.log(e);
    //获取单选框中的值
    let gender=e.detail.value;
    //把值赋给data中的数据
    this.setData({
      gender:gender
    })
  },
  //获取用户的手机号信息
  getPhoneNumber(e){
    console.log(e);
  },
  //获取用户个人信息
  getUserInfo(e){
    console.log(e);
  }
})