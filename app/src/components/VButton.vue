<script setup>
import { defineProps } from "vue";
import VSpinner from "./VSpinner.vue";

const props = defineProps({
	color: String,
	loading: Boolean,
	disabled: Boolean,
});

const cssClassMap = {
	primary: "btn--primary",
	ghost: "btn--ghost",
};
</script>

<template>
	<button
		class="btn"
		:class="cssClassMap[props.color || 'primary']"
		:aria-busy="props.loading || null"
		:aria-live="props.loading || null"
		:disabled="props.loading || props.disabled"
		v-bind="$attrs"
	>
		<v-spinner v-if="props.loading" />
		<slot v-else />
	</button>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";

.btn {
	align-items: center;
	border-radius: 0.25rem;
	border: 1px solid color(neutral-100);
	cursor: pointer;
	display: flex;
	font-weight: 600;
	justify-content: center;
	line-height: 1.125rem;
	min-width: min-content;
	padding: 0.5rem;
	text-align: center;
	width: 100%;

	&:focus {
		outline: 0.125rem solid color(neutral-black);
		outline-offset: 0.125rem;
	}

	&--primary:not([disabled]) {
		background: color(primary);
		border-color: color(primary);
		color: color(neutral-white);

		&:hover {
			background-color: color(primary-dark);
		}

		&:focus {
			outline-color: color(primary);
		}
	}

	&--ghost:not([disabled]) {
		background: transparent;
		border-color: color(primary);
		color: color(primary);

		&:hover {
			background-color: color(primary);
			color: color(neutral-white);
		}
		&:focus {
			outline-color: color(primary);
		}
	}

	&[disabled] {
		background: color(neutral-100);
		cursor: not-allowed;
	}
}
</style>
