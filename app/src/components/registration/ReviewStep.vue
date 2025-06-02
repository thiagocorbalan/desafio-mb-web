<script setup>
import { cnpjMask, cpfMask, dateMask, phoneMask } from "@/utils/masks";
import { date, email, minLength, required } from "@/utils/validators";
import { useStore } from "vuex";
import VTextField from "../VTextField.vue";

const store = useStore();
const dataForm = store.state.registrationForm;

const isCompany = dataForm.type === "PJ";
const nameLabel = isCompany ? "Razão Social" : "Nome";
const documentLabel = isCompany ? "CNPJ" : "CPF";
const dateLabel = isCompany ? "Data de abertura" : "Data de nascimento";
const documentMask = isCompany ? cnpjMask : cpfMask;
</script>
<template>
	<h2>Revise suas informações</h2>
	<v-text-field
		v-model="dataForm.email"
		name="email"
		label="Endereço de e-mail"
		:rules="[required, email]"
	/>
	<v-text-field
		v-model="dataForm.name"
		name="name"
		:label="nameLabel"
		:rules="[required]"
	/>
	<v-text-field
		v-model="dataForm.document"
		name="document"
		:label="documentLabel"
		:mask="documentMask"
		:rules="[required]"
	/>

	<v-text-field
		v-model="dataForm.date"
		name="date"
		:label="dateLabel"
		:mask="dateMask"
		:rules="[required, date]"
	/>
	<v-text-field
		v-model="dataForm.phone"
		label="Telefone"
		name="phone"
		:mask="phoneMask"
		:rules="[required]"
	/>
	<v-text-field
		v-model="dataForm.password"
		type="password"
		name="password"
		:rules="[required, minLength(8)]"
		label="Senha"
		required
	/>
</template>
