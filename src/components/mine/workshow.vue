<template>
<div>
	<p v-if="status" class="nothing"></p>
</div>
</template>

<script>
export default {
	name : 'workshow',
	data () {
		return {
			status: true
		}
	}
}
</script>

<style scoped>
.nothing{
	height: 3rem;
	width: 80%;
	margin: 1.6rem auto .8rem;
	background: url(../../../static/images/mine/nothing.png) no-repeat;
	background-size: 100% 100%;
}
</style>