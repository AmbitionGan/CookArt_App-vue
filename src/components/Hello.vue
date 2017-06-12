<template>
  <div class="header">
  	<header class="mui-bar mui-bar-nav">
  	    <h1 class="mui-title">{{msg}}</h1>
  	    <router-link class="mui-icon iconfont icon-sousuo_sousuo mui-pull-right" to="/search"></router-link>
  	</header>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '厨艺'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-title{
	color: #ff7043;
}
.icon-sousuo_sousuo{
	color: #483535;
	font-size: 0.35rem;
}
.mui-bar-nav.mui-bar .mui-icon{
	margin-top: 0.08rem;
}
</style>
