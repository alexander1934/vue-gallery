<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const setUser = () => {
	const User = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		password: password.value,
	};
	localStorage.setItem("user", JSON.stringify(User));
	router.push("/");
};
</script>

<template>
	<div class="flex h-screen items-center justify-center">
		<div class="rounded-lg bg-[#0D1117] p-12">
			<h1 class="mb-10 text-3xl">Войти</h1>
			<form action="" class="flex flex-col gap-4">
				<input
					v-model="firstName"
					class="form__input"
					placeholder="Имя"
					type="text" />
				<input
					v-model="lastName"
					class="form__input"
					placeholder="Фамилия"
					type="text" />
				<input
					v-model="email"
					class="form__input"
					placeholder="Почта"
					type="text" />
				<input
					v-model="password"
					class="form__input"
					placeholder="Пароль"
					type="text" />
				<button class="bg-green-600" @click="setUser">
					Продолжить
				</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
.form__input {
	@apply rounded-md bg-gray-900 p-4;
}
</style>
