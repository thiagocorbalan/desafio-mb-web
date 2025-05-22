<script setup>
import { ref } from "vue";
import VButton from "@/components/VButton.vue";
import FirstStep from "@/components/registration/FirstStep.vue";

const currentStep = ref(1);

// const steps = [];

function previousStep() {}

function nextStep() {}
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

		<FirstStep />
		<div class="actions">
			<v-button @click="nextStep">Continuar</v-button>
			<v-button v-if="currentStep > 1" color="ghost" @click="previousStep"
				>Voltar</v-button
			>
		</div>
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
</style>
