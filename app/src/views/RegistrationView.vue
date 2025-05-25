<script setup>
import VAlert from "@/components/VAlert.vue";
import VButton from "@/components/VButton.vue";
import FirstStep from "@/components/registration/FirstStep.vue";
import PassStep from "@/components/registration/PassStep.vue";
import ReviewStep from "@/components/registration/ReviewStep.vue";
import UserDataStep from "@/components/registration/UserDataStep.vue";
import { useRegistrationApi } from "@/composable/useRegistrationApi";
import { computed, ref, watch, onMounted } from "vue";
import { useStore } from "vuex";

const { register, loading, error, success } = useRegistrationApi();

const store = useStore();

const step = ref(0);
const steps = [FirstStep, UserDataStep, PassStep, ReviewStep];
const registerCompleted = ref(false);

const currentStep = computed(() => step.value + 1);
const isLastStep = computed(() => step.value === steps.length - 1);
const textButton = computed(() =>
	isLastStep.value ? "Cadastrar" : "Continuar"
);

const previousStep = () => step.value--;

const nextStep = () => step.value++;

const submitForm = () => {
	if (isLastStep.value) {
		register("/registration", store.state.registrationForm);
	} else {
		nextStep();
	}
};

const restart = () => {
	store.commit("resetRegistrationForm");
	success.value = null;
	registerCompleted.value = false;
	step.value = 0;
};

watch(success, (res) => (registerCompleted.value = !!res));

onMounted(() => {
	document.title = "Mercado Bitcoin - Cadastro";
});
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
		<form @submit.prevent="submitForm" class="form">
			<v-alert v-if="success" success @close="() => (success = null)">
				{{ success }}
			</v-alert>
			<v-alert v-if="error" error @close="() => (error = null)">
				{{ error }}
			</v-alert>

			<component :is="steps[step]" />

			<div class="actions">
				<v-button
					v-if="registerCompleted"
					type="button"
					@click="restart"
				>
					Reiniciar
				</v-button>
				<template v-else>
					<v-button :loading="loading" :disabled="loading">
						{{ textButton }}
					</v-button>
					<v-button
						v-if="step > 0"
						type="button"
						color="ghost"
						@click="previousStep"
						:disabled="loading"
					>
						Voltar
					</v-button>
				</template>
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

.form {
	position: relative;
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
