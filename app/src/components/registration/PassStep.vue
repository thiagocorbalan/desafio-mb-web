<script setup>
import { useStore } from "vuex";
import VTextField from "../VTextField.vue";
import { required, minLength } from "@/utils/validators";

const store = useStore();
const dataForm = store.state.registrationForm;
</script>

<template>
	<h2>Senha de acesso</h2>

	<v-text-field
		type="password"
		label="Sua senha"
		v-model="dataForm.password"
		:rules="[required, minLength(8)]"
		v-autofocus
	/>
</template>
