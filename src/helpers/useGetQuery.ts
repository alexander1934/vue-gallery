import axios from "axios";

export const useGetQuery = (url: string, array: any) => {
	axios
		.get(url)
		.then(function (response) {
			// обработка успешного запроса
			array.value = response.data;
		})
		.catch(function (error) {
			// обработка ошибки
			console.log(error);
		});
};
