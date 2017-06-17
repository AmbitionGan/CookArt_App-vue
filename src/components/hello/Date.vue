<template>
	<div class="date">
		<section>
			<fieldset id="field">
				<legend>
					<i class="iconfont icon-baotang"></i>
					<span>午餐汇</span>
				</legend>
			</fieldset>
		</section>
		<p>{{date}}</p>
	</div>
</template>

<script>
export default {
  name: 'date',
  data () {
  	return {
  		date : ""
  	}
  },
  created () {
  	this.getTime();
  },
  methods : {
  	getTime(){
  		var myDate = new Date();
  		var weeks = ["日","一","二","三","四","五","六"];
  		var getWeek = "星期" + weeks[myDate.getDay()];
  		this.date = myDate.getMonth() + 1 + "月" + myDate.getDate() + "日" + " " + getWeek;
  	}
  }
}
</script>

<style scoped>
	#field{
		border: 0;
		border-top: 1px solid #3d0d0d;
		width: 40%;
		margin: 0 auto;
		padding: 0;
	}
	#field legend{
		text-align: center;
	}
	#field legend i{
		font-size: 0.35rem;
	}
	#field legend span{
		font-size: 0.28rem;
		color: #3d0d0d;
		margin-left: -3px;
	}
	section{
		padding: 5px 0;
		border-bottom: 1px solid #ccc;
	}
	.date p{
		text-align: center;
		font-size: 0.2rem;
		padding-top: 5px;
		margin-bottom: 0;
	}
</style>