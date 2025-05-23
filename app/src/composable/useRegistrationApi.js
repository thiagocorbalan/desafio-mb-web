import { ref } from "vue";
import { post } from "@/utils/httpRequest";

export function useRegistrationApi() {
	const loading = ref(false);
	const error = ref(null);

	const postData = async (url, payload) => {
		loading.value = true;
		error.value = null;

		return await post(url, payload)
			.catch((err) => {
				console.log(">>>", err);
				error.value = err.message;
			})
			.finally(() => (loading.value = false));
	};

	return {
		loading,
		error,
		postData,
	};
}
