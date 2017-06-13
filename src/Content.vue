<template>
  <div id="Content">
  	<router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Content'
}
</script>

<style scoped>
	#Content{
		height:calc(100vh - 0.96rem);
		overflow: auto;
		background: white;
	}
</style>
