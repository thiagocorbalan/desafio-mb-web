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
		(dayjs(value, "YYYY-MM-DD").isValid() &&
			dayjs(value).isBefore(dayjs())) ||
		"Data inválida"
	);
}
