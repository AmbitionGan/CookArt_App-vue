<template>
	<div class="details">
		<header class="mui-bar mui-bar-nav posFixed">
	  	    <h1 class="mui-title"></h1>
	  	    <span class="mui-icon mui-icon-back mui-action-back" style="color: #ff7043;"></span>
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
import jsonp from "jsonp"
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
	this.sendUrl = 'http://apis.juhe.cn/cook/queryid?id='+this.getId+'&dtype=&key=e9463fe6cbe992ac4ddaabf16ba5345c';
//	var url='../../../static/dyg.json';
//	Vue.axios.get(url).then((res)=>{
//		var data = res.data.result.data[0];
//		var burden = data.burden.split(';');
//		var steps = data.steps;
//		var arr=[];
//		var len = burden.length;
//		for(var i=0;i<len;i++){
//			var obj={};
//			var data = burden[i].split(",");
//			obj.name=data[0];
//			obj.value = data[1];
//			arr.push(obj);
//		}
//  	that.arr = arr;
//  	that.stepsArr = steps
//	})
	jsonp(this.sendUrl,null,(err,res)=> {
          if(err){
            console.log('数据无法获取')
          }else{
           var data = res.result.data[0];
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
	    	that.arr = arr;
	    	that.stepsArr = steps
          }
       })
  	this.imgUrl = this.$route.params.imgUrl;
  	this.msg = this.$route.params.msg;
  	
  }
}
</script>

<style scoped>
	
.details .mui-bar.mui-bar-nav.posFixed{
	background: rgba(0,0,0,0);
	box-shadow: none;
}
.details .mui-card-content{
	width: 100%;
	height: 4.3rem;
}
.details .mui-card-content>img{
	width: 100%;
	height: 100%;
}
.details .mui-icon.mui-icon-back{
	color: white;
	background: rgba(0,0,0,0.2);
	border-radius: 50%;
	width: 0.6rem;
	height: 0.6rem;
	padding: 0;
	margin: 0;
	text-align: center;
	line-height: 0.6rem;
}
.details .mui-card{
	margin: 0;
	font-size: 0.28rem;
	font-weight: 900;
	color: #000;
}
.details .foodMaterial{
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
	padding:0 0.2rem;
	color: #333 ;
}
ul li span{
	border-bottom: 1px solid #eee;
	padding: 0.2rem 0px;
}
ul li span:nth-of-type(2){
	text-align: center;
	color: #999;
}
.details .mui-table-view-cell:after{
	background-color: none!important;
}
.details .mui-row{
	margin-bottom: 0.4rem;
}
ol li{
	font-size: .24rem;
	padding: 0.2rem;
	color: #333;
}
.foodMaterial p{
	font-size: .28rem;
	color: #000000;
}
.details .mui-bar-nav.mui-bar .mui-icon{
	margin: 0;
	padding: 0;
	margin-top: 0.2rem;
}

</style>