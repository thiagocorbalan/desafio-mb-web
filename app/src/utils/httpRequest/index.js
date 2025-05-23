const API_URL = "http://localhost:3000";

export const post = async (url, data, customOptions = {}) => {
	const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	};

	const finalOptions = Object.assign(options, customOptions);

	return fetch(`${API_URL}${url}`, finalOptions).then((res) => {
		if (!res.ok) throw new Error(res.text());
		return res.json();
	});
};
