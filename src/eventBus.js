import Vue from 'vue';

const bus = new Vue();

// 建立 vue 實體作為事件中心，另外透過 defineProperty 定義 $bus 
// 屬性來取得 root vue instance 中 bus 資料，方便各組件取用
Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus;
  },
});

export default bus;
