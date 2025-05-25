const BASE_API_URL = "http://localhost:3000";

const fetcher = async (url, options) => {
	try {
		const finalURL = BASE_API_URL + url;
		const response = await fetch(finalURL, options);

		if (!response.ok) return { ok: false, status: response.status };

		const contentType = response.headers.get("content-type");
		const isJson = contentType?.includes("application/json");
		const data = isJson ? await response.json() : await response.text();

		return { ok: true, status: response.status, data };
	} catch (error) {
		return {
			ok: false,
			status: 0,
			error: error.message || "Erro desconhecido",
		};
	}
};

export const post = (url, data, customOptions = {}) => {
	const options = Object.assign(
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		},
		customOptions
	);

	return fetcher(url, options);
};
