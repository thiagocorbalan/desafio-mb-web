<template>
	<div class="spinner"></div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";
.spinner {
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	border: 4px solid;
	border-color: color(neutral-300);
	border-right-color: color(neutral-600);
	animation: spinner 1s infinite linear;
}

@keyframes spinner {
	to {
		transform: rotate(1turn);
	}
}
</style>
