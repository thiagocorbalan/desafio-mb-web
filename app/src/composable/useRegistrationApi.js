import { ref } from "vue";
import { post } from "@/utils/httpRequest";
import httpStatusCode from "@/utils/httpStatusCode";

const MESSAGES = {
	SUCCESS: "Cadastro enviado com sucesso!",
	CLIENT_ERROR: "Ocorreu algum erro no cadastro. Tente novamente.",
	SERVER_ERROR: "Ocorreu algum erro. Tente novamente mais tarde.",
	UNKNOWN: "Ocorreu algum erro desconhecido. Tente novamente mais tarde.",
};

export const useRegistrationApi = () => {
	const loading = ref(false);
	const error = ref(null);
	const success = ref(null);

	const register = async (url, payload) => {
		loading.value = true;
		error.value = null;
		success.value = null;

		const { ok, status } = await post(url, payload).finally(
			() => (loading.value = false)
		);

		if (ok) return (success.value = MESSAGES.SUCCESS);

		if (
			status >= httpStatusCode.BadRequest &&
			status <= httpStatusCode.InternalServerError
		) {
			return (error.value = MESSAGES.CLIENT_ERROR);
		}

		if (status >= httpStatusCode.InternalServerError) {
			return (error.value = MESSAGES.SERVER_ERROR);
		}

		return (error.value = MESSAGES.UNKNOWN);
	};

	return {
		loading,
		error,
		success,
		register,
	};
};
