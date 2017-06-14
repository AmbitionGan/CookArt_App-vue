<template>
	<div class="content">
		<header class="mui-bar mui-bar-nav">
	  	<h1 class="mui-title">{{msg}}</h1>
	  	<router-link class="mui-icon iconfont icon-sousuo_sousuo mui-pull-right" to="/search"></router-link>
	 </header>
			<gallery></gallery>
			<date></date>
			<imgtable></imgtable>
	</div>
</template>

<script>
import Gallery from "./hello/Gallery"
import Date from "./hello/Date"
import Imgtable from "./hello/Imgtable"
export default {
  name: 'hello',
  data () {
    return {
      msg: '厨 艺'
    }
  },
  components : {
  	Gallery,
  	Date,
  	Imgtable
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
.content{
	height: calc(100vh - 50px);
	overflow: auto;
}
.mui-table-view:before{
	background-color: #fff;
}
</style>
