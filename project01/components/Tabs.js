Component({

  properties: {
    // aaa:{
    //   type:String,
    //   value:""
    // },
    tabs:{
      type:Array,
      value:[]
    }
  },
  data: {
  // 这里是一些组件内部数据
  },
  methods: {
    handleItemTap(e){
      const { index } = e.currentTarget.dataset;
      this.triggerEvent("itemChange",{index});
      // let { tabs } = this.data;
      // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      // this.setData({
      //   tabs
      // })
    }
  }
})