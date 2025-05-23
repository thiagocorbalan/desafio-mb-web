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
		<v-text-field
			type="text"
			label="Nome"
			v-model="dataForm.name"
			placeholder="Digite seu nome..."
			required
		/>
		<v-text-field
			type="tel"
			label="CPF"
			placeholder="xxx.xxx.xxx-xx"
			v-model="dataForm.document"
			required
		/>
		<v-text-field
			type="date"
			label="Data de nascimento"
			v-model="dataForm.date"
			required
		/>
	</template>

	<template v-else>
		<v-text-field
			type="text"
			label="Razão Social"
			v-model="dataForm.name"
			placeholder="Digite a razão social..."
			autofocus
			required
		/>
		<v-text-field
			type="tel"
			label="CNPJ"
			placeholder="xx.xxx.xxx/xxxx-xx"
			v-model="dataForm.document"
			required
		/>
		<v-text-field
			type="date"
			label="Data de abertura"
			v-model="dataForm.date"
			required
		/>
	</template>

	<v-text-field
		type="tel"
		label="Telefone"
		placeholder="(xx) xxxxxx-xxxx"
		v-model="dataForm.phone"
		required
	/>
</template>
