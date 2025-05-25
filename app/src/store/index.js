import { createStore } from "vuex";

export default createStore({
	state: {
		registrationForm: {
			email: "",
			type: "PF",
			name: "",
			document: "",
			date: "",
			phone: "",
			password: "",
		},
	},
	getters: {
		registrationType(state) {
			return state.registrationForm.type;
		},
	},
	mutations: {
		resetRegistrationUserData(state) {
			state.registrationForm.name = "";
			state.registrationForm.document = "";
			state.registrationForm.date = "";
		},
		resetRegistrationForm(state) {
			state.registrationForm.email = "";
			state.registrationForm.type = "PF";
			state.registrationForm.name = "";
			state.registrationForm.document = "";
			state.registrationForm.date = "";
			state.registrationForm.phone = "";
			state.registrationForm.password = "";
		},
	},
	actions: {},
	modules: {},
});
