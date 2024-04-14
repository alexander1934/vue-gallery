<script setup lang="ts">
import AppHeader from "./Header/AppHeader.vue";
import AppGallery from "./Gallery/AppGallery.vue";
import { Image, User } from "../interfaces/interfaces.ts";
import { ref, watchEffect } from "vue";
import { useGetQuery } from "../helpers/useGetQuery.ts";
import AppNav from "./AppNav.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currUserString: string | null = localStorage.getItem("user");
let currUser: User | null = null;
let authStatus = false;

if (currUserString != null) {
	currUser = JSON.parse(currUserString);
	authStatus = true;
}

const userName: string =
	currUser === null ? "" : currUser.firstName + " " + currUser.lastName;

const images = ref<Image[]>([]);

const likeCounter = JSON.parse(localStorage.getItem("likedImages") || "[]");

watchEffect(() => {
	if (route.fullPath === "/liked") {
		images.value = JSON.parse(localStorage.getItem("likedImages") || "[]");
	} else {
		useGetQuery(
			"https://jsonplaceholder.typicode.com/photos?albumId=1",
			images,
		);
	}
});
</script>

<template>
	<AppHeader :authStatus="authStatus" :username="userName" />
	<AppNav :likeCounter="likeCounter ? likeCounter.length : 0" />
	<AppGallery
		v-if="images.length !== 0"
		:authStatus="authStatus"
		:images="images" />
</template>

<style scoped></style>
