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
			:rules="[required]"
			label="Nome"
			placeholder="Digite seu nome..."
			required
			type="text"
			v-model="dataForm.name"
		/>
		<v-text-field
			:mask="cpfMask"
			:rules="[required, cpf]"
			label="CPF"
			maxlength="14"
			placeholder="xxx.xxx.xxx-xx"
			required
			type="tel"
			v-model="dataForm.document"
		/>
	</template>

	<template v-else>
		<v-text-field
			:rules="[required]"
			label="Razão Social"
			placeholder="Digite a razão social..."
			required
			type="text"
			v-model="dataForm.name"
		/>
		<v-text-field
			:mask="cnpjMask"
			:rules="[required, cnpj]"
			label="CNPJ"
			maxlength="18"
			placeholder="xx.xxx.xxx/xxxx-xx"
			required
			type="tel"
			v-model="dataForm.document"
		/>
	</template>

	<v-text-field
		:label="labelDate"
		:mask="dateMask"
		:rules="[required, date]"
		maxlength="10"
		placeholder="xx/xx/xxxx"
		required
		type="text"
		v-model="dataForm.date"
	/>

	<v-text-field
		:mask="phoneMask"
		:rules="[required, phone]"
		label="Telefone"
		placeholder="(xx) xxxxxx-xxxx"
		required
		type="tel"
		v-model="dataForm.phone"
	/>
</template>
