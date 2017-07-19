<template>
	<div class="tip" v-if="showFlag">
		<span>
			<slot></slot>
		</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				showFlag : false
			}
		},
		methods: {
			trig () {
				if(this.showFlag){
					return
				}
				this.showFlag = true;
				setTimeout(() => {
					this.showFlag = false;
				},3000)
			}
		}
	}
</script>

<style lang="less" scoped>
	.tip{
		position: fixed;
    top: 42%;
		left:0;
		width:100%;
		font-size: 1.46484375rem;
		line-height: 4;
    text-align: center;
    z-index: 19;
  	span{
  		display: inline-block;
  		padding: 0 3rem;
  		border-radius: 7px;
  		color: #fff;
  		background:rgba(0, 0, 0, 0.4);
	    text-overflow: ellipsis;
	    max-width: 70%;
	    white-space: nowrap;
	    overflow: hidden;
  	}
	}
</style>