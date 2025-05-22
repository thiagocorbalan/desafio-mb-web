<script setup>
import uuid from "@/utils/generateShortUUID";
import { computed, defineProps } from "vue";

const props = defineProps({
	label: String,
	type: String,
	placeholder: String,
});

const internalId = computed(() => {
	return `textField-${uuid()}`;
});
</script>

<template>
	<div class="text-field">
		<label :for="internalId">{{ props.label }}</label>
		<input
			id="internalId"
			:type="type"
			class="text-field__input"
			:placeholder="placeholder"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";

.text-field {
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-bottom: 16px;

	.text-field__input {
		border-radius: 0.25rem;
		border: 1px solid color(neutral-600);
		font-size: 1rem;
		padding: 0.5rem;
		line-height: 1.125rem;

		&::placeholder {
			color: color(neutral-100);
		}

		&:focus {
			outline: 2px solid color(primary);
		}
	}
}
</style>
