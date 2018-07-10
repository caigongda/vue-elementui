<template>
	<div>
		<el-button type="warning" size="mini" @click="rout">路由参数：{{this.$route.params.id}}</el-button>
		<br>
		<el-row>
		<el-col :span="12">
		<el-radio-group v-model="labelPosition" size="small">
		  <el-radio-button label="left">左对齐</el-radio-button>
		  <el-radio-button label="right">右对齐</el-radio-button>
		  <el-radio-button label="top">顶部对齐</el-radio-button>
		</el-radio-group>
		<el-form :label-position="labelPosition" :rules="rules2" ref="form1" :model="form" label-width="180px">
			<el-form-item label="姓名">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="选择框">
			    <el-select v-model="form.region" placeholder="请选择活动区域">
			      <el-option label="上海" value="shanghai"></el-option>
			      <el-option label="北京" value="beijing"></el-option>
			    </el-select>
		    </el-form-item>
		    <el-form-item label="时间">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="11">
			      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			    </el-col>
		    </el-form-item>
		    <el-form-item label="开关">
		    	<el-switch v-model="form.delivery"></el-switch>
		    	<span v-if="form.delivery">开</span><span v-else>关</span>
		    </el-form-item>
			<el-form-item label="复选框">
			    <el-checkbox-group v-model="form.type">
			      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
			      <el-checkbox label="地推活动" name="type"></el-checkbox>
			      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
			      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			    </el-checkbox-group>
			    <span>{{form.type}}</span>
		  	</el-form-item>
		  	<el-form-item label="单选框">
			    <el-radio-group v-model="form.resource">
			      <el-radio label="线上品牌商赞助"></el-radio>
			      <el-radio label="线下场地免费"></el-radio>
			    </el-radio-group>
			    <span>{{form.resource}}</span>
		  	</el-form-item>
		  	<el-form-item label="多行文本框">
		    	<el-input type="textarea" v-model="form.desc"></el-input>
		  	</el-form-item>
		  	<el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="checkPass">
			    <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="年龄" prop="age">
			    <el-input v-model.number="form.age"></el-input>
			  </el-form-item>
		  	<el-form-item>
			    <el-button type="primary" @click="onSubmit">提交</el-button>
			    <el-button @click="reset">取消</el-button>
		  	</el-form-item>
		</el-form>
		</el-col>
		<el-col :span="12">
			<el-upload
			  class="upload-demo"
			  ref="upload"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :file-list="fileList"
			  :auto-upload="false">
			  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
			  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
			  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		</el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		name:"form",
		data(){
			var checkAge = (rule, value, callback) => {
		        if (!value) {
		          return callback(new Error('年龄不能为空'));
		        }
		        setTimeout(() => {
		          if (!Number.isInteger(value)) {
		            callback(new Error('请输入数字值'));
		          } else {
		            if (value < 18) {
		              callback(new Error('必须年满18岁'));
		            } else {
		              callback();
		            }
		          }
		        }, 1000);
		      };
      		var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.form.checkPass !== '') {
		            this.$refs.form.validateField('checkPass');
		          }
		          callback();
		        }
		      };
	        var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.form.pass) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
	        };
			return{
				labelPosition:'right',
				form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: '',
		          pass: '',
		          checkPass: '',
		          age: '',

		        },
		        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
		        rules2: {
		          pass: [
		            { validator: validatePass, trigger: 'blur' }
		          ],
		          checkPass: [
		            { validator: validatePass2, trigger: 'blur' }
		          ],
		          age: [
		            { validator: checkAge, trigger: 'blur' }
		          ]
		        }
			}
		},
		methods:{
			rout:function(){
				//this.$router.go(-1)  后退一步同window.history
				//this.$router.push('/')  //跳转到某一路由
				console.log(this.$router)
			},
			onSubmit:function(){
				alert(JSON.stringify(this.form))
			},
			reset:function(){
				console.log(this.$refs)
				this.$refs.form1.resetFields();
			},
			submitUpload() {
	        	this.$refs.upload.submit();
	        },
	        handleRemove(file, fileList) {
	        	console.log(file, fileList);
	        },
	        handlePreview(file) {
	        	console.log(file);
	        }
		}
	}
</script>
<style>
	.el-radio-group{
		margin:10px 180px;
	}
</style>