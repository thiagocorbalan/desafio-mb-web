import {
	isValidCNPJ,
	isValidCPF,
	isValidEmail,
	isValidPhone,
} from "@brazilian-utils/brazilian-utils";
import dayjs from "dayjs";

export const required = (value) => !!value || "Campo obrigatório";

export const email = (value) => isValidEmail(value) || "Email inválido";

export const cpf = (value) => isValidCPF(value) || "CPF inválido";

export const cnpj = (value) => isValidCNPJ(value) || "CNPJ inválido";

export const phone = (value) => isValidPhone(value) || "Telfone inválido";

export const date = (value) =>
	(dayjs(value, "YYYY-DD-MM").isValid() && dayjs(value).isBefore(dayjs())) ||
	"Data inválida";

export const minLength = (length) => (value) =>
	value.length >= length || `Deve conter no mínimo ${length} digitos.`;
