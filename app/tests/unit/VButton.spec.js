import VButton from "@/components/VButton.vue";
import { shallowMount } from "@vue/test-utils";
import VSpinner from "@/components/VSpinner.vue";

describe("VButton component", () => {
	it("should render component with default style and slot filled", () => {
		const wrapper = shallowMount(VButton, {
			slots: {
				default: "Continuar",
			},
		});
		const spinner = wrapper.findComponent(VSpinner);

		expect(wrapper.text()).toBe("Continuar");
		expect(wrapper.classes("btn--primary")).toBeTruthy();
		expect(wrapper.attributes("aria-live")).toBeUndefined();
		expect(wrapper.attributes("aria-busy")).toBeUndefined();
		expect(wrapper.attributes("disabled")).toBeUndefined();
		expect(spinner.exists()).toBeFalsy();
	});

	it("should render component ghost style when set color to ghost", () => {
		const wrapper = shallowMount(VButton, {
			slots: {
				default: "Continuar",
			},
			props: {
				loading: true,
				color: "ghost",
			},
		});

		expect(wrapper.classes("btn--ghost")).toBeTruthy();
	});

	it("should render spinner when loading props is defined", () => {
		const wrapper = shallowMount(VButton, {
			slots: {
				default: "Continuar",
			},
			props: {
				loading: true,
				color: "ghost",
			},
		});
		const spinner = wrapper.findComponent(VSpinner);

		expect(wrapper.text()).toBe("");
		expect(wrapper.attributes("aria-live")).toBeTruthy();
		expect(wrapper.attributes("aria-busy")).toBeTruthy();
		expect(wrapper.attributes("disabled")).toBe("");
		expect(spinner.exists()).toBeTruthy();
	});
});
