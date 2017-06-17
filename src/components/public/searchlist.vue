<template>
<div >
	<ul class="mui-table-view">
	    <li class="mui-table-view-cell mui-media" v-for="item in list">
	        <router-link :to="{name:'Details',params:{'id':item.id,'imgUrl':item.albums[0],'msg':item.title}}">
	            <img class="mui-media-object mui-pull-left" :src="item.albums[0]">
	            <div class="mui-media-body">
	                {{item.title}}
	                <p class="mui-ellipsis">{{item.imtro}}</p>
	            </div>
	        </router-link>
	    </li>
	</ul>
	<div class="hotsearch">
		<i class="guai"></i>
		<i class="da"></i>
	</div>
</div>

</template>

<script>
import bus from "../../assets/eventBus";
export default {
  name: 'searchlist',
  data () {
  	return {
  		list : []
  	}
  },
  created () {
	bus.$on("searchres",(res)=>{
		this.list = res
		//console.log(this.list)
	})
  }
}
</script>

<style scoped>
.hotsearch{
	height: 1.1rem;
}
.hotsearch i{
	display: inline-block;
	background: url(../../../static/images/search/sc_img_search.png) no-repeat;
	background-size: 2rem 2rem;
	height: 1rem;
}
.hotsearch .guai{
	width: 1.1rem;
	background-position: 0.3rem -0.65rem;
}
.hotsearch .da{
	width: 2rem;
	background-position: 0rem 0.2rem;
}
</style>