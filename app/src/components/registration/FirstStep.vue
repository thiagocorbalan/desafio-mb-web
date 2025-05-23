<script setup>
import { email, required } from "@/utils/validators";
import { watch } from "vue";
import { useStore } from "vuex";
import VRadio from "../VRadio.vue";
import VTextField from "../VTextField.vue";

const store = useStore();
const dataForm = store.state.registrationForm;

watch(
	() => store.getters.registrationType,
	() => store.commit("resetRegistrationUserData")
);
</script>

<template>
	<h2>Seja bem vindo(a)</h2>
	<v-text-field
		label="Endereço de e-mail"
		type="email"
		placeholder="Digite seu email..."
		v-model="dataForm.email"
		required
		:rules="[required, email]"
		v-autofocus
	/>

	<div class="register-type">
		<v-radio
			v-model="dataForm.type"
			value="PF"
			name="type"
			label="Pessoa física"
			checked
		/>
		<v-radio
			v-model="dataForm.type"
			value="PJ"
			name="type"
			label="Pessoa jurídica"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/global.scss";

.register-type {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;

	@media screen and (min-width: screen(sm)) {
		gap: 1rem;
		flex-direction: row;
	}
}
</style>
