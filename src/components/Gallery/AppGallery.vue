<script setup lang="ts">
import GalleryImage from "./GalleryImage.vue";

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
			<GalleryImage
				v-for="image in props.images"
				v-bind:image="image"
				:key="image.id"
			/>
		</div>
	</div>
</template>

<style scoped>
.gallery {
	@apply p-8;
}

.gallery__layout {
	@apply mx-auto grid w-full max-w-[1280px] grid-cols-autofill gap-10;
}
</style>
