<template>
	<div>
		<div class="tab">
			<router-link to="/workshow">我的作品</router-link>
			<router-link to="/collection">我的收藏</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped>
.tab{
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.tab div{
	width: 50%;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
}
.tab a{
	display: inline-block;
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	font-size: 0.28rem;
	color: #333;
	box-sizing: border-box;
}
.tab .active{
	border-bottom: 2px solid #ff7043;
}
.router-link-exact-active{
	border-bottom: 2px solid #ff7043;
}
</style>