<template>
	<div class="discoveryPhoto">
		<div class="mui-card" v-for="item in food">
			<router-link :to="{name:'Details',params:{'id':item.id,'imgUrl':item.img,'msg':item.msg}}">
				<div class="mui-card-header mui-card-media">
					<img src="../../../static/images/discovery_img/joe.jpg" />
					<div class="mui-media-body">
						Hello World!
						<p>发表于 2017-06-11 15:30</p>
					</div>
				</div>
				<!--内容区-->
				<div class="mui-card-content" >
					<img :src="item.img">
				</div>
			</router-link>
			<div class="mui-card-footer mui-row">
				<div>
					{{item.msg}}
				</div>
				<div>
					<span class=" iconfont icon-dianzandian"  @click="changeXinColor"></span>
					<span class=" iconfont icon-qipao1" @click="changeQiColor"></span>
					<span class=" iconfont icon-zhuanfa" @click="changeZhuanColor"></span>
				</div>
				
			</div>
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
	  			img:'../../../static/images/discovery_img/jiaozi.jpg',
	  			msg:'面食经典 -- 饺子',
	  			id:33448
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/shousi.jpg',
	  			msg:'日式风情 -- 刺身寿司',
	  			id:41648
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
	  			img:'../../../static/images/discovery_img/shuiguo.jpg',
	  			msg:'水果风情 -- 水果沙拉',
	  			id:19960
	  		},
	  		{
	  			img:'../../../static/images/discovery_img/zhusunjinhuang.jpg',
	  			msg:'广东特色 -- 煲汤',
	  			id:6674
	  		}
  		],
  	}
  	
  },
  methods:{
  	changeXinColor(event){
  		if(event.target.style.color!='red'){
  			event.target.style.color='red';
  		}else{
  			event.target.style.color='#ccc';
  		}

  	},
  	changeQiColor(event){
  		if(event.target.style.color!='red'){
  			event.target.style.color='red';
  		}else{
  			event.target.style.color='#ccc';
  		}
  	},
  	changeZhuanColor(event){
  		if(event.target.style.color!='red'){
  			event.target.style.color='red';
  		}else{
  			event.target.style.color='#ccc';
  		}
  	}
  }
}
</script>

<style scoped>
.discoveryPhoto .mui-card-content img{
	width: 100%;
	height: 4rem;
}
.discoveryPhoto .mui-card-content{
	position: relative;
	width: 100%;
	height: 4rem;
}
.discoveryPhoto{
	padding-top: .88rem;
}
.discoveryPhoto .mui-card{
	margin: 0;
	margin-bottom: .24rem;
	font-size: .28rem;
}
.discoveryPhoto .mui-card-footer{
	min-height: .88rem;
    padding:.2rem .3rem;
}
.discoveryPhoto .mui-card-footer div{
	width: 50%;
	display: flex;
	align-items: center;
}
.discoveryPhoto .mui-card-footer div:nth-of-type(2){
	justify-content: flex-end;
}
.discoveryPhoto .mui-card-footer div span{
	margin-right: 20px;
	color: #ccc;
}
.discoveryPhoto .mui-card-footer span:nth-of-type(1){
	font-size: .36rem;
}
.discoveryPhoto .mui-card-footer span:nth-of-type(2){
	font-size: .40rem;
}
.discoveryPhoto .mui-card-footer span:nth-of-type(3){
	font-size: .40rem;
	margin-top: -.16rem;
}
.discoveryPhoto .mui-card-footer .changeColor{
	color: orangered;
}
.discoveryPhoto .mui-card-header.mui-card-media .mui-media-body {
    font-size: .28rem;
    font-weight: 500;
    line-height: .34rem;
    margin-bottom: 0;
    margin-left: .88rem;
    color: #333;
 }
.discoveryPhoto .mui-card-header>img:first-child {
    font-size: 0;
    line-height: 0;
    float: left;
    width: .68rem;
    height: .68rem;
}
.discoveryPhoto .mui-card-header.mui-card-media .mui-media-body p{
	font-size: .26rem;
}
</style>