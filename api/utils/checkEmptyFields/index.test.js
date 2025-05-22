import { describe, expect, it } from "vitest";
import subject from './index';

describe('checkEmptyFilds', () => {
	it('should return false when object not contain empty fields', () => {
		const result = subject({
			email: 'contato@me.com',
			type: 'PF',
			name: 'Thiago',
			document: '83908327040',
			date: '1988-05-10T00:19:00.000Z',
			phone: '11999999999',
			password: '12345678'
		});

		expect(result).toBeFalsy();
	});

	it('should return true when object contain empty fields', () => {
		const result = subject({
			email: 'contato@me.com',
			type: 'PF',
			name: '',
			document: '83908327040',
			date: '1988-05-10T00:19:00.000Z',
			phone: '11999999999',
			password: '12345678'
		});

		expect(result).toBeTruthy();
	});

	it('should return throw error when param is not object', () => {
		expect(() => subject(10)).toThrowError();
		expect(() => subject('10')).toThrowError();
		expect(() => subject()).toThrowError();
		expect(() => subject(null)).toThrowError();
	});
});
