<template>
	<div class="discovery">
		<discoveryHeader></discoveryHeader>
		<discoveryPhotoList></discoveryPhotoList>
	</div>
</template>

<script>
import discoveryHeader from './discovery_header'
import discoveryPhotoList from './discovery_photoList'
export default {
  name: 'discovery',
  components: { 
  	discoveryHeader,discoveryPhotoList
  }
}
</script>

<style scoped>
	

</style>