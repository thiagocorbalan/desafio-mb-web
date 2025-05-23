<script setup>
import uuid from "@/utils/generateShortUUID";
import { computed, defineProps, ref, defineModel, watch } from "vue";

const props = defineProps({
	label: {
		type: String,
		default: "Label",
	},
	rules: {
		type: Array,
		default: () => [],
	},
});

const model = defineModel();

const internalId = computed(() => {
	return `textField-${uuid()}`;
});

const errorMessage = ref(null);

function validate() {
	console.log("asdasd", props.label);
	const isValid = props.rules.reduce((result, rule) => {
		if (typeof result === "string") return result;
		return rule(model.value);
	}, true);

	if (typeof isValid === "string") {
		errorMessage.value = isValid;
		return;
	}

	errorMessage.value = null;
}

watch(model, validate);
</script>

<template>
	<div class="text-field" :class="{ 'text-field--has-error': errorMessage }">
		<label :for="internalId" class="text-field__label">
			{{ props.label }}
		</label>
		<input
			class="text-field__input"
			:id="internalId"
			v-bind="$attrs"
			v-model="model"
		/>
		<span class="text-field__error-message">{{ errorMessage }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/global.scss";

.text-field__label {
	font-size: 0.875rem;
	font-weight: 600;
	color: color(neutral-600);
}

.text-field {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;

	&__input {
		border-radius: 0.25rem;
		border: 0.0625rem solid color(neutral-300);
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

	&--has-error .text-field {
		&__error-message {
			font-size: 0.75rem;
			display: block;
		}

		&__input,
		&__error-message {
			color: color(error);
		}

		&__input {
			border-color: color(error);
			background-color: color(error-light);
		}
	}
}
</style>
