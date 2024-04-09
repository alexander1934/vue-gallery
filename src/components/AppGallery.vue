<script setup lang="ts">
import { defineProps } from 'vue';

interface Image {
	id: number;
	url: string;
}

const props = defineProps<{
	images: Image[];
}>();
</script>

<template>
	<div class="gallery">
		<div class="gallery__layout">
			<div v-for="image in props.images" :key="image.id">
				<img class="object-cover w-full h-40 rounded-md" :src="image.url" :alt="'Image ' + image.id" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.gallery {
	@apply p-8;
}

.gallery__layout {
	@apply mx-auto grid grid-cols-autofill gap-10 w-full max-w-[1280px];
}
</style>