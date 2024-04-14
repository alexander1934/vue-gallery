import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "./components/AppLayout.vue";
import AppLogin from "./components/Login/AppLogin.vue";

const routes = [
	{ path: "/", component: AppLayout },
	{ path: "/login", component: AppLogin },
	{ path: "/liked", component: AppLayout },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
