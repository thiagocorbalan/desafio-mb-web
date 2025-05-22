<script setup>
import VTextField from "./components/VTextField.vue";
import VRadio from "./components/VRadio.vue";
</script>

<template>
	<div class="container">
		<h1>
			<img src="@/assets/logo.svg" alt="Mercado Bitcoin" class="logo" />
		</h1>

		<div class="step">Etapa <strong>1</strong> de 4</div>

		<h2 class="title-step">Seja bem vindo(a)</h2>

		<v-text-field
			label="Endereço de e-mail"
			type="text"
			placeholder="Digite seu email"
		/>
		<v-text-field label="Senha" type="password" />

		<div class="register-type">
			<v-radio name="type" value="PF" label="Pessoa física" />
			<v-radio name="type" value="PJ" label="Pessoa jurídica" />
		</div>

		<button class="btn btn__primary">Continuar</button>
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
	justify-content: space-between;
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
</style>
