<template>
  <div id="app">
    <navitem/>
    <router-view/>
  </div>
</template>

<script>
import navitem from '@/components/index/navitem'
export default {
  components:{navitem:navitem},
  name: 'App',
}
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin:0;
}
</style>
