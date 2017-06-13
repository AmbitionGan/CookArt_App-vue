<template>
	<div class="choice_header">
		<header class="mui-bar mui-bar-nav posFixed">
	  	    <h1 class="mui-title">精 选</h1>
	  	    <router-link class="mui-icon iconfont icon-sousuo_sousuo mui-pull-right" to="/search"></router-link>
  		</header>
	</div>
</template>

<script>
export default {
  name: 'choice_header',
}
</script>

<style scoped>
.mui-bar.mui-bar-nav.posFixed{
	position: fixed;
}
.mui-bar{
	background: white;
}
.mui-title{
	color: #ff7043;
}
.icon-sousuo_sousuo{
	color: #483535;
}

</style>