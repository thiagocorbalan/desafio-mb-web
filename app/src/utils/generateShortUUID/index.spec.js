import subject from "./";

describe("generateShortUUID", () => {
	it("should return a string", () => {
		const result = subject();

		expect(typeof result).toBe("string");
	});

	it("should return a string of default length 8", () => {
		const result = subject();

		expect(result.length).toBe(8);
	});

	it("should only contain valid characters", () => {
		const validChars = /^[a-zA-Z0-9]+$/;

		const result = subject(20);

		expect(validChars.test(result)).toBe(true);
	});

	it("should generate different values for multiple calls (not always equal)", () => {
		const result1 = subject();
		const result2 = subject();
		expect(result1).not.toBe(result2);
	});
});
