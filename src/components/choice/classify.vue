<template>
	<div class="classify">
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" v-for="item in classifyIcon">
			    <router-link :to="{name:'classifyList',params:{'id':item.id,'name':item.name}}" >
			    	<svg class="icon" aria-hidden="true">
						<use :xlink:href="item.xlinkHref"></use>
					</svg>
			        <div class="mui-media-body">{{item.name}}</div>
			    </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'classify',
  data(){
  	return {
  		classifyIcon:[
  			{
  				name:'水 果',
  				id:'87',
  				xlinkHref:'#icon-yingtao'
  			},
  			{
  				name:'汤 羹',
  				id:'8',
  				xlinkHref:'#icon-Soup'
  			},
  			{ 
  				name:'料 理',
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
  				name:'甜 点',
  				id:'86',
  				xlinkHref:'#icon-zhaquanbing'
  			},
  			{
  				name:'辅 食',
  				id:'77',
  				xlinkHref:'#icon-songbing'
  			},
  		]
  	}
  }
}
</script>

<style scoped>
.classify .mui-table-view.mui-grid-view.mui-grid-9{
	margin-top: .88rem;
}
.classify .mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: none;
}
.classify .mui-grid-view.mui-grid-9{
	border: none;
	background-color: white;
}
.classify .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
	font-size: 0.3rem;
	height: 0.3rem;
	line-height: 0.3rem;
	margin-top: 0.16rem;
}
</style>