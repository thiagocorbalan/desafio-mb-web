<script setup>
import uuid from "@/utils/generateShortUUID";
import { computed, defineProps, ref } from "vue";

const props = defineProps({
	label: String,
	type: String,
	placeholder: String,
});

const internalId = computed(() => {
	return `textField-${uuid()}`;
});

const hasError = ref(false);
</script>

<template>
	<div class="text-field" :class="{ 'text-field--has-error': hasError }">
		<label :for="internalId" class="text-field__label">
			{{ props.label }}
		</label>
		<input
			:id="internalId"
			:type="type"
			class="text-field__input"
			:placeholder="placeholder"
		/>
		<span class="text-field__hint">
			<slot name="hint" />
		</span>
	</div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";

.text-field__label {
	font-size: 0.875rem;
}

.text-field {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	margin-bottom: 1rem;

	&__input {
		border-radius: 0.25rem;
		border: 0.0625rem solid color(neutral-600);
		font-size: 1rem;
		padding: 0.5rem;
		line-height: 1.125rem;

		&::placeholder {
			color: color(neutral-400);
		}

		&:focus {
			outline: 0.125rem solid color(primary);
			outline-offset: 0.125rem;
		}
	}

	&__hint {
		font-size: 14px;
		color: color(neutral-900);
		display: block;
	}

	&--has-error .text-field {
		&__input,
		&__hint {
			color: color(error);
		}

		&__input {
			border-color: color(error);
		}
	}
}
</style>
