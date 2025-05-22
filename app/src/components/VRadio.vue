<script setup>
import { computed, defineProps, ref } from "vue";
import uuid from "@/utils/generateShortUUID";

const props = defineProps({
	name: String,
	label: String,
	value: String,
	checked: Boolean,
});

const internalChecked = ref(props.checked);

const internalId = computed(() => {
	return `radio-${uuid()}`;
});
</script>

<template>
	<div class="radio-field">
		<input
			type="radio"
			:name="props.name"
			:id="internalId"
			:value="props.value"
			:checked="internalChecked"
			class="sr-only"
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
			border: 1px solid color(primary);
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

	input:focus-visible ~ .radio-field__label .radio-field__label__wrapper {
		outline: 10px solid rgba(204, 204, 204, 0.3);
	}
}
</style>
