import VRadio from "@/components/VRadio.vue";
import { shallowMount } from "@vue/test-utils";

jest.mock("@/utils/generateShortUUID", () => jest.fn(() => "abc123"));

describe("VRadio component", () => {
	it("should render component correctly", () => {
		const wrapper = shallowMount(VRadio, {
			props: {
				label: "PF",
			},
		});
		const inputRadioElement = wrapper.find("input[type=radio]");

		expect(wrapper.exists()).toBeTruthy();
		expect(wrapper.text()).toBe("PF");
		expect(inputRadioElement.attributes().id).toBe("radio-abc123");
	});
});
