<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import VTextField from "../VTextField.vue";

const store = useStore();
const dataForm = store.state.registrationForm;

const isCompany = computed(() => dataForm.type === "PJ");
const nameLabel = computed(() => (isCompany.value ? "Razão Social" : "Nome"));
const documentLabel = computed(() => (isCompany.value ? "CNPJ" : "CPF"));
const dateLabel = computed(() =>
	isCompany.value ? "Data de abertura" : "Data de nascimento"
);
</script>
<template>
	<h2>Revise suas informações</h2>
	<v-text-field
		v-model="dataForm.email"
		label="Endereço de e-mail"
		readonly
	/>
	<v-text-field v-model="dataForm.name" :label="nameLabel" readonly />
	<v-text-field v-model="dataForm.document" :label="documentLabel" readonly />

	<v-text-field v-model="dataForm.date" :label="dateLabel" readonly />
	<v-text-field v-model="dataForm.phone" label="Telefone" readonly />
	<v-text-field
		v-model="dataForm.phone"
		type="passwod"
		label="Senha"
		readonly
	/>
</template>
