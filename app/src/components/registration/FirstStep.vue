<script setup>
import VTextField from "../VTextField.vue";
import VRadio from "../VRadio.vue";
import { ref } from "vue";

const dataForm = ref({
	email: "",
	type: "PF",
	name: "",
	document: "",
	date: "",
	phone: "",
	password: "",
});
</script>

<template>
	<h2>Seja bem vindo(a)</h2>

	<v-text-field
		label="Endereço de e-mail"
		type="email"
		placeholder="Digite seu email"
		v-model="dataForm.email"
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
}

.actions {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 1rem;
}

@media screen and (min-width: screen(sm)) {
	.register-type {
		gap: 1rem;
		flex-direction: row;
	}
	.actions {
		flex-direction: row-reverse;
	}
}
</style>
