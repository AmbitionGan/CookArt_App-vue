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
.choice_header .mui-bar.mui-bar-nav.posFixed{
	position: fixed;
}
.choice_header .mui-bar{
	background: white;
}
.choice_header .mui-title{
	color: #ff7043;
}
.choice_header .icon-sousuo_sousuo{
	color: #483535;
}

</style>