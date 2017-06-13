<template>
	<div class="choice">
		<Classify></Classify>
		<ChoiceHeader></ChoiceHeader>
		<Photo></Photo>
	</div>
</template>

<script>
import Classify from './classify'
import ChoiceHeader from './choice_header'
import Photo from './photo'
export default {
  name: 'choice',
  components: { 
  	Classify,ChoiceHeader,Photo
  }
}
</script>

<style scoped>
	

</style>