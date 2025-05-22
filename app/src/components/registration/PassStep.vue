<script setup>
import { useStore } from "vuex";
import VTextField from "../VTextField.vue";

const store = useStore();
const dataForm = store.state.registrationForm;
</script>

<template>
	<h2>Senha de acesso</h2>

	<v-text-field
		type="password"
		label="Sua senha"
		v-model="dataForm.password"
	/>
</template>
