<template>
  <div>
    <h2>{{title}}</h2>
    <ul>
        <li v-for="item in list"><router-link :to="item.router">{{item.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      list:[
          {name:'表格',router:'/table'},
          {name:'单页',router:'/spaindex'},
      ],
      title:"项目列表",
    }
  },
  methods:{
    send:function(e){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  text-align: center;
  padding-left: 0;
}
li {
  border:1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>
