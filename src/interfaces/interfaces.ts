export interface Image {
	id: number;
	albumId: number;
	thumbnailUrl: string;
	title: string;
	url: string;
}

export interface User {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
