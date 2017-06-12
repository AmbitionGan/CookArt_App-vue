<template>
<div>
	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <form class="search-form" action="/search/result">
        <a class="search-top-btn back">[返回]</a>
        <!--搜索栏文本-->
        <div class="search-txt">
            <!--搜索栏文本 - 文本提示框-->
            <div class="search-hint-box">
                <div class="search-hint-pad focus-ani"></div>
                <i class="iconfont icon-sousuo_sousuo">[搜]</i>
                <span class="search-hint-txt">漫画名|作者</span>

                <div class="search-hint-pad"></div>
            </div>
            <!--搜索栏文本 - 文本输入框-->
            <div class="search-text-box">
                <div class="txt-input-pad"></div>
                <input class="txt-input" type="search" autocapitalize="off" autocorrect="off" name="word">
                <a class="txt-input-clear">[X]</a>
            </div>
        </div>
        <input class="search-top-btn search" type="submit" value="搜索">
    </form>
</div>

</template>

<script>
export default {
  name: 'choiceness',
  data () {
    return {
      msg: '厨艺'
    }
  }
}
</script>

<style>

</style>