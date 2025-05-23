<script setup>
import VButton from "@/components/VButton.vue";
import FirstStep from "@/components/registration/FirstStep.vue";
import PassStep from "@/components/registration/PassStep.vue";
import ReviewStep from "@/components/registration/ReviewStep.vue";
import UserDataStep from "@/components/registration/UserDataStep.vue";
import { computed, ref } from "vue";

const step = ref(0);

const steps = [FirstStep, UserDataStep, PassStep, ReviewStep];

const currentStep = computed(() => step.value + 1);
const isLastStep = computed(() => step.value === steps.length - 1);
const textButton = computed(() =>
	isLastStep.value ? "Cadastrar" : "Continuar"
);

function previousStep() {
	step.value--;
}

function nextStep() {
	step.value++;
}

function submitForm() {
	if (isLastStep.value) {
		console.log("submit form");
	} else {
		nextStep();
	}
}
</script>

<template>
	<div class="container">
		<h1>
			<img
				src="@/assets/logo.svg"
				alt="Mercado Bitcoin"
				title="Mercado Bitcoin"
				class="logo"
			/>
		</h1>
		<div class="step" aria-live="polite">
			Etapa <strong>{{ currentStep }}</strong> de 4
		</div>

		<form @submit.prevent="submitForm">
			<component :is="steps[step]" />

			<div class="actions">
				<v-button>{{ textButton }}</v-button>
				<v-button
					v-if="step > 0"
					type="button"
					color="ghost"
					@click="previousStep"
				>
					Voltar
				</v-button>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/global.scss";

.container {
	@media screen and (min-width: screen(sm)) {
		padding: 2rem;
		margin: 1rem auto;
		min-width: 22.5rem;
		max-width: 30rem;
	}

	background: color(neutral-white);
	border-radius: 0.5rem;
	padding: 1rem;
	margin: 1rem;
	box-shadow: 0.125rem 0.125rem 0.625rem color(neutral-300);
}

.logo {
	display: block;
	width: 5rem;
	height: 5rem;
	margin-bottom: 1rem;
}

.step {
	font-size: 0.875rem;
	font-weight: 300;
	margin-bottom: 0.25rem;

	strong {
		color: color(primary);
		font-weight: 600;
	}
}

.actions {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	@media screen and (min-width: screen(sm)) {
		flex-direction: row-reverse;
	}
}
</style>
