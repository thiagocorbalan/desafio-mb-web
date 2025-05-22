<script setup>
import VTextField from "./components/VTextField.vue";
import VRadio from "./components/VRadio.vue";
import VButton from "./components/VButton.vue";

function nextStep() {
	console.log("next step");
}

function previousStep() {
	console.log("previous step");
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
		<div class="step" aria-live="polite">Etapa <strong>1</strong> de 4</div>
		<h2 class="title-step">Seja bem vindo(a)</h2>

		<v-text-field
			label="Endereço de e-mail"
			type="text"
			placeholder="Digite seu email"
		/>
		<v-text-field label="Senha" type="password">
			<template #hint>Algum hint...</template>
		</v-text-field>

		<div class="register-type">
			<v-radio name="type" value="PF" label="Pessoa física" />
			<v-radio name="type" value="PJ" label="Pessoa jurídica" />
		</div>

		<div class="actions">
			<v-button color="ghost" @click="previousStep">Voltar</v-button>
			<v-button @click="nextStep">Continuar</v-button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./assets/scss/global.scss";

.container {
	border: 1px solid;
	border-radius: 0.5rem;
	padding: 1rem;
	width: 100%;
}

.logo {
	display: block;
	width: 5rem;
	height: 5rem;
	margin-bottom: 1rem;
}

.register-type {
	display: flex;
	gap: 1rem;
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

.title-step {
	margin-bottom: 1.5rem;
}

.actions {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
}
</style>
