<template>
	<ul class="mui-table-view mui-grid-view">
	    <li class="mui-table-view-cell mui-media mui-col-xs-6">
	        <router-link :to="{name: 'Details',params:{id: '32267',imgUrl: '../../../static/images/hello/4819.jpg_wh300.jpg',msg: '爱心鸡蛋面'}}">
	            <img class="mui-media-object" src="../../../static/images/hello/4819.jpg_wh300.jpg">
	            <div class="mui-media-body">爱心鸡蛋面</div>
	        </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-6">
	        <router-link :to="{name: 'Details',params:{id: '19561',imgUrl: '../../../static/images/hello/9286.jpg_wh300.jpg',msg: '海鲜鳕鱼羹'}}">
	            <img class="mui-media-object" src="../../../static/images/hello/9286.jpg_wh300.jpg">
	            <div class="mui-media-body">海鲜鳕鱼羹</div>
	        </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-6">
	        <router-link :to="{name: 'Details',params:{id: '1046',imgUrl: '../../../static/images/hello/6597.jpg_wh300.jpg',msg: '水果沙拉'}}">
	            <img class="mui-media-object" src="../../../static/images/hello/6597.jpg_wh300.jpg">
	            <div class="mui-media-body">水果沙拉</div>
	        </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-6">
	        <router-link :to="{name: 'Details',params:{id: '8791',imgUrl: '../../../static/images/hello/9025.jpg_wh300.jpg',msg: '红焖大虾'}}">
	            <img class="mui-media-object" src="../../../static/images/hello/9025.jpg_wh300.jpg">
	            <div class="mui-media-body">红焖大虾</div>
	        </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-6">
	        <router-link :to="{name: 'Details',params:{id: '2089',imgUrl: '../../../static/images/hello/3523.jpg_wh300.jpg',msg: '水果冰激凌'}}">
	            <img class="mui-media-object" src="../../../static/images/hello/3523.jpg_wh300.jpg">
	            <div class="mui-media-body">水果冰激凌</div>
	        </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media mui-col-xs-6">
	        <router-link :to="{name: 'Details',params:{id: '27755',imgUrl: '../../../static/images/hello/6502.jpg_wh300.jpg',msg: '清汤面'}}">
	            <img class="mui-media-object" src="../../../static/images/hello/6502.jpg_wh300.jpg">
	            <div class="mui-media-body">清汤面</div>
	        </router-link>
	    </li>
	</ul>
</template>

<script>
export default {
  name: 'imgtable'
}
</script>

<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
	font-size: 0.3rem !important;
	height: 0.3rem !important;
	line-height: 0.3rem !important;
	margin-top: 0.16rem !important;
}
.mui-table-view:after{
	background-color: none !important;
}
</style>