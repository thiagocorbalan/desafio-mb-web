export default {
	mounted(el) {
		const inputElement = el.querySelector("input");
		if (inputElement) inputElement.focus();
	},
};
