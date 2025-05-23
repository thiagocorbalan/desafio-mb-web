<script setup>
import { computed, ref } from "vue";
import RegistrationView from "./views/RegistrationView.vue";
import NotFound from "./views/NotFound.vue";

const routes = {
	"/registration": RegistrationView,
};

const currentPath = ref(window.location.pathname);

const currentView = computed(() => {
	return routes[currentPath.value || "/"] || NotFound;
});
</script>

<template>
	<component :is="currentView" />
</template>
