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
		<input id="internalId" :type="type" :placeholder="placeholder" />
	</div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";

.text-field {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	margin-bottom: 1rem;

	input::placeholder {
		color: color(neutral-100);
	}
}
</style>
