<script setup>
import uuid from "@/utils/generateShortUUID";
import { defineProps, defineModel } from "vue";

const props = defineProps({
	label: {
		type: String,
		default: "Label",
	},
});

const model = defineModel();

const internalId = `radio-${uuid()}`;
</script>

<template>
	<div class="radio-field">
		<input
			type="radio"
			class="sr-only"
			v-bind="$attrs"
			:id="internalId"
			v-model="model"
		/>
		<label class="radio-field__label" :for="internalId">
			<span class="radio-field__label__wrapper"></span>
			{{ props.label }}
		</label>
	</div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";

.radio-field {
	&__label {
		align-items: center;
		display: flex;
		gap: 0.25rem;
		display: flex;
		cursor: pointer;

		&__wrapper {
			border-radius: 100%;
			border: 0.0625rem solid color(primary);
			display: flex;
			align-items: center;
			justify-content: center;
			height: 1rem;
			width: 1rem;
			padding: 0.125rem;
			box-sizing: border-box;

			&::after {
				content: "";
				width: 100%;
				height: 100%;
				background: color(primary);
				border-radius: 100%;
				transform: scale(0);
				transition: transform 0.2s ease-in-out;
			}
		}
	}

	input:checked ~ .radio-field__label .radio-field__label__wrapper::after {
		transform: scale(1);
	}

	input:focus-visible {
		~ .radio-field__label .radio-field__label__wrapper {
			outline: 0.625rem solid color(neutral-300);
		}

		&:not(:checked)
			~ .radio-field__label
			.radio-field__label__wrapper::after {
			background: color(primary-light);
			transform: scale(0.75);
		}
	}
}
</style>
