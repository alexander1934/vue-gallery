<script setup lang="ts">
const props = defineProps({
	authStatus: Boolean,
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
			<div class="header__block" v-if="props.authStatus === true">
				<span>{{ props.username }}</span>
				<img class="header__avatar" :src="props.avatar" alt="avatar" />
			</div>
			<RouterLink to="/login" class="header__block group" v-else>
				<span class="header__sign-in-text">Войти</span>
				<div class="header__sign-in">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						class="header__sign-in-svg">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
					</svg>
				</div>
			</RouterLink>
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
	@apply flex items-center gap-3 text-white;
}

.header__title {
	@apply hidden text-2xl sm:block;
}

.header__avatar {
	@apply h-14 w-14 rounded-full object-cover;
}

.header__sign-in-text {
	@apply text-white group-hover:text-green-400;
}

.header__sign-in {
	@apply h-6 w-6;
}

.header__sign-in-svg {
	@apply max-w-none stroke-white group-hover:stroke-green-400;
}
</style>
