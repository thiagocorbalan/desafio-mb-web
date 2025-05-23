import { cnpj, cpf, date, email, minLength, phone, required } from "./";

describe("validators utils", () => {
	describe("required", () => {
		it("should return message when value is invalid", () => {
			const result = required("");
			expect(result).toBe("Campo obrigatório");
		});

		it("should return true when value is valid", () => {
			const result = required("a");
			expect(result).toBe(true);
		});
	});

	describe("email", () => {
		it("should return message when value is invalid", () => {
			const result = email("nocab@com");
			expect(result).toBe("Email inválido");
		});

		it("should return true when value is valid", () => {
			const result = email("nocab@gmail.com");
			expect(result).toBe(true);
		});
	});

	describe("cpf", () => {
		it("should return message when value is invalid", () => {
			const result = cpf("26531874003");
			expect(result).toBe("CPF inválido");
		});

		it("should return true when value is valid", () => {
			const result = cpf("26531874007");
			expect(result).toBe(true);
		});
	});

	describe("cnpj", () => {
		it("should return message when value is invalid", () => {
			const result = cnpj("54069356000102");
			expect(result).toBe("CNPJ inválido");
		});

		it("should return true when value is valid", () => {
			const result = cnpj("54069356000100");
			expect(result).toBe(true);
		});
	});

	describe("phone", () => {
		it("should return message when value is invalid", () => {
			expect(phone("149888888887")).toBe("Telfone inválido");
			expect(phone("148888-8888")).toBe("Telfone inválido");
		});

		it("should return true when value is valid", () => {
			expect(phone("14988888888")).toBe(true);
			expect(phone("1428888888")).toBe(true);
			expect(phone("1438888888")).toBe(true);
		});
	});

	describe("date", () => {
		beforeEach(() => {
			jest.useFakeTimers();
			jest.setSystemTime(new Date("2025-05-22T10:00:00.000Z"));
		});

		it("should return message when value is invalid", () => {
			expect(date("alguma coisa")).toBe("Data inválida");
			expect(date("2025-05-23")).toBe("Data inválida");
		});

		it("should return true when value is invalid", () => {
			expect(date("2025-05-20")).toBe(true);
		});
	});

	describe("minLength", () => {
		it("should return message when value is invalid", () => {
			const resultA = minLength(8);
			expect(resultA("1234567")).toBe("Quantidade mínima: 8");

			const resultB = minLength(4);
			expect(resultB("123")).toBe("Quantidade mínima: 4");
		});

		it("should return true when value is valid", () => {
			const resultA = minLength(8);
			expect(resultA("12345678")).toBe(true);
		});
	});
});
