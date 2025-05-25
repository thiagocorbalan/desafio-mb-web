import VTextField from "@/components/VTextField.vue";
import { shallowMount } from "@vue/test-utils";

describe("VTextField component", () => {
	it("should render component correctly", () => {
		const wrapper = shallowMount(VTextField);

		expect(wrapper.classes()).toEqual(["text-field"]);
		expect(wrapper.find("label").text()).toBe("Label");
		expect(
			wrapper.find(".text-field__error-message").isVisible()
		).toBeFalsy();
	});

	it("should show error message when validate rule is invalid", async () => {
		const wrapper = shallowMount(VTextField, {
			props: {
				rules: [(value) => value === "abc" || "Aconteceu algum erro"],
			},
		});

		const textInput = wrapper.find("input");

		await textInput.setValue("abcd");
		await textInput.trigger("blur");

		expect(wrapper.classes()).toEqual([
			"text-field",
			"text-field--has-error",
		]);
		expect(
			wrapper.find(".text-field__error-message").isVisible()
		).toBeTruthy();
	});

	it("should hide error message when validate rule is valid", async () => {
		const wrapper = shallowMount(VTextField, {
			props: {
				rules: [(value) => value === "abc" || "Aconteceu algum erro"],
			},
		});

		const textInput = wrapper.find("input");

		await textInput.setValue("abc");
		await textInput.trigger("blur");

		expect(wrapper.classes()).toEqual(["text-field"]);
		expect(
			wrapper.find(".text-field__error-message").isVisible()
		).toBeFalsy();
	});
});
