<template>
<div>
	<caritem msgpar=""/>
	<List></List>
</div>
</template>

<script>
    import Caritem from './Caritem.vue';
    import List from './list.vue';
	export default{
		components:{Caritem,List},
		name:"index",
	}
</script>