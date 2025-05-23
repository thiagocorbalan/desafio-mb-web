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
		},
	},
	actions: {},
	modules: {},
});
