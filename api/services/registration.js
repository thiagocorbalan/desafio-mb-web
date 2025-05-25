import { isValidCNPJ, isValidCPF, isValidEmail } from "@brazilian-utils/brazilian-utils";
import dayjs from 'dayjs';
import existEmptyFields from './../utils/checkEmptyFields/index.js';

const sendError = (message) => ({ error: true, message });

const register = (body)=> {
	if (existEmptyFields(body)) return sendError('body contain empty fields');
	if (!/PJ|PF/.test(body.type)) return sendError(`Type is not valid: ${body.type}`);
	if (body.type === 'PJ' && !isValidCNPJ(body.document)) return sendError('CNPJ is not valid');
	if (body.type === 'PF' && !isValidCPF(body.document)) return sendError('CPF is not valid');
	if (!isValidEmail(body.email)) return sendError('Email is not valid');
	if (!dayjs(body.date).isValid()) return sendError('Date is not valid');
	if (body.password.length < 8) return sendError('Password is not valid');

	return;
}

export default {
	register,
}
