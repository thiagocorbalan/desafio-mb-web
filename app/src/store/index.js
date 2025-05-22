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
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
