<script setup lang="ts">
const props = defineProps<{
	likeCounter: number;
}>();
</script>

<template>
	<nav
		class="mx-auto my-4 flex w-full max-w-[1280px] items-center justify-between">
		<RouterLink to="/" class="w-full border-x">Все</RouterLink>
		<RouterLink to="/liked" class="w-full border-r"
			>Понравившиеся ({{ props.likeCounter }})</RouterLink
		>
		<!--		<div class="w-full border-x">Папки</div>-->
	</nav>
</template>

<style scoped></style>
