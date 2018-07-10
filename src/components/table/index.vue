<template>
	<div>
		<el-button type="primary" @click="mulch" size="small" style="margin-left:10%;">批量处理</el-button>
		<div class="table">
		<el-table
		ref="multipleTable"
	    :data="tableData"
	    style="width: 100%"
	    @selection-change="handleSelectionChange"
	    @select="select"
	    @row-click="rowclick">
	    <el-table-column
	      type="index">
	    </el-table-column>
	    <el-table-column
	      type="selection">
	    </el-table-column>
	    <el-table-column
	      prop="date"
	      label="日期"
	      v-if="isdate">
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址">
	    </el-table-column>
        <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="mini">{{revermes1}}</el-button>
          <el-button type="warning" size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button type="warning" size="mini" @click="del(scope)">删除</el-button>
        </template>
        </el-table-column>
		</el-table>
		</div>
		<h3>watch侦听属性{{"-"+message.wmes+message.watchmes}}</h3>
		<el-input v-model="message.watchmes"></el-input>
	</div>
</template>
<script>
	export default{
		name:"table1",
		data() {
	      return {
	        tableData: [{
	          date: '2016-05-03',
	          name: '蔡功达1',
	          province: '上海',
	          city: '普陀区',
	          address: '普陀区金沙江路11 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-02',
	          name: '蔡功达2',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路23 弄',
	          zip: 200333
	        }, {
	          date: '2016-05-04',
	          name: '蔡功达3',
	          province: '上海',
	          city: '普陀区',
	          address: '普陀区金沙江路 34弄',
	          zip: 200333
	        }, {
	          date: '2016-05-01',
	          name: '蔡功达4',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路45 弄',
	          zip: 200333
	        }],
	        multipleSelection:[],
	        isdate:false,
	        message:{
	        	mes1:"查看",
	        	watchmes:"我是watch",
	        	wmes:""
	        }
	      }
	    },
	    watch:{
	    	message:{
	    		handler(newValue, oldValue) {
		　　　　　　console.log(newValue)
					this.message.wmes="input内容修改为：";
		　　　　},
		　　　　deep: true
			}
	    },
    	computed:{
    		revermes1:function(){
    			return this.message.mes1.split('').reverse().join('')
    		}
    	},
	    methods:{
	    	handleClick:function(a){
	    		alert(JSON.stringify(a))
	    	},
	    	edit:function(a){
	    		this.$alert('<div class="input-wrap"><input class="einput" value="'+a.address+'"></input></div>', a.name, {
			          dangerouslyUseHTMLString: true,
			          callback: action => {
			          	var newaddress=document.querySelector(".einput").value
			          	a.address=newaddress;
			          	newdate="";
			          }
			        });
	    	},
	    	mulch:function(){
	    		alert(JSON.stringify(this.multipleSelection));
	    	},
	    	handleSelectionChange(val) {
		        this.multipleSelection = val;
		    },
		    del:function(a){
		    	this.tableData.splice([a.$index],1)
		    	console.log(a.$index)
		    },
		    rowclick:function(row, event, column){
		    	console.log(row, event, column)
		    },
		    select:function(a){
		    	console.log(a)
		    }
	    }
	}
</script>
<style>
.el-table{
	margin-top: 10px;
}
	.table{
		border: 1px solid #ddd;
		width: 80%;
		margin:10px auto;
	}
	.input-wrap{
		width: 100%;
		text-align: center;
	}
	.einput{
		padding: 5px;
	}
</style>