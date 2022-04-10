<template>
	<ul>
		<li>news001</li>
		<li>news002</li>
		<li>news003</li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		beforeDestroy() {
			console.log("News组件即将被销毁")
		},
	}
</script>