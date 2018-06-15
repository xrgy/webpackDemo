<template>
  <div>
    <button type="button" class="btn def-btn def-btn-primary" v-on:click="send('shougong')">
      <i class="fa fa-plus i-bt"></i>手工添加</button>
    <button type="button" class="btn def-btn def-btn-primary">
      <i class="fa fa-trash i-bt"></i>删除</button>
  </div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    props: ['tag'],
    mounted: function () {
      console.log(this.tag);
    },
    methods: {
      send: function (data) {
        var _self = this;
        _self.$emit('getData', data + "ss");
      }
    }
  }
</script>
<style>
  @import "../style/common.css";
.i-bt{
  margin-right: 4px;
}

</style>
