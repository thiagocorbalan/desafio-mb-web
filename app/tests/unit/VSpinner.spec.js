import VSpinner from "@/components/VSpinner.vue";
import { shallowMount } from "@vue/test-utils";

describe("VSpinner component", () => {
	it("should render component correctly", () => {
		const wrapper = shallowMount(VSpinner);

		expect(wrapper.html()).toBe('<div class="spinner"></div>');
	});
});
