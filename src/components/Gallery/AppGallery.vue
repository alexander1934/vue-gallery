<script setup lang="ts">
import GalleryImage from "./GalleryImage.vue";
import { Image } from "../../interfaces/interfaces.ts";
import { ref, watchEffect } from "vue";

const props = defineProps<{
	images: Image[];
	authStatus: Boolean;
}>();

const likedImageArray = ref<Image[]>(
	JSON.parse(localStorage.getItem("likedImages") || "[]"),
);
const likedImagesId = ref<number[]>(
	likedImageArray.value.map((image) => image.id),
);

function likeImage(image: Image) {
	likedImageArray.value.push(image);
	localStorage.setItem("likedImages", JSON.stringify(likedImageArray.value));
}

watchEffect(() => {
	likedImagesId.value = likedImageArray.value.map((image) => image.id);
});
</script>

<template>
	<div class="gallery">
		<div class="gallery__layout" v-if="props.authStatus === true">
			<GalleryImage
				v-for="image in props.images"
				:image="image"
				:likedImages="likedImagesId"
				:likeHandler="likeImage"
				:key="image.id" />
		</div>
		<span v-else>
			Чтобы посмотреть галерею, вы должны
			<RouterLink to="/login" class="gallery__login-text">
				войти в систему
			</RouterLink>
		</span>
	</div>
</template>

<style scoped>
.gallery {
	@apply p-8;
}

.gallery__layout {
	@apply mx-auto grid w-full max-w-[1280px] grid-cols-autofill gap-10;
}

.gallery__login-text {
	@apply text-white underline hover:text-green-400;
}
</style>
