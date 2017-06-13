<template>
  <div id="footer">
    <!--<nav class="mui-bar mui-bar-tab">
        <router-link to="/" class="mui-tab-item mui-active">
            <span class="mui-icon iconfont icon-shouye-copy-copy-copy"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/choice" class="mui-tab-item">
            <span class="mui-icon iconfont icon-fenlei"></span>
            <span class="mui-tab-label">精选</span>
        </router-link>
        <a class="mui-tab-item">
            <span class="mui-icon iconfont icon-faxian"></span>
            <span class="mui-tab-label">发现</span>
        </a>
        <a class="mui-tab-item">
            <span class="mui-icon iconfont icon-wode"></span>
            <span class="mui-tab-label">我的</span>
        </a>
    </nav>-->
    <router-link to='/'>首页</router-link>
    <router-link to='/choice'>精选</router-link>
    <router-link to='/discovery'>发现</router-link>
    <router-link to='/choice'>我的</router-link>
  </div>
</template>

<script>
export default {
  name: 'footer',
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
html{
	font-size: 15.625vw;
}
.mui-bar-tab .mui-tab-item.mui-active{
	color: #ff7043;
}
#footer{
	display: flex;
	justify-content: center;
	align-items: center;
	height: .96rem;
	width: 100%;
	background: white;
}
.icon {
width: .44rem; height: .44rem;
vertical-align: -0.15em;
fill: currentColor;
overflow: hidden;
}
</style>
