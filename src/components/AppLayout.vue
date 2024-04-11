<script setup lang="ts">
import AppHeader from "./Header/AppHeader.vue";
import AppGallery from "./Gallery/AppGallery.vue";
import { User } from "../interfaces/interfaces.ts";

const currUserString: string | null = localStorage.getItem("user");
let currUser: User | null = null;
let authStatus = false;

if (currUserString !== null) {
	currUser = JSON.parse(currUserString);
	authStatus = true;
}

const userName: string =
	currUser === null ? "" : currUser.firstName + " " + currUser.lastName;

const images = [
	{
		id: 1,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
	{
		id: 2,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
	{
		id: 3,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
	{
		id: 4,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
	{
		id: 5,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
	{
		id: 6,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
	{
		id: 7,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
	{
		id: 8,
		url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200",
	},
];
</script>

<template>
	<AppHeader
		:authStatus="authStatus"
		:username="userName"
		avatar="https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200" />
	<AppGallery :authStatus="authStatus" :images="images" />
</template>

<style scoped></style>
