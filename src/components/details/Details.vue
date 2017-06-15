<template>
	<div class="details">
		<header class="mui-bar mui-bar-nav posFixed">
	  	    <h1 class="mui-title"></h1>
	  	    <span class="mui-icon mui-icon-back mui-action-back"></span>
  		</header>
  		<div class="mui-card">
			<div class="mui-card-content" >
				<img :src="imgUrl">
			</div>
			<div class="mui-card-footer">{{msg}}</div>
		</div>
		<div class="foodMaterial">
			<div>
				<p> 食 材 </p>
				<ul class="mui-row">
					<li class="mui-col-xs-6 " v-for="item in arr"><span class="mui-col-xs-8" > {{item.name}} </span><span class="mui-col-xs-4 "> {{item.value}} </span></li>
				</ul>
			</div>
			<div>
				<p> 做 法 </p>
				<ol class="mui-row" >
					<li v-for="list in stepsArr">{{list.step}}</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue' 

export default {
  name: 'details',
  data(){
  	return {
  		getId:'',
  		imgUrl:'',
  		msg:'',
  		sendUrl:'',
  		arr:[],
  		stepsArr:[]
  	}
  },
  created(){
  	var that = this;
  	this.getId = this.$route.params.id;
//	this.sendUrl = '/cook/queryid?id='+this.getId+'&dtype=&key=e9463fe6cbe992ac4ddaabf16ba5345c';
	var url='../../../static/dyg.json';
	Vue.axios.get(url).then((res)=>{
		var data = res.data.result.data[0];
		var burden = data.burden.split(';');
  		var steps = data.steps;
  		var arr=[];
  		var len = burden.length;
  		for(var i=0;i<len;i++){
  			var obj={};
  			var data = burden[i].split(",");
  			obj.name=data[0];
			obj.value = data[1];
			arr.push(obj);
  		}
    	this.arr = arr;
    	this.stepsArr = steps
	})
  	this.imgUrl = this.$route.params.imgUrl;
  	this.msg = this.$route.params.msg;
  	
  },
  beforeMount(){
  	document.querySelector('#app').style.display='none';
  },
  destroyed(){
  	document.querySelector('#app').style.display='block';
  }
}
</script>

<style scoped>
.mui-bar.mui-bar-nav.posFixed{
	background: rgba(0,0,0,0);
	box-shadow: none;
}
.mui-card-content>img{
	width: 100%;
}
.mui-icon.mui-icon-back{
	color: white;
}
.mui-card{
	margin: 0;
	font-size: 0.28rem;
	font-weight: 900;
	color: #000;
}
.foodMaterial{
	margin-top:.2rem ;
}
.foodMaterial p{
	width: 100%;
	height: .4rem;
	font-size: .32rem;
	font-weight: bold;
	text-align: center;
}
ul li{
	font-size: .24rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding:0 10px;
	color: #333 ;
}
ul li span{
	border-bottom: 1px solid #eee;
	padding: 10px 0px;
}
ul li span:nth-of-type(2){
	text-align: center;
	color: #999;
}
.mui-table-view-cell:after{
	background-color: none!important;
}
.mui-row{
	margin-bottom: 20px;
}
ol li{
	font-size: .24rem;
	padding: 10px;
	color: #333;
}
.foodMaterial p{
	font-size: .28rem;
	color: #000000;
}


</style>