<template>
	<div class="photo">
		<div class="mui-card">
			<!--内容区-->
			<div class="mui-card-content">
				<router-link :to="{name:'classifyList',params:{'id':91,'name':'烧烤'}}">
					<p>闺 蜜 温 馨 下 午 茶</p>
					<img src="../../../static/images/choic_img/roulei.jpg">
				</router-link>
			</div>
		</div>
		<div class="mui-card">
			<!--内容区-->
			<div class="mui-card-content">
				<router-link :to="{name:'classifyList',params:{'id':22,'name':'草莓'}}">
					<p>闺 蜜 温 馨 下 午 茶</p>
					<img src="../../../static/images/choic_img/shuiguo.jpg">
				</router-link>
			</div>
		</div>
		<div class="mui-card">
			<!--内容区-->
			<div class="mui-card-content">
				<router-link :to="{name:'classifyList',params:{'id':62,'name':'海鲜'}}">
					<p>闺 蜜 温 馨 下 午 茶</p>
					<img src="../../../static/images/choic_img/tang.jpg">
				</router-link>	
			</div>
		</div>
		
		<div class="mui-card">
			<!--内容区-->
			<div class="mui-card-content">
				<router-link :to="{name:'classifyList',params:{'id':66,'name':'面食'}}">
					<p>闺 蜜 温 馨 下 午 茶</p>
					<img src="../../../static/images/choic_img/zaliang.jpg">
				</router-link>
			</div>
		</div>
		<div class="mui-card">
			<!--内容区-->
			<div class="mui-card-content">
				<router-link :to="{name:'classifyList',params:{'id':73,'name':'蛋糕'}}">
					<p>闺 蜜 温 馨 下 午 茶</p>
					<img src="../../../static/images/choic_img/xiawucha.jpg">
				</router-link>
			</div>
		</div>
		<div class="mui-card">
			<!--内容区-->
			<div class="mui-card-content">
				<router-link :to="{name:'classifyList',params:{'id':76,'name':'面包'}}">
					<p>闺 蜜 温 馨 下 午 茶</p>
					<img src="../../../static/images/choic_img/tianpin.jpg">
				</router-link>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
  name: 'photo',
}
</script>

<style scoped>
.mui-card-content img{
	width: 100%;
	height: 3.5rem;
}
.mui-card-content{
	position: relative;
	width: 100%;
	height: 3.5rem;
}
.mui-card-content p{
	font-size: .32rem;
	color: rgba(256,256,256,.9);
	z-index: 2;
	position: absolute;
	text-align: center;
	line-height: 3.5rem;
	width: 100%;
	height: 3.5rem;
	background: rgba(0,0,0,.4);
}
.mui-card{
	margin-bottom: .24rem;
}
</style>