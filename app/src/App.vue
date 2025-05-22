<script setup></script>

<template>
	<div class="container">
		<h1>
			<img src="@/assets/logo.svg" alt="Mercado Bitcoin" width="80" />
		</h1>

		<div class="step">Etapa <strong>1</strong> de 4</div>

		<h2>Seja bem vindo(a)</h2>

		<div>
			<label for="">Endereço de e-mail</label>
			<input type="text" name="name" />
		</div>

		<div>
			<input type="radio" name="type" id="typePF" value="PF" />
			<label for="typePF">Pessoa Física</label>
		</div>
		<div>
			<input type="radio" name="type" id="typePJ" value="PJ" />
			<label for="typePJ">Pessoa Jurídica</label>
		</div>

		<button class="btn btn__primary">Continuar</button>
	</div>
</template>

<style lang="scss" scoped>
@import "./assets/scss/global.scss";

.step {
	font-size: 0.875rem;
	font-weight: 300;

	strong {
		color: color(primary);
		font-weight: 600;
	}
}

h1 {
	text-align: center;
}
</style>
