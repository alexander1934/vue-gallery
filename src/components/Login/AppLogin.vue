<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// Получаем объект маршрутизатора
const router = useRouter();

// Создаем реактивные переменные для хранения данных о пользователе
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

// Функция для сохранения данных пользователя в локальное хранилище и перехода на главную страницу
const setUser = () => {
	const User = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		password: password.value,
	};
	localStorage.setItem("user", JSON.stringify(User));
	router.push("/"); // Переходим на главную страницу
};
</script>

<template>
	<div class="form__layout">
		<div class="form__container">
			<h1 class="form__title">Войти</h1>
			<form action="" class="form">
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
				<button class="form__button" @click="setUser">
					Продолжить
				</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
.form__layout {
	@apply flex h-screen items-center justify-center;
}

.form__container {
	@apply rounded-lg bg-[#0D1117] px-12 py-8;
}

.form__title {
	@apply mb-10 text-3xl;
}

.form {
	@apply flex flex-col gap-4;
}

.form__input {
	@apply w-[300px] rounded-md bg-gray-900 p-4;
}

.form__button {
	@apply bg-green-600;
}
</style>
