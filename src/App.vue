<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppGallery from "./components/AppGallery.vue";
const images = [
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
	{id: 1, url: "https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"},
]
</script>

<template>
	<AppHeader
		username="Alexander Kovalenko"
		avatar="https://avatars.dzeninfra.ru/get-zen_doc/1593402/pub_629e9810047dbe7b069cadaa_629e98395b1e03369b73d25a/scale_1200"
	/>
	<AppGallery v-bind:images="images" />
</template>

<style scoped></style>
