<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import VTextField from "../VTextField.vue";
import { required, cpf, cnpj, phone, date } from "@/utils/validators";
import { cpfMask, cnpjMask, dateMask, phoneMask } from "@/utils/masks";

const store = useStore();
const dataForm = store.state.registrationForm;

const isPF = computed(() => dataForm.type === "PF");
const title = computed(() =>
	isPF.value ? "Pessoa Física" : "Pessoa Jurídica"
);

const labelDate = computed(() =>
	isPF.value ? "Data de nascimento" : "Data da abertura"
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
			:mask="cpfMask"
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
			required
		/>
		<v-text-field
			type="tel"
			label="CNPJ"
			placeholder="xx.xxx.xxx/xxxx-xx"
			v-model="dataForm.document"
			:rules="[required, cnpj]"
			:mask="cnpjMask"
			required
		/>
	</template>

	<v-text-field
		type="text"
		:label="labelDate"
		v-model="dataForm.date"
		:rules="[required, date]"
		:mask="dateMask"
		placeholder="xx/xx/xxxx"
		required
	/>

	<v-text-field
		type="tel"
		label="Telefone"
		placeholder="(xx) xxxxxx-xxxx"
		v-model="dataForm.phone"
		:rules="[required, phone]"
		:mask="phoneMask"
		required
	/>
</template>
