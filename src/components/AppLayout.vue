<script setup lang="ts">
import AppHeader from "./Header/AppHeader.vue";
import AppGallery from "./Gallery/AppGallery.vue";
import { Image, User } from "../interfaces/interfaces.ts";
import { ref, watchEffect } from "vue";
import { useGetQuery } from "../helpers/useGetQuery.ts";
import AppNav from "./AppNav.vue";
import { useRoute } from "vue-router";

// Получаем текущий маршрут из Vue Router
const route = useRoute();

// Получаем текущего пользователя и статус авторизации из локального хранилища
const currUserString: string | null = localStorage.getItem("user");
let currUser: User | null = null;
let authStatus = false;

if (currUserString != null) {
	currUser = JSON.parse(currUserString);
	authStatus = true;
}

// Генерируем имя пользователя для отображения
const userName: string =
	currUser === null ? "" : currUser.firstName + " " + currUser.lastName;

// Создаем реактивную переменную для хранения списка изображений
const images = ref<Image[]>([]);

// Получаем количество понравившихся изображений из локального хранилища
const likeCounter = JSON.parse(localStorage.getItem("likedImages") || "[]");

// Следим за изменениями в маршруте
watchEffect(() => {
	if (route.fullPath === "/liked") {
		// Если текущий маршрут - страница с понравившимися изображениями, получаем их из локального хранилища
		images.value = JSON.parse(localStorage.getItem("likedImages") || "[]");
	} else {
		// В противном случае, выполняем запрос для получения изображений
		useGetQuery(
			"https://jsonplaceholder.typicode.com/photos?albumId=1",
			images,
		);
	}
});
</script>

<template>
	<AppHeader :authStatus="authStatus" :username="userName" />
	<AppNav
		:authStatus="authStatus"
		:likeCounter="likeCounter ? likeCounter.length : 0" />
	<AppGallery
		v-if="images.length !== 0"
		:authStatus="authStatus"
		:images="images" />
</template>

<style scoped></style>
