<template>
	<div class="block">
	<el-carousel :height="heightinfo">
	  <el-carousel-item v-for="(item,index) in items" :key="index">
	   	<img v-bind:src="item.img" style="height:100%;width:100%;">
	  </el-carousel-item>
	</el-carousel>
	<div @click="chparmsg">{{msgpar}}</div>
	</div>
</template>
<script>
import img1 from '../../assets/img/img2.png';
import img2 from '../../assets/img/img3.png';
import img3 from '../../assets/img/img4.png';
import img4 from '../../assets/img/img5.png';
import img5 from '../../assets/img/img6.png';
	export default{
		data(){
			return{
				items:[
					{img:img1},
					{img:img2},
					{img:img3},
					{img:img4},
					{img:img5}
				]
			}
		},
		props: {
		    item: {
		      type: Number,
		    },
		    msgpar:{
		    	type:String,
		    },
		    heightinfo:{
		    	type:String,
		    	default:"450px",
		    }
	    },
	    methods:{
	    	chparmsg:function(e){
	    		this.msgpar="修改父组件消息";
	    	}
	    }
	}
</script>
<style>
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 150px;
	margin: 0;
}
.el-carousel__item:nth-child(2n) {
 	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
 	background-color: #d3dce6;
}
</style>