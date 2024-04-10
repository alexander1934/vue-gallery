<script setup lang="ts">
const props = defineProps({
	username: String,
	avatar: String,
});
</script>

<template>
	<header class="header">
		<div class="header__layout">
			<div class="header__block">
				<img class="w-14" src="../../assets/appIcon.svg" alt="" />
				<h1 class="header__title">Vue Gallery</h1>
			</div>
			<div class="header__block">
				<span>{{ props.username }}</span>
				<img class="header__avatar" :src="props.avatar" alt="avatar" />
			</div>
		</div>
	</header>
</template>

<style scoped>
.header {
	@apply flex items-center justify-between bg-[#0D1117] p-8;
}

.header__layout {
	@apply mx-auto flex w-full max-w-[1280px] items-center justify-between;
}

.header__block {
	@apply flex items-center gap-3;
}

.header__title {
	@apply hidden text-2xl sm:block;
}

.header__avatar {
	@apply h-14 w-14 rounded-full object-cover;
}
</style>
