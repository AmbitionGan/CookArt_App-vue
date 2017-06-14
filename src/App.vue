<template>
  <div id="app">
    <nav class="mui-bar mui-bar-tab">
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
    		<router-link to="/mine">
            <span class="mui-icon iconfont icon-wode"></span>
            <span class="mui-tab-label">我的</span>
        </router-link>
    	</div> 
        
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
mui('body').on('tap','a',function(){document.location.href=this.href;});
</script>

<style>
html{
	font-size: 15.625vw;
}
body{
	background: #fff;
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

.mui-bar{
	background-color: #fff;
}
#app{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 100%;
	background: white;
}
.mui-bar .mui-icon{
	font-size: 0.4rem;
}
.icon {
	width: .44rem; height: .44rem;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
