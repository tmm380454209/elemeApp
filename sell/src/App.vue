<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue';
import goods from  './components/goods/goods.vue';
import {urlParse} from './common/js/util.js';
import Vue from 'vue';

const ERR_OK = 0;

export default {
  data() {
  	return {
  	  seller: {
        id:(() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      }
    }
  },
  created() {
  	this.$http.get('/api/seller?id=' +this.seller.id).then((response) => {
  	  response = response.body;
  	  if(response.errno === ERR_OK){
  	  	this.seller = Object.assign({},this.seller,response.data);
  	  }
  	});
  },
  components:{
    "v-header":header,
    goods:goods
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"

#app
    .tab
        display: flex
        width: 100%
        line-height: 40px
        height: 40px
        border-1px(rgba(7,17,27,0.1))
        .tab-item
           flex: 1
           text-align: center
		       a
		   	    display:block
		   	    font-size:14px
		   	    color:rgb(77,85,93)
		   	    &.active
		   	 	    color:rgb(240, 20, 20)

		    
</style>
