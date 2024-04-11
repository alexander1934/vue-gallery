<script setup lang="ts">
import { Image } from "../../interfaces/interfaces.ts";

const props = defineProps<{
	image: Image;
}>();
</script>

<template>
	<div
		:style="{ 'background-image': `url(${props.image.url})` }"
		class="gallery__image-layout group"
	>
		<img class="gallery__image" src="../../assets/like.svg" alt="" />
	</div>
</template>

<style scoped>
.gallery__image-layout {
	@apply relative flex min-w-[68px] items-center justify-center rounded-md bg-cover pb-[100%] transition-opacity hover:opacity-80 md:h-[124px];
}

.gallery__image {
	@apply absolute top-[calc(50%-12px)] hidden h-6 w-6 group-hover:inline;
}
</style>
