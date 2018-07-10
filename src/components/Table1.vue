<template>
<div>
	<h2>表格</h2>
	<table>
		<tr v-for="(item,index) in records">
			<td>{{item.name}}</td>
			<td>{{item.tel*item.mark}}</td>
			<td @click="item.mark+=1">{{item.mark}}</td>
			<td @click="buy(index)">购买</td>
		</tr>
	</table>
	<h3>总价：{{getTotal.totalprice}}</h3>
</div>
</template>

<script>
	const personsData=[
			{name:"商品",tel:"价格",mark:"数量"},
			{name:"蔡功达",tel:3.5,mark:1},
			{name:"蔡功达",tel:3,mark:1},
			{name:"蔡功达",tel:2.5,mark:1},
	]
	export default {
	  name: 'Table',
	  data () {
	    return {
	      records: personsData,
	    }
	  },
	  computed:{
	  	getTotal:function(){
	  		let totalprice=0;
	  		for (var i = this.records.length - 1; i > 0; i--) {
	  			totalprice+=this.records[i].tel*this.records[i].mark;
	  		}
	  		return{totalprice:totalprice}
	  	}
	  },
	  methods:{
	  	buy:function(index){
	  		this.$nextTick(function(){
	  			alert(JSON.stringify(this.records[index]))
	  		})
	  	}
	  }
	}
</script>
<style scoped>
	table{
		width: 100%;
		border-spacing: 0;
	}
	table,table tr td { border:1px solid #0094ff; }
</style>