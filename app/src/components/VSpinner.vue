<template>
	<div class="spinner"></div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";
.spinner {
	width: 0.625rem;
	height: 0.625rem;
	border-radius: 50%;
	border: 0.1875rem solid;
	border-color: color(neutral-300);
	border-right-color: color(neutral-600);
	animation: spinner 0.5s infinite linear;
}

@keyframes spinner {
	to {
		transform: rotate(1turn);
	}
}
</style>
