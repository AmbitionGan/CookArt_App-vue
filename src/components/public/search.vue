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
                <li class="item">
            <a class="link" href="/comic/index/id/518333">
                狐妖小红娘            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/519855">
                王牌御史            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/511915">
                中国惊奇先生            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/535102">
                生死回放（死亡回放）            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/552180">
                绝地天通·狐            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/531475">
                妹子与科学            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/535695">
                赤猫传            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/534925">
                古校夜游神            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/551196">
                皇帝的独生女            </a>
        </li>
                <li class="item">
            <a class="link" href="/comic/index/id/530955">
                戒魔人            </a>
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
  		searchlist : []
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
		var url = "/cook/query.php?menu="+ keyword +"&key=d6973f3fa9fcdddc05886030da862f26";
//		Vue.axios.get(url).then((res)=>{
//		   	this.searchlist = res.data.result.data;
//	       	console.log(this.searchlist)
//	        bus.$emit("searchres",this.searchlist)
//		    
//		})
// 		jsonp(url,null,(err,data)=> {
//        if(err){
//          console.log('数据无法获取')
//        }else{
//          console.log(data)
//        }
//      })
		Vue.axios.get("../../../static/hongshaorou.json").then((res)=> {
	        this.searchlist = res.data.result.data;
	        //console.log(this.searchlist)
	        bus.$emit("searchres",this.searchlist)
	   })
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
	color: #fff;
}
.search-form{
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    height: 0.88rem;
    background-color: #ff9a6a;
    font-size: 0.28rem;
}
.mui-input-row{
	width: 70%;
}
input[type=button]{
	font-size: 0.28rem;
	color: #fff;
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
</style>