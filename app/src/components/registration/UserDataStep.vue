<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import VTextField from "../VTextField.vue";
import { required, cpf, cnpj, phone, date } from "@/utils/validators";

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
			:rules="[required]"
			required
		/>
		<v-text-field
			type="tel"
			label="CPF"
			placeholder="xxx.xxx.xxx-xx"
			v-model="dataForm.document"
			:rules="[required, cpf]"
			required
		/>
		<v-text-field
			type="date"
			label="Data de nascimento"
			v-model="dataForm.date"
			:rules="[required, date]"
			required
		/>
	</template>

	<template v-else>
		<v-text-field
			type="text"
			label="Razão Social"
			v-model="dataForm.name"
			placeholder="Digite a razão social..."
			:rules="[required]"
			autofocus
			required
		/>
		<v-text-field
			type="tel"
			label="CNPJ"
			placeholder="xx.xxx.xxx/xxxx-xx"
			v-model="dataForm.document"
			:rules="[required, cnpj]"
			required
		/>
		<v-text-field
			type="date"
			label="Data de abertura"
			:rules="[required, date]"
			v-model="dataForm.date"
			required
		/>
	</template>

	<v-text-field
		type="tel"
		label="Telefone"
		placeholder="(xx) xxxxxx-xxxx"
		v-model="dataForm.phone"
		:rules="[required, phone]"
		required
	/>
</template>
