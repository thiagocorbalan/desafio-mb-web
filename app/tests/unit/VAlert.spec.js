import VAlert from "@/components/VAlert.vue";
import { shallowMount } from "@vue/test-utils";

describe("VAlert.vue", () => {
	it("should renders component with slot filled", () => {
		const wrapper = shallowMount(VAlert, {
			slots: {
				default: "Cadastro com sucesso",
			},
		});

		expect(wrapper.text()).toBe("Cadastro com sucesso");
	});

	it("should render component with success style", () => {
		const wrapper = shallowMount(VAlert, {
			slots: {
				default: "Cadastro com sucesso",
			},
			props: { success: true },
		});

		expect(wrapper.classes("alert--success")).toBeTruthy();
		expect(wrapper.find("img.alert__icon--success").exists()).toBe(true);
	});

	it("should render component with error style", () => {
		const wrapper = shallowMount(VAlert, {
			props: { error: true },
		});

		expect(wrapper.classes("alert--error")).toBeTruthy();
		expect(wrapper.find("img.alert__icon--error").exists()).toBe(true);
	});
});
