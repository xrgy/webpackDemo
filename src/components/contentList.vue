<template>
  <div>
    <monitorEditMenu @getData="childGetData" :tag="testCom"></monitorEditMenu>
    <div><span>{{$route.query.type}}</span></div>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <td>名字</td>
        <td>ip</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>switch13</td>
        <td>192.168.1.13</td>
      </tr>
      <tr>
        <td>switch12</td>
        <td>192.168.1.12</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import monitorEditMenu from '../components/editMonitorMenu'
  export default{
    data(){
      return {
        testCom: "del",
      }
    },
    components: {
      monitorEditMenu
    },
    created: function () {
      var type = this.$route.query.type;
      //type undefined
    },
    mounted: function () {
      var _self = this;
      var type = _self.$route.query.type;
      //type undefined
    },

    //传入的标题，会改变dom，所以触发beforeUpdate事件
    beforeUpdate:function () {
      console.group('beforeUpdate 更新前状态===============》');
      this.getData();
    },
    //监听路由改变
    watch: {
      '$route' (to, from) {
        // 刷新参数放到这里里面去触发就可以刷新相同界面了
        console.log('watch to '+to);
        console.log('watch from '+from);
        this.getData()
      }
    },
    methods: {
      childGetData: function (data) {
        console.log(data);
      },
      getData: function () {
        var _self = this;
        var type = _self.$route.query.type;
        console.log("get data " + type);
        //todo
      }
    }
  }
</script>

<style>

</style>
