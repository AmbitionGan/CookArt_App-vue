<template>
	<div class="discoveryPhoto">
		<div class="mui-card" v-for="item in food">
			<router-link :to="{name:'Details',params:{'id':item.id,'imgUrl':item.img,'msg':item.msg}}">
				<!--内容区-->
				<div class="mui-card-content" >
					<img :src="item.img">
				</div>
				<div class="mui-card-footer">{{item.msg}}</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
  name: 'photo',
  data(){
  	return {
  		food:[
  			{
  				img:'../../../static/images/discovery_img/dongyinggong.jpg',
  				msg:'泰式风情 -- 冬阴功',
  				id:6208
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/galifan.jpg',
	  			msg:'印度风情 -- 咖喱饭',
	  			id:20950
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/zhishi.jpg',
	  			msg:'烘焙风情 -- 芝士蛋糕',
	  			id:4337
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/yinliao.jpg',
	  			msg:'夏日风情 -- 柠檬冰饮',
	  			id:21590
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/huoguo.jpg',
	  			msg:'四川风味 -- 麻辣火锅',
	  			id:24141
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/jiaozi.jpg',
	  			msg:'面食经典 -- 饺子',
	  			id:33448
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/pizza.jpg',
	  			msg:'意式风情 -- 披萨',
	  			id:30035
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/shousi.jpg',
	  			msg:'日式风情 -- 刺身寿司',
	  			id:41648
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/shuiguo.jpg',
	  			msg:'水果风情 -- 水果沙拉',
	  			id:19960
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/zhusunjinhuang.jpg',
	  			msg:'广东特色 -- 煲汤',
	  			id:6674
	  		}
  		]
  		
  	}
  }
}
</script>

<style scoped>
.mui-card-content img{
	width: 100%;
	height: 4rem;
}
.mui-card-content{
	position: relative;
	width: 100%;
	height: 4rem;
}
.discoveryPhoto{
	margin-top: .88rem;
}
.mui-card{
	margin: 0;
	margin-bottom: .24rem;
}
</style>