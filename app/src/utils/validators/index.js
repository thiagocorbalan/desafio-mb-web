import {
	isValidCNPJ,
	isValidCPF,
	isValidEmail,
	isValidPhone,
} from "@brazilian-utils/brazilian-utils";
import dayjs from "dayjs";

export function required(value) {
	return !!value || "Campo obrigatório";
}

export function email(value) {
	return isValidEmail(value) || "Email inválido";
}

export function cpf(value) {
	return isValidCPF(value) || "CPF inválido";
}

export function cnpj(value) {
	return isValidCNPJ(value) || "CNPJ inválido";
}

export function phone(value) {
	return isValidPhone(value) || "Telfone inválido";
}

export function date(value) {
	return (
		(dayjs(value, "YYYY-DD-MM").isValid() &&
			dayjs(value).isBefore(dayjs())) ||
		"Data inválida"
	);
}

export function minLength(length) {
	return (value) => value.length >= length || `Quantidade mínima: ${length}`;
}
