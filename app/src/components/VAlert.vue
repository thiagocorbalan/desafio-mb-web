<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
	success: {
		type: Boolean,
		default: false,
	},
	error: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["close"]);

const alertStyle = {
	"alert--success": props.success,
	"alert--error": props.error,
};

const handleClose = () => {
	emit("close");
};
</script>

<template>
	<div class="alert" :class="alertStyle" role="alert" aria-live="polite">
		<img
			v-if="props.success"
			src="@/assets/ic-check-circle.svg"
			width="24"
			heigth="24"
			class="alert__icon--success"
		/>
		<img
			v-if="props.error"
			src="@/assets/ic-close-circle.svg"
			width="24"
			heigth="24"
			class="alert__icon--error"
		/>
		<div class="alert__text">
			<slot />
		</div>
		<button
			type="button"
			@click="handleClose"
			class="alert__button-close"
			title="fechar"
		>
			<img src="@/assets/ic-close.svg" width="24" heigth="24" />
		</button>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/global.scss";

.alert {
	align-items: center;
	background: color(info-light);
	border-radius: 0.25rem;
	border: 0.0625rem solid color(info);
	color: color(info-dark);
	box-sizing: border-box;
	display: flex;
	font-size: 0.875rem;
	gap: 0.5rem;
	justify-content: space-between;
	min-width: 100%;
	padding: 0.25rem 0.5rem;
	position: absolute;

	&__button-close {
		background: transparent;
		font-size: 1rem;
		font-weight: 600;
		border: 0;
		cursor: pointer;
	}

	&--success {
		border-color: color(success);
		background-color: color(success-light);
		color: color(success-dark);
	}

	&--error {
		border-color: color(error);
		background-color: color(error-light);
		color: color(error-dark);
	}

	&__text {
		flex: 1;
		line-height: normal;
	}
}
</style>
