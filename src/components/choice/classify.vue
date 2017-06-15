<template>
	<div class="classify">
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-yingtao"></use>
					</svg>
			        <div class="mui-media-body">水果</div>
			    </a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-Soup"></use>
					</svg>
			        <div class="mui-media-body">汤羹</div>
			    </a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-canju"></use>
					</svg>
			        <div class="mui-media-body">料理</div>
			    </a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-jianbing"></use>
					</svg>
			        <div class="mui-media-body">杂粮</div>
			    </a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-yinliao"></use>
					</svg>
			        <div class="mui-media-body">饮品</div>
			    </a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-kaoji"></use>
					</svg>
			        <div class="mui-media-body">荤菜</div>
			    </a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-zhaquanbing"></use>
					</svg>
			        <div class="mui-media-body">甜点</div>
			    </a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
			    <a href="#">
			    	<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-songbing"></use>
					</svg>
			        <div class="mui-media-body">辅食</div>
			    </a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'classify',
}
</script>

<style scoped>
.mui-table-view.mui-grid-view.mui-grid-9{
	margin-top: .88rem;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: none;
}
.classify .mui-grid-view.mui-grid-9{
	border: none;
	background-color: white;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
	font-size: 0.3rem;
	height: 0.3rem;
	line-height: 0.3rem;
	margin-top: 0.16rem;
}
</style>