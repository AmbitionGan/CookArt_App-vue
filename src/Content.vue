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
		overflow: auto;
		background: white;
	}
</style>
