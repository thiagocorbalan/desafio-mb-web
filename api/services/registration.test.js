import { beforeEach, describe, expect, it } from "vitest";
import subject from './registration';

describe('registration service', () => {
	let data;

	beforeEach(() => {
		data = {
			email: 'contato@me.com',
			type: 'PF',
			name: 'Thiago',
			document: '83908327040',
			date: '1988-05-10T00:19:00.000Z',
			phone: '11999999999',
			password: '12345678'
		}
	});

	it('should return success object when all fields is filleds', () => {

		const result = subject.register(data);

		expect(result).toEqual({ success: true });
	});

	it('should return error object when exists empty fields', () => {
		data.email = '';

		const result = subject.register(data);

		expect(result).toEqual({ error: true, message: 'body contain empty fields' });
	});

	it('should return error object when type is different from PJ or PF', () => {
		data.type = 'PZ';
		const result = subject.register(data);

		expect(result).toEqual({ error: true, message: 'Type is not valid: PZ' });
	});

	it('should return error object when document number from PJ type is not valid', () => {
		data.type = 'PJ';
		const result = subject.register(data);

		expect(result).toEqual({ error: true, message: 'CNPJ is not valid' });
	});

	it('should return error object when document number from PF type is not valid', () => {
		data.document = '123456';
		const result = subject.register(data);

		expect(result).toEqual({ error: true, message: 'CPF is not valid'  });
	});

	it('should return error object when email is not valid', () => {
		data.email = 'nocab@gmail';
		const result = subject.register(data);

		expect(result).toEqual({ error: true, message: 'Email is not valid'  });
	});

	it('should return error object when date is not valid or date is less than date today', () => {
		data.date = '1988-13-10T00:19:00.000Z';
		const result = subject.register(data);

		expect(result).toEqual({ error: true, message: 'Date is not valid'  });
	});

	it('should return error object when password is not valid', () => {
		data.password = '123456';
		const result = subject.register(data);

		expect(result).toEqual({ error: true, message: 'Password is not valid'  });
	});
})
