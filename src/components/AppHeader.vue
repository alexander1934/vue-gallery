<script setup lang="ts"></script>

<template>
	<header class="header">
		<div class="header__layout">
			<div class="header__block">
				<img class="w-14" src="../assets/appIcon.svg" alt="" />
				<h1 class="header__title">Vue Gallery</h1>
			</div>
			<div class="header__block">
				<span>Alexander Kovalenko</span>
				<img
					class="header__avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/%D0%A1%D0%B8%D0%BD%D0%B5-%D0%B6%D1%91%D0%BB%D1%82%D1%8B%D0%B9_%D0%B0%D1%80%D0%B0_%28Ara_ararauna%29.jpg/275px-%D0%A1%D0%B8%D0%BD%D0%B5-%D0%B6%D1%91%D0%BB%D1%82%D1%8B%D0%B9_%D0%B0%D1%80%D0%B0_%28Ara_ararauna%29.jpg"
					alt="avatar"
				/>
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
