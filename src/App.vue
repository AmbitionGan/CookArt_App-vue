<template>
  <div id="index">
    <nav class="mui-bar mui-bar-tab backColor" >
    	<div class="mui-tab-item mui-active">
    		<router-link to="/" >
            <span class="mui-icon iconfont icon-shouye-copy-copy-copy"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
    	</div>
      <div class="mui-tab-item">
    		<router-link to="/choice" >
            <span class="mui-icon iconfont icon-fenlei"></span>
            <span class="mui-tab-label">精选</span>
        </router-link>
    	</div>  
      <div class="mui-tab-item">
    		 <router-link to="/discovery">
            <span class="mui-icon iconfont icon-faxian"></span>
            <span class="mui-tab-label">发现</span>
        </router-link>
    	</div>  
      <div class="mui-tab-item">
    		<router-link to="/login" class="login">
            <span class="mui-icon iconfont icon-wode"></span>
            <span class="mui-tab-label">我的</span>
        </router-link>
    	</div> 
        
    </nav>
  </div>
</template>

<script>
export default {
	name: 'index',
}
mui('body').on('tap','a',function(){document.location.href=this.href;});
</script>

<style>

.mui-bar .mui-title{
	right: 0.8rem;
	left: 0.8rem;
}
  .mui-title{
	font-size: 0.34rem;
	line-height: 0.88rem;
}
  .mui-tab-item{
	padding-top: 5px;
}
  .mui-tab-item a{
	color: #888585;
}
  .router-link-exact-active{
	color: #ff7043!important;
}
  .mui-bar-tab .mui-tab-item{
	height: 1rem;
}
  .mui-bar-tab .mui-tab-item .mui-icon{
	width: 0.48rem;
	height: 0.48rem;
}
  .mui-bar-tab .mui-tab-item .mui-icon~.mui-tab-label{
	font-size: 0.22rem;
}
 .mui-bar{
	background-color: #fff;
	height: 0.88rem;
	padding-right: 0.2rem;
	padding-left: 0.2rem;
}
#index{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.mui-bar-nav.mui-bar .mui-icon{
	margin-right: -0.2rem;
  margin-left: -0.2rem;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
}
.mui-bar .mui-icon{
	font-size: 0.4rem;
	padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}
.icon {
	width: .44rem; height: .44rem;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
