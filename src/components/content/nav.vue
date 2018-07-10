<template>
<div class="nav">
	<el-row>
	<el-col :span="3">
	    <el-menu
	      default-active="1"
	      class="el-menu-vertical-demo"
	      background-color="#fff"
	      text-color="#000"
	      active-text-color="#f44444">
        <router-link :to="rout1">
	        <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span>导航一
      		</span>
	      	</el-menu-item>
  		</router-link>
	    <router-link :to="rout2">
	      <el-menu-item index="2">
	        <i class="el-icon-menu"></i>
	        <span slot="title">导航二
	        </span>
	      </el-menu-item>
		</router-link>
		<router-link :to="rout3">
	      <el-menu-item index="3">
	        <i class="el-icon-document"></i>
	        <span slot="title">导航三</span>
	      </el-menu-item>
	    </router-link>
	    <router-link :to="rout4">
	      <el-menu-item index="4">
	        <i class="el-icon-setting"></i>
	        <span slot="title">导航四</span>
	      </el-menu-item>
	    </router-link>
	    </el-menu>
	  </el-col>
	  <el-col :span="21">
	   <h3>子路由</h3>
		<router-view></router-view>
	  </el-col>
  </el-row>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				rout1:"/nav1/canshu",
				rout2:"/nav2/canshu",
				rout3:"/nav3/canshu",
				rout4:"/nav4/canshu"
			}
		}
	}
</script>
<style>
	a{
		text-decoration: none;
		color:#000;
	}
	.nav{
		width: 80%;
		margin:10px auto;
	}
	.el-menu-item{
		text-align: center;
	}
</style>