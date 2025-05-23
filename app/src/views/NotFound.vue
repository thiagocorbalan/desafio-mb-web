<template>
	<div class="content">
		<img src="@/assets/404.svg" alt="404" width="460" height="460" />
		<h1>Ihhh... Parece que essa página não existe.</h1>
	</div>
</template>

<style lang="scss">
@import "@/assets/scss/global";

h1 {
	font-size: 1.5rem;
	line-height: 2.4rem;
	font-weight: 600;
	color: color(neutral-900);
}

.content {
	margin: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 520px;
	text-align: center;
}
</style>
