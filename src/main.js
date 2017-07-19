require('es6-promise').polyfill();
import Vue from 'vue'
import './main.less'
// import Share from '@dp/util-m-share';

import MainContainer from './main.vue'
import VueResource from 'vue-resource'
// import VueLazyload from 'vue-lazyload'
// import Bus from './components/middle.js'
// import _hip from '@dp/hippo'
Vue.use(VueResource)
// Vue.use(VueLazyload)

new Vue({
  el: '#main',
  render: h=>h(MainContainer),
  mounted () {
  	// Bus.$on('getCity',() => {
  	// 	require('@dp/hippo')
  	// })
  },
  components: {
    // 'app-common-ad':appCommonAd,
  }
})
