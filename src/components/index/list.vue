<template>
	<el-row>
		<el-col :span="12"> 
			<el-card class="box-card">
			  <div slot="header" class="clearfix theader">
			    <span>信息</span>
			  </div>
			  <div v-for="(o,index) in list" :key="index" class="text item">
			    {{o.title}}
			    <el-popover
				  placement="bottom"
				  :title="o.title"
				  width="200"
				  trigger="click"
				  :content="o.info">
				  <el-button style="float: right; padding: 3px 0" type="text" slot="reference">详情</el-button>
				</el-popover>
			  </div>
			</el-card>
    	</el-col>
		<el-col :span="12">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="走马灯" name="first">
			    	<caritem heightinfo="250px"></caritem>
			    </el-tab-pane>
			    <el-tab-pane label="标签页" name="second">
			    	<el-collapse accordion v-for="item in infos">
					  <el-collapse-item :title="item.title">
					    <div>{{item.info1}}</div>
					    <div>{{item.info2}}</div>
					  </el-collapse-item>
					</el-collapse>
			    </el-tab-pane>
			    <el-tab-pane label="角色管理" name="third">
			    <el-row :gutter="20">
			    	<el-col :span="12">
				    	<el-input
						  placeholder="输入关键字进行过滤"
						  v-model="filterText">
						</el-input>
						<el-tree
						  class="filter-tree"
						  :data="data2"
						  :props="defaultProps"
						  default-expand-all
						  :filter-node-method="filterNode"
						  ref="tree2"
						  show-checkbox
						  highlight-current
						  @node-click="getinfo"
						  node-key="id">
						<span class="custom-tree-node" slot-scope="{ node, data }">
				        <span>{{ node.label }}</span>
				        <span>
				          <el-button
				            type="text"
				            size="mini">
				            修改
				          </el-button>
				        </span>
				      	</span>
						</el-tree>
					</el-col>
					<el-col :span="12" style="text-align:center">
						<el-input
						  placeholder="标题"
						  v-model="node.label"
						  clearable>
						</el-input>
						<el-input
						  placeholder="id"
						  v-model="node.id"
						  clearable
						  disabled>
						</el-input>
						<el-button type="primary" @click="change(key)">修改</el-button>
					</el-col>
				</el-row>
			    </el-tab-pane>
			    <el-tab-pane label="其他" name="fourth">
			    	<el-progress :text-inside="true" :stroke-width="18" :percentage="per"></el-progress>
			    	<el-button type="primary" @click="chper(this)" style="margin-top:10px;">加载</el-button>
			    	<br>
			    	<el-progress type="circle" :percentage="cirper"></el-progress>
			    	<el-button type="primary" @click="chcirper(this)" style="margin-top:10px;">加载</el-button>
			    </el-tab-pane>
		  	</el-tabs>
	  	</el-col>
	</el-row>
</template>
<script>
	import caritem from "@/components/index/Caritem";
	export default{
		 watch: {
	      filterText(val) {
	        this.$refs.tree2.filter(val);
	      }
	    },
		data(){
			return{
				list:[
				{title:"不依赖框架",info:"硬盘"},
				{title:"真正支持RTL布局",info:"50G"},
				{title:"过渡效果",info:"内存"},
				{title:"双向控制",info:"适用于有一定数据规模"},
				{title:"视差过渡",info:"数据量持续增长的场景"},
				{title:"丰富的API",info:"QPS每秒访问次数"}
				],
				activeName:"first",
				infos:[
					{title:"一致性 Consistency",
					 info1:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；",
					 info2:"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"},
					 {title:"反馈 Feedback",
					 info1:"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；",
					 info2:"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"},
					 {title:"效率 Efficiency",
					 info1:"简化流程：设计简洁直观的操作流程；",
					 info2:"清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"},
					 {title:"可控 Controllability",
					 info1:"用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；",
					 info2:"结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"},
				],
				filterText: '',
		        data2: [{
		          id: 1,
		          label: '一级 1',
		          children: [{
		            id: 4,
		            label: '二级 1-1',
		            children: [{
		              id: 9,
		              label: '三级 1-1-1'
		            }, {
		              id: 10,
		              label: '三级 1-1-2'
		            }]
		          }]
		        }, {
		          id: 2,
		          label: '一级 2',
		          children: [{
		            id: 5,
		            label: '二级 2-1'
		          }, {
		            id: 6,
		            label: '二级 2-2'
		          }]
		        }, {
		          id: 3,
		          label: '一级 3',
		          children: [{
		            id: 7,
		            label: '二级 3-1'
		          }, {
		            id: 8,
		            label: '二级 3-2'
		          }]
		        }],
		        defaultProps: {
		          children: 'children',
		          label: 'label'
		        },
		        node:{
		        	id:"",
		        	label:"",
		        },
		        key:"a",
		        per:1,
		        cirper:1,
			}
		},
		methods:{
			serdata:function(data,node){
				for(let i=0;i<data.length;i++){
					if (data[i].id==node.id) {
						data[i].label=node.label;
						return;
					};
					if (data[i].children) {
						this.serdata(data[i].children,node);
					}
				}
			},
			setnodeinfo:function(node){
				this.serdata(this.data2,node);
			},
			showinfo:function(a){
				console.log(a)
			},
			handleClick:function(tab, event){
				console.log(tab, event);
			},
			filterNode:function(value, data) {
	        	if (!value) return true;
	        	return data.label.indexOf(value) !== -1;
	        },
	        getinfo:function(a,b,c){
	        	this.$set(this.node,"label",a.label);
	        	this.$set(this.node,"id",a.id);
	        	this.key=b.key;
	        	console.log(this.data);
	        	//this.$refs.tree2.setCheckedNodes()
	        },
	        change:function(a){
	        	var getnode=this.$refs.tree2.getNode(a);
	        	this.setnodeinfo(this.node);
	        	console.log(getnode)
	        	//this.$refs.tree2.setCheckedNodes([this.node]);
	        },
	        chper:function(a){
	        	this.per=0;
	        	console.log(a)
	        	var timer=setInterval(()=>{
	        		this.per+=1;
	        		if (this.per==100) {
	        			clearInterval(timer);
	        		}
	        	},10);
	        },
	        chcirper:function(){
	        	this.cirper=0;
	        	var timer=setInterval(()=>{
	        		this.cirper+=1;
	        		console.log(this.cirper)
	        		if (this.cirper==100) {
	        			clearInterval(timer);
	        		}
	        	},10);
	        }
		},
		components:{caritem}
	}
</script>
<style scoped>
	.text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
	.box-card{
		padding:0;
	}
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .theader{
  	border: 1px solid #ddd;
  	padding:10px;
  }
  .el-tabs{
  	margin-top: 10px;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .el-input{
  	margin-bottom: 10px;
  }
</style>