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
        <td>router13</td>
        <td>192.168.1.13</td>
      </tr>
      <tr>
        <td>router12</td>
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
    created:function () {
      var type = this.$route.params.type;
      console.log("created request router"+type);
    },
    mounted: function () {
      var _self = this;
      var type = _self.$route.params.type;
      if (type === "all") {
        console.log("mounted request all");
      } else {
        console.log("mounted request single type");
      }
    },
    methods:{
      childGetData:function (data) {
        console.log(data);
      }
    }
  }
</script>

<style>

</style>
