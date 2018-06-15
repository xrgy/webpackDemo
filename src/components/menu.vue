<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 monitor">
    <div id="leftMenu" class="col-xs-3 col-sm-3 col-md-3 col-lg-3 monitor-layout left-menu">
      <ul>
        <li id="menu-all" class="one-level" v-on:click="clickResource($event,'all')">
          <router-link :to="{ path: '/',query:{'type':'all'}}">
            <span class="one-level-title">全部资源</span>
          </router-link>
        </li>
        <li class="one-level one-level-li"><span class="one-level-title">按资源类别</span>
          <i class="fa fa-angle-down" v-on:click="toggleTwoLevel($event)"></i>
          <ul class="two-level-ul">
            <li v-on:click="clickResource($event,'network')">
              <router-link :to="{ path: '/network' ,query:{'type':'network'}}">
                <span>网络设备</span>
              </router-link>
            </li>
            <li v-on:click="clickResource($event,'database')">
              <router-link :to="{ path: '/database',query:{'type':'database'}}">
                <span>数据库</span>
              </router-link>
            </li>
            <li v-on:click="clickResource($event,'middleware')">
              <router-link :to="{ path: '/middleware' }">
                <span>中间件</span>
              </router-link>
            </li>
            <li v-on:click="clickResource($event,'virtual')">
              <router-link :to="{ path: '/virtual' }">
                <span>虚拟化</span>
              </router-link>
            </li>
            <li v-on:click="clickResource($event,'container')">
              <router-link :to="{ path: '/container' }">
                <span>容器</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>

    </div>
    <div id="monitorList" class="col-xs-9 col-sm-9 col-md-9 col-lg-9 monitor-layout monitor-list">
      <!--<keep-alive>-->
      <!--:type="type"-->
      <router-view></router-view>
      <!--</keep-alive>-->
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        routerTitle: "",
        switchTitle: "",
        firewallTitle: "",
        LBTitle: "",
        mysqlTitle: "",
        casTitle: "",
        virtualMachineTitle: "",
        k8sTitle: "",
        k8sContainerTitle: ""
      }
    },
    mounted: function () {
      debugger
      var _self = this;
      $('#menu-all').trigger("click");
      _self.$router.push({path: '/',query:{'type':'all'}});
    },
    methods: {
      toggleTwoLevel: function (event) {
        var e = event.target;
        $(e).toggleClass('fa-angle-down fa-angle-up');
        $(e).parent().children('ul').toggleClass('hidden');
      },
      clickResource: function (event, str) {
          var _self = this;
        var e = event.target;
        if (str === "") {
          //todo
        }
        if (!$(e).is('li') || $(e).attr('id') === 'menu-all') {
          $('#leftMenu').find('li').removeClass('active');
          $(e).closest('li').addClass('active');
        }
      }
    }

  }
</script>

<style type="text/css" scoped>
  @import "../style/common.css";

  .monitor {
    margin-top: 10px;
  }

  #leftMenu {
    height: 560px;
    box-shadow: 1px 2px 20px 2px #eee;
  }

  ul {
    list-style: none;
  }

  .monitor-layout {
    float: left;
  }

  li {
    height: 50px;
    text-align: left;
    padding: 12px;
    width: 200px;
  }

  i,
  li a {
    cursor: pointer;
  }

  li:not(.one-level-li):hover,
  li:not(.one-level-li).active {
    border-left: 10px solid #ec670b;
    color: #ec670b;
    background: -webkit-linear-gradient(left, rgb(249, 203, 164), rgb(245, 237, 229));
    background: -ms-linear-gradient(left, rgb(249, 203, 164), rgb(245, 237, 229));
    background: -moz-linear-gradient(left, rgb(249, 203, 164), rgb(245, 237, 229));
    background: -o-linear-gradient(left, rgb(249, 203, 164), rgb(245, 237, 229));
    background: linear-gradient(left, rgb(249, 203, 164), rgb(245, 237, 229));
  }

  li span {
    color: #000;
  }

  li:not(.one-level-li):hover span,
  li:not(.one-level-li).active span {
    color: #ec670b;
  }

  .one-level-title {
    font-weight: bold;
  }

  .two-level-ul {
    padding-left: 0;
  }
</style>
