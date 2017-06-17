<template>
	<div class="login">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color: #ff7043;"></a>
			<h1 class="mui-title" style="color: #ff7043;">登 录</h1>
		</header>
		<div class="bgpic"></div>
		<form action="" method="post">
			<div class="user">
				<i class="iconfont icon-wode"></i>
			  	<input type="text" placeholder="请输入用户名" class="username"/>
			</div>
			<div class="pass">
				<i class="iconfont icon-mima"></i>
			  	<input type="password" placeholder="请输入密码" class="password"/>
			</div>
			<div class="btn">				
			  <input type="button" value="登 录" @click="login"/>				  
			</div>
			<p class="register">没有账号？快速<router-link to="/register">注册</router-link></p>
		</form>
		
  </div>
</template>

<script>
export default {
	name: "login",
	data () {
		return {
			status : ""
		}
	},
	created () {
		this.status =  this.$route.params.status
//		if(!status){
//			document.getElementById("app").style.display = "block"
//		}else{
//			document.getElementById("app").style.display = "none";
//		}
	},
	methods : {
		login () {
			var _this = this;
			var username = document.getElementsByClassName("username")[0].value
			var pwd = document.getElementsByClassName("password")[0].value
			if(username == localStorage.account && pwd == localStorage.password){
				mui.toast('登陆成功,2s后自动跳转到个人页',{ duration:'short', type:'div' });
				setTimeout(function(){
					_this.$router.push({path:'/mine'});
					localStorage.flag = true
				},2000)
			}else{
				mui.toast('账号或密码错误',{ duration:'short', type:'div' }) 
			}
		}
	}
}
</script>

<style scoped>
.login {
	position: relative;
	height: calc(100vh - 1rem);
	overflow: hidden;
	z-index: 1;
}
.bgpic{
	position:fixed;
	height: 100%;
	width: 100%;
	background: url(../../static/images/login/boy.png) no-repeat;
	background-size: 100% 100%;
	z-index:-2;
	background-position-y: -.5rem;
}
.user{
	position:relative;
	margin-bottom: .3rem;
	height:0.8rem;
	width:5.3rem;
}
.user>input{
	padding-left: 1rem;
	height:0.8rem;
	width:5.3rem;
	background: none;
	border:none;
	color: #888585;
	border-bottom:2px solid #888585 ;
	font-size: .34rem;
}
.user>i{
	left: .25rem;
	top: .16rem;
	z-index: 2;
	position: absolute;
	display: inline-block;
	font-size: 0.5rem;
	color: #888585;
	font-weight: bold;
}
.pass{
	position:relative;
	height:0.8rem;
	width:5.3rem;
	margin-bottom: .45rem;
}
.pass>input{
	padding-left: 1rem;
	height:0.8rem;
	width:5.3rem;
	background: none;
	border:none;
	color: #888585;
	border-bottom:2px solid #888585 ;
	font-size: .34rem;
}
.pass>i{
	left: .25rem;
	top: .16rem;
	z-index: 2;
	position: absolute;
	display: inline-block;
	font-size: 0.5rem;
	color: #888585;
	font-weight: bold;
}
.btn{
	margin-bottom: .2rem;
}
.btn>input{
	background: none;
	border: 2px solid #888585;
	color: #888585;
	width:5.3rem;
	height: .8rem;
	border-radius: 8px;
	font-size: .34rem;
}
.login .mui-bar{
	background: white;
}
::-webkit-input-placeholder{
	color:#888585;
}
.login .mui-bar-nav{
	-webkit-box-shadow: none;
    box-shadow: none;
}
.login .register{
	color: #888585;
	font-size: .28rem;
}
.register a{
	text-decoration: underline;
	color: rgb(255, 112, 67);
	margin-left: 5px;
}
.login form{
	position: fixed;
	top: 50%;
	left: 50%;
	margin-left:-2.7rem;
	margin-top:-2.5rem;
	
}
</style>