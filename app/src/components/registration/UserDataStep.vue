<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import VTextField from "../VTextField.vue";

const store = useStore();
const dataForm = store.state.registrationForm;

const title = computed(() =>
	dataForm.type === "PF" ? "Pessoa Física" : "Pessoa Jurídica"
);
</script>
<template>
	<h2>{{ title }}</h2>

	<template v-if="dataForm.type === 'PF'">
		<v-text-field type="text" label="Nome" v-model="dataForm.name" />
		<v-text-field type="tel" label="CPF" v-model="dataForm.document" />
		<v-text-field
			type="date"
			label="Data de nascimento"
			v-model="dataForm.date"
		/>
	</template>

	<template v-else>
		<v-text-field
			type="text"
			label="Razão Social"
			v-model="dataForm.name"
		/>
		<v-text-field type="tel" label="CNPJ" v-model="dataForm.document" />
		<v-text-field
			type="date"
			label="Data de abertura"
			v-model="dataForm.date"
		/>
	</template>

	<v-text-field type="tel" label="Telefone" v-model="dataForm.phone" />
</template>
