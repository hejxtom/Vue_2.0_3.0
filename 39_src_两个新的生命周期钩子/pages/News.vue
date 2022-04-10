<template>
	<ul>
		<li :style="{opacity}">欢迎学习Vue</li>
		<li>news001</li>
		<li>news002</li>
		<li>news003</li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		data() {
			return {
				opacity:1
			}
		},
		beforeDestroy() {
			console.log("News组件即将被销毁")
		},
		activated () {
			console.log('New组件被激活')
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		},
		deactivated() {
			console.log('News组件失活了')
			clearInterval(this.timer)
		},
	}
</script>