<template>
<section class="search-top-bar">
    <form class="search-form" action="/">
        <a class="mui-action-back mui-icon mui-icon-back"></a>
        <!--搜索栏文本-->
        <div class="mui-input-row mui-icon">
            <input type="search" class="mui-input-clear searchVal" placeholder="">
        </div>
        <input class="search-top-btn search" type="button" value="搜索" @click="getData">
    </form>
    <searchlist></searchlist>
    <ul class="search-hot-list">
        <li class="item" v-for="item in searchFood" >
        	<router-link :to="{name:'classifyList',params:{'id':item.id,'name':item.name}}" >
            <a class="link" href="/comic/index/id/518333">
                	{{item.name}}  
            </a>
            </router-link>
        </li>
    </ul>
</section>

</template>

<script>
import Vue from 'vue'
import jsonp from "jsonp"
import searchlist from "./searchlist"
import bus from "../../assets/eventBus";
export default {
  name: 'search',
  data () {
  	return {
  		searchlist : [],
  		searchFood:[
  			{
  				name:'新鲜水果沙拉',
  				id:'87',
  				xlinkHref:'#icon-yingtao'
  			},
  			{
  				name:'广式煲汤',
  				id:'8',
  				xlinkHref:'#icon-Soup'
  			},
  			{ 
  				name:'日本料理',
  				id:'17',
  				xlinkHref:'#icon-canju'
  			},
  			{
  				name:'杂 粮',
  				id:'68',
  				xlinkHref:'#icon-jianbing'
  			},
  			{
  				name:'饮 品',
  				id:'88',
  				xlinkHref:'#icon-yinliao'
  			},
  			{
  				name:'荤 菜',
  				id:'1',
  				xlinkHref:'#icon-kaoji'
  			},
  			{
  				name:'法式甜点',
  				id:'86',
  				xlinkHref:'#icon-zhaquanbing'
  			},
  			{
  				name:'婴儿的辅食',
  				id:'77',
  				xlinkHref:'#icon-songbing'
  			},
  		]
  	}
  },
  beforeMount () {
  	document.getElementById("app").style.display = "none";
  },
  destroyed () {
  	document.getElementById("app").style.display = "block"
  },
  methods : {
  	getData(){
		var keyword = document.getElementsByClassName("searchVal")[0].value;
		var url = "http://apis.juhe.cn/cook/query.php?menu="+ keyword +"&key=d6973f3fa9fcdddc05886030da862f26&callback=JSON_CALLBACK";
//		Vue.axios.get(url).then((res)=>{
//		   	this.searchlist = res.data.result.data;
//	       	console.log(this.searchlist)
//	        bus.$emit("searchres",this.searchlist)
//		    
//		})
   		jsonp(url,null,(err,res)=> {
          if(err){
            console.log('数据无法获取')
            
          }else{
            this.searchlist = res.result.data;
	        bus.$emit("searchres",this.searchlist)
          }
        })
//		Vue.axios.get(url).then((res)=> {
//	        this.searchlist = res.data.result.data;
//	        //console.log(this.searchlist)
//	        bus.$emit("searchres",this.searchlist)
//	   })
  	}
 },
 components : {
 	searchlist
 }
}
</script>

<style scoped>
.mui-icon-back{
	margin: 0 0.2rem 0 0.1rem;
	color: #ff9a6a;
}
.search-form{
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    height: 0.88rem;
    background-color: #fff;
    font-size: 0.28rem;
    box-shadow: 0 1px 6px #ccc;
}
.mui-input-row{
	width: 70%;
}
input[type=button]{
	font-size: 0.28rem;
	color: #ff9a6a;
	margin-left: 0.2rem;
}
input[type=search]{
	margin-bottom: 0;
	height: 0.6rem;
	color: #333;
	font-size: 0.26rem;
	line-height: 0.42rem;
	padding: 0.2rem 0.3rem;
}
.mui-search input[type=search]{
	padding-left: 0.6rem;
}
.mui-search.mui-active:before{
	line-height: 1;
	color: #333;
	border-radius: 3px;
}
.mui-search:before{
	margin-top: -10px;
}
.search-top-btn back{
	text-indent: -2500rem;
    font-size: 0;
    padding: 0.105rem;
    border-radius: 0.1rem;
    overflow: hidden;
    text-indent: -2000rem;
}
.search-top-bar .search-txt .search-hint-box{
    display: flex;
    align-items: center;
    width: 100%;
}
.mui-input-clear{
	background: #fff;
}
.search-top-btn{
	background: none;
	border: 0;
}
.search-hot-list{
	padding: 0.255rem 0.17rem;
    font-size: 0;
}
.search-hot-list .item{
	display: inline-block;
    margin-bottom: 0.17rem;
    margin-right: 0.17rem;
}
.search-hot-list .link{
	display: inline-block;
    padding: 0.15rem 0.34rem;
    border-radius: 1.25rem;
    background-color: white;
    border: 1px solid #C5C5C5;
    font-size: 0.28rem;
    color: #535252;
}
.mui-input-clear[data-v-444c267a]{
	border:1px solid #ff9a6a;
}
.hotsearch[data-v-0e91caf8]{
	border: none;
}
</style>