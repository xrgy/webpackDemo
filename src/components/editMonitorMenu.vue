<template>
  <div>
    <button type="button" class="btn def-btn def-btn-primary" v-on:click="send('shougong')">手工添加</button>
    <button type="button" class="btn def-btn def-btn-primary">删除</button>
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


</style>
