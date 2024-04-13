<script setup lang="ts">
import AppHeader from "./Header/AppHeader.vue";
import AppGallery from "./Gallery/AppGallery.vue";
import { User } from "../interfaces/interfaces.ts";
import { onMounted, ref } from "vue";
import { useGetQuery } from "../helpers/useGetQuery.ts";

const currUserString: string | null = localStorage.getItem("user");
let currUser: User | null = null;
let authStatus = false;

if (currUserString !== null) {
	currUser = JSON.parse(currUserString);
	authStatus = true;
}

const userName: string =
	currUser === null ? "" : currUser.firstName + " " + currUser.lastName;

const images = ref<any[]>([]);
console.log(images)

onMounted(()=> {
	useGetQuery('https://jsonplaceholder.typicode.com/photos?albumId=1', images);
})

</script>

<template>
	<AppHeader
		:authStatus="authStatus"
		:username="userName"
		avatar="https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200" />
	<AppGallery v-if="images.length !== 0" :authStatus="authStatus" :images="images" />
</template>

<style scoped></style>
