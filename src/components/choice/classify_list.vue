<template>
	<div class="classifyList">
		<header class="mui-bar mui-bar-nav posFixed">
			<span class="mui-icon mui-icon-back mui-action-back" style="color: #ff7043;"></span>
	  	    <h1 class="mui-title" style="color: #ff7043;">{{title}}</h1>
	  	    <router-link class="mui-icon iconfont icon-sousuo_sousuo mui-pull-right" to="/search" style='color: #483535;'></router-link>
  		</header>
		<ul class="mui-table-view mui-grid-view mt44">
		    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in foodArr">
		        <router-link :to="{name:'Details',params:{'id':item.id,'imgUrl':item.albums[0],'msg':item.title}}">
		            <img class="mui-media-object" :src="item.albums[0]">
		            <div class="mui-media-body">{{item.title}}</div>
		        </router-link>
		    </li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue' 
import jsonp from "jsonp"
export default {
  name: 'classifyList',
  data(){
  	return {
  		foodId:'',
  		title:'',
  		foodArr:'',
  	}
  },
  created(){
  	this.foodId = this.$route.params.id;
  	this.title = this.$route.params.name;
  	var that = this;
	var sendId = 'http://apis.juhe.cn/cook/index?cid='+this.foodId+'&dtype=&pn=&rn=&format=&key=e9463fe6cbe992ac4ddaabf16ba5345c';
//	var sendId = '../../../static/dyg.json'
//	Vue.axios.get(sendId).then((res)=>{
//		var data = res.data.result.data
//		that.foodArr = data;
//	})
  	jsonp(sendId,null,(err,res)=> {
          if(err){
            console.log('数据无法获取')
          }else{
           var data = res.result.data
  			that.foodArr = data;
          }
      })
  }
}
</script>

<style scoped>
	.classifyList .mui-table-view.mui-grid-view.mt44{
		padding-top:.80rem ;
	}
	.classifyList .mui-table-view-cell.mui-media{
		margin-bottom: .2rem;
	}
	.classifyList .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
		height: 2.6rem;
		margin-bottom: .2rem;
		border-radius: .2rem;
	}
	.classifyList .mui-bar{
		background: white;
	}
</style>