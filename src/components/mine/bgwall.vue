<template>
    <div class="card mui-card">
		<!--内容区-->
		<div class="mui-card-content">
			<p><img src="../../../static/images/mine/ben.png"/></p>
			<img src="../../../static/images/choic_img/tianpin.jpg">
		</div>
		<h2 class="info">{{info}}</h2>
		<h2 class="intro">简介：这个家伙很懒，什么都没有留下~</h2>
		<router-link class="settings" to="/settings">
			<i class="iconfont icon-shezhi"></i>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'bgwall',
  data () {
  	return {
  		info : ""
  	}
  },
  created () {
  	this.info = localStorage.account
  }
}
</script>

<style scoped>
.card.mui-card[data-v-5747921f]{
	margin-bottom: 0;
}
.card.mui-card{
	margin: 0;
	position: relative;
}
.card .mui-card-content img{
	width: 100%;
	height: 4rem;
}
.card .mui-card-content p img{
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-1rem,-1.2rem);
}
.info{
	position: absolute;
	bottom: 15%;
	left: 10%;
	z-index: 3;
	width: 80%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
	font-size: 0.32rem;
	color: #fff;
	text-align: center;
}
.intro{
	position: absolute;
	bottom: 5%;
	left: 10%;
	z-index: 3;
	width: 80%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
	font-size: 0.24rem;
	color: #fff;
}
.card .mui-card-content{
	position: relative;
	width: 100%;
	height: 4rem;
}
.card .mui-card-content p{
	font-size: .32rem;
	color: rgba(256,256,256,.9);
	z-index: 2;
	position: absolute;
	text-align: center;
	line-height: 4rem;
	width: 100%;
	height: 4rem;
	background: rgba(0,0,0,.4);
	margin-bottom: 0;
}
.card.mui-card{
	margin-bottom: .24rem;
}
.settings{
	position: absolute;
	z-index: 3;
	top: 9%;
	right: 7%;
	color: #fff;
}
.settings i{
	font-size: 0.45rem;
}
</style>