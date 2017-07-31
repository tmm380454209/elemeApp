<template>
	<div>
		<div class="cartcontrol">
		<transition name="move">
			<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
				<transition name="rotate">
					<span class="inner icon-remove_circle_outline" v-show="food.count>0"></span>
				</transition>
			</div>
		</transition>
			<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
			<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
	export default{
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			addCart() {
				if(!this.food.count){
					Vue.set(this.food,'count',1);
				}else{
					this.food.count++;
				}
				this.$emit('add',event.target);
			},
			decreaseCart() {
				if(this.food.count){
					this.food.count--;
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  font-size:0
  .cart-decrease
    display:inline-block
    padding:6px
    &.move-enter-active, &.move-leave-active
      transition:all 0.4s linear
    &.move-leave-to,&.move-enter
      opacity:0
      transform:translate3d(24px,0,0)
    .inner
      display:inline-block
      font-size:24px
      line-height:24px
      color:rgb(0,160,220)
      &.rotate-enter-active, &.rotate-leave-active
        transition:all 0.4s linear
      &.rotate-leave-to, &.rotate-enter
        transform:rotate(180deg)
  .cart-count
    display:inline-block
    vertical-align:top
    font-size:10px
    width:12px
    padding-top:6px
    line-height:24px
    text-align:center
    font-size:10px
  .cart-add
    display:inline-block
    font-size:24px
    line-height:24px
    padding:6px
    color:rgb(0,160,220)
</style>