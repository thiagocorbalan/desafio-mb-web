describe("Home", () => {
	it("should show 404 when visit home", () => {
		cy.visit("/");
		cy.contains("h1", "Ihhh... Parece que essa página não existe.");
	});
});
