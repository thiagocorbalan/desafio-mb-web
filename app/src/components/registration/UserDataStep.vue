<script setup>
import { ref } from "vue";

const userType = ref("Física");
</script>
<template>
	<h2>Pessoa {{ userType }}</h2>

	<template v-if="dataForm.type === 'PF'">
		<v-text-field type="text" label="Nome" v-model="dataForm.name" />
		<v-text-field type="tel" label="CPF" v-model="dataForm.document" />
	</template>

	<template v-else>
		<v-text-field
			type="text"
			label="Razão Social"
			v-model="dataForm.name"
		/>
		<v-text-field type="tel" label="CNPJ" v-model="dataForm.document" />
	</template>

	<v-text-field type="tel" label="Telefone" v-model="dataForm.phone" />
</template>
