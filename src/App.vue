<template>
  <div id="app">
  	<router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active">
            <span class="mui-icon iconfont icon-shouye-copy-copy-copy"></span>
            <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item">
            <span class="mui-icon iconfont icon-fenlei"></span>
            <span class="mui-tab-label">精选</span>
        </a>
        <a class="mui-tab-item">
            <span class="mui-icon iconfont icon-faxian"></span>
            <span class="mui-tab-label">发现</span>
        </a>
        <a class="mui-tab-item">
            <span class="mui-icon iconfont icon-wode"></span>
            <span class="mui-tab-label">我的</span>
        </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html{
	font-size: 15.625vw;
}
.mui-bar-tab .mui-tab-item.mui-active{
	color: #ff7043;
}
</style>
