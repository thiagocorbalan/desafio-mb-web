describe("Registration", () => {
	it("should show registration step 1 of 4", () => {
		cy.visit("/registration");
		cy.contains("h2", "Seja bem vindo(a)");
		cy.get(".step").should("include.text", "Etapa 1 de 4");
		cy.get(".actions").find("button").should("have.length", 1);
		cy.get(".actions").find("button").should("have.text", "Continuar");

		cy.get("input[name='email']").type("email incorreto");
		cy.get(".actions").find("button.btn--primary").focus();
		cy.get(".text-field__error-message").should(
			"have.text",
			"Email inválido"
		);
		cy.get("input[name='email']").clear().type("email@gmail.com");
		cy.get(".actions").find("button.btn--primary").focus();
		cy.get(".text-field__error-message").should("not.be.visible");
	});

	it("should return registration step 1 of 4", () => {
		cy.visit("/registration");
		cy.contains("h2", "Seja bem vindo(a)");

		cy.get("input[name='email']").clear().type("email@gmail.com");
		cy.get(".actions").find("button.btn--primary").focus().click();

		cy.contains("h2", "Pessoa Física");

		cy.get(".actions").find("button.btn--ghost").focus().click();

		cy.contains("h2", "Seja bem vindo(a)");
	});

	describe("step 2 of 4", () => {
		it("should show registration PF", () => {
			cy.visit("/registration");
			cy.contains("h2", "Seja bem vindo(a)");

			cy.get("input[name='email']").clear().type("email@gmail.com");
			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.contains("h2", "Pessoa Física");
			cy.contains("label", "Nome");
			cy.contains("label", "CPF");

			cy.get(".step").should("include.text", "Etapa 2 de 4");

			cy.get("input[name='name']")
				.focus()
				.blur()
				.next()
				.should("have.text", "Campo obrigatório");

			cy.get("input[name='document']")
				.focus()
				.blur()
				.next()
				.should("have.text", "Campo obrigatório");

			cy.get("input[name='date']")
				.focus()
				.blur()
				.next()
				.should("have.text", "Campo obrigatório");

			cy.get("input[name='phone']")
				.focus()
				.blur()
				.next()
				.should("have.text", "Campo obrigatório");

			cy.get("input[name='name']")
				.type("Nocab Almeida")
				.blur()
				.parents(".text-field")
				.should("not.have.class", "text-field--has-error");

			cy.get("input[name='document']")
				.type("33333333333")
				.blur()
				.next()
				.should("have.text", "CPF inválido");

			cy.get("input[name='document']")
				.clear()
				.type("59163759055")
				.blur()
				.parents(".text-field")
				.should("not.have.class", "text-field--has-error");

			cy.get("input[name='date']")
				.type("10302025")
				.blur()
				.next()
				.should("have.text", "Data inválida");

			cy.get("input[name='date']")
				.clear()
				.type("10051988")
				.blur()
				.parents(".text-field")
				.should("not.have.class", "text-field--has-error");

			cy.get("input[name='phone']")
				.type("11589475978")
				.blur()
				.next()
				.should("have.text", "Telefone inválido");

			cy.get("input[name='phone']")
				.clear()
				.type("11988888888")
				.blur()
				.parents(".text-field")
				.should("not.have.class", "text-field--has-error");
		});

		it("should show registration PJ", () => {
			cy.visit("/registration");
			cy.contains("h2", "Seja bem vindo(a)");

			cy.get("input[name='email']").clear().type("email@gmail.com");

			cy.get("[type='radio']").check("PJ", { force: true });
			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.contains("h2", "Pessoa Jurídica");
			cy.get(".step").should("include.text", "Etapa 2 de 4");

			cy.contains("label", "Razão Social");
			cy.contains("label", "CNPJ");

			cy.get("input[name='name']").type("Nocab Business");
			cy.get("input[name='document']")
				.type("12737605000141")
				.blur()
				.next()
				.should("have.text", "CNPJ inválido");

			cy.get("input[name='document']")
				.clear()
				.type("12737605000149")
				.blur()
				.parents(".text-field")
				.should("not.have.class", "text-field--has-error");

			cy.get("input[name='date']").type("10051988");
			cy.get("input[name='phone']").type("11988888888");

			cy.get(".actions").find("button.btn--primary").focus().click();
			cy.get(".step").should("include.text", "Etapa 3 de 4");
		});
	});

	it("should show registration step 3 of 4", () => {
		cy.visit("/registration");
		cy.get("input[name='email']").type("email@gmail.com");
		cy.get(".actions").find("button.btn--primary").focus().click();

		cy.get("input[name='name']").type("Nocab Almeida");
		cy.get("input[name='document']").type("59163759055");
		cy.get("input[name='date']").type("10051988");
		cy.get("input[name='phone']").type("11988888888");

		cy.get(".actions").find("button.btn--primary").focus().click();

		cy.contains("h2", "Senha de acesso");
		cy.get("input[name='password']")
			.type("1234567")
			.blur()
			.next()
			.should("have.text", "Deve conter no mínimo 8 digitos.");

		cy.get("input[name='password']")
			.type("8")
			.blur()
			.parents(".text-field")
			.should("not.have.class", "text-field--has-error");
	});

	describe("step 4 of 4", () => {
		it("should show alert unknown message error ", () => {
			cy.intercept("POST", "/registration", {
				forceNetworkError: true,
			}).as("failed");

			cy.visit("/registration");
			cy.get("input[name='email']").type("email@gmail.com");
			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='name']").type("Nocab Almeida");
			cy.get("input[name='document']").type("59163759055");
			cy.get("input[name='date']").type("10051988");
			cy.get("input[name='phone']").type("11988888888");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='password']").type("12345678");

			cy.get(".actions").find("button.btn--primary").focus().click();
			cy.get(".step").should("include.text", "Etapa 4 de 4");
			cy.contains("h2", "Revise suas informações");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.wait(["@failed"]);

			cy.get(".alert").should("have.class", "alert--error");
			cy.get(".alert--error")
				.find(".alert__text")
				.should(
					"include.text",
					"Ocorreu algum erro desconhecido. Tente novamente mais tarde."
				);
		});
		it("should show alert server error message error", () => {
			cy.intercept("POST", "/registration", {
				statusCode: 500,
			}).as("postRegistration");

			cy.visit("/registration");
			cy.get("input[name='email']").type("email@gmail.com");
			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='name']").type("Nocab Almeida");
			cy.get("input[name='document']").type("59163759055");
			cy.get("input[name='date']").type("10051988");
			cy.get("input[name='phone']").type("11988888888");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='password']").type("12345678");

			cy.get(".actions").find("button.btn--primary").focus().click();
			cy.get(".step").should("include.text", "Etapa 4 de 4");
			cy.contains("h2", "Revise suas informações");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.wait(["@postRegistration"]);

			cy.get(".alert").should("have.class", "alert--error");
			cy.get(".alert--error")
				.find(".alert__text")
				.should(
					"include.text",
					"Ocorreu algum erro. Tente novamente mais tarde."
				);
		});
		it("should show alert client error message error", () => {
			cy.intercept("POST", "/registration", {
				statusCode: 422,
			}).as("postRegistration");

			cy.visit("/registration");
			cy.get("input[name='email']").type("email@gmail.com");
			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='name']").type("Nocab Almeida");
			cy.get("input[name='document']").type("59163759055");
			cy.get("input[name='date']").type("10051988");
			cy.get("input[name='phone']").type("11988888888");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='password']").type("12345678");

			cy.get(".actions").find("button.btn--primary").focus().click();
			cy.get(".step").should("include.text", "Etapa 4 de 4");
			cy.contains("h2", "Revise suas informações");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.wait(["@postRegistration"]);

			cy.get(".alert").should("have.class", "alert--error");
			cy.get(".alert--error")
				.find(".alert__text")
				.should(
					"include.text",
					"Ocorreu algum erro no cadastro. Tente novamente."
				);
		});
		it("should show alert message success", () => {
			cy.intercept("POST", "/registration", {
				statusCode: 200,
			}).as("postRegistration");

			cy.visit("/registration");
			cy.get("input[name='email']").type("email@gmail.com");
			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='name']").type("Nocab Almeida");
			cy.get("input[name='document']").type("59163759055");
			cy.get("input[name='date']").type("10051988");
			cy.get("input[name='phone']").type("11988888888");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.get("input[name='password']").type("12345678");

			cy.get(".actions").find("button.btn--primary").focus().click();
			cy.get(".step").should("include.text", "Etapa 4 de 4");
			cy.contains("h2", "Revise suas informações");

			cy.get(".actions").find("button.btn--primary").focus().click();

			cy.wait(["@postRegistration"]);

			cy.get(".alert").should("have.class", "alert--success");
			cy.get(".alert--success")
				.find(".alert__text")
				.should("include.text", "Cadastro enviado com sucesso!");

			cy.get(".actions")
				.find("button.btn--primary")
				.should("include.text", "Reiniciar");

			cy.get(".actions").find("button.btn--primary").click();
			cy.get(".step").should("include.text", "Etapa 1 de 4");
		});
	});
});
