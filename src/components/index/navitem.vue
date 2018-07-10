<template>
	<el-menu
	  :default-active="activeIndex"
	  class="el-menu-demo"
	  mode="horizontal"
	  @select="handleSelect"
	  background-color="#545c64"
	  text-color="#fff"
	  active-text-color="#ffd04b">
	  <el-menu-item :index="index+1" v-for="(item,index) in navlists" :key="index">
	  	<router-link :to="item.router">{{item.name}}</router-link>
	  </el-menu-item>
	</el-menu>
</template>
<script>
	export default{
		data(){
			return {
				navlists:[
					{name:'首页',router:'/'},
          			{name:'路由',router:'/content'},
          			{name:'表格',router:'/table1'},
          			{name:'表单',router:'/form/zhangsan'},
				]
			}
		},
		props:{
			activeIndex:{
				default:"1"
			}
		},
		 methods: {
	      handleSelect:function(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>