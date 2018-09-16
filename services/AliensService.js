import {AsyncStorage} from "react-native";

const baseUrl = "https://aliens-app.herokuapp.com/api/v1";
export const loadAliens = async (page, per_page) => {
	const res = await fetch(`${baseUrl}/admin/alliens?per_page=8&page=${page}`, {
		headers: {
			Authorization: await AsyncStorage.getItem("id_token"),
			"Content-Type": "application/json"
		}
	});
	let responseJson = await res.json();
	return responseJson;
};
export const loadAliens_Main = async () => {
	const res = await fetch(`${baseUrl}/admin/alliens`, {
		headers: {
			Authorization: await AsyncStorage.getItem("id_token"),
			"Content-Type": "application/json"
		}
	});
	let responseJson = await res.json();
	return responseJson;
};

export const getAlien = async id => {
	const res = await fetch(`${baseUrl}/user/alliens/${id}`, {
		headers: {
			Authorization: await AsyncStorage.getItem("id_token"),
			"Content-Type": "application/json"
		}
	});
	let responseJson = await res.json();
	return responseJson;
};

export const createAlien = async formData => {
	const res = await fetch(`${baseUrl}/admin/alliens`, {
		method: "POST",
		body: formData,
		headers: {
			Authorization: await AsyncStorage.getItem("id_token"),
			"Content-Type": "application/json"
		}
	});
	let responseJson = await res.json();
	return responseJson;
};

export const deleteAlien = async alien_id => {
	const res = await fetch(`${baseUrl}/admin/alliens/${alien_id}`, {
		method: "DELETE",
		headers: {
			Authorization: await AsyncStorage.getItem("id_token"),
			"Content-Type": "application/json"
		}
	});
	let responseJson = await res.json();
	return responseJson;
};

export const updateAlien = async (alien_id, name, desc, image) => {
	const res = await fetch(`${baseUrl}/admin/alliens/${alien_id}`, {
		method: "PATCH",
		body: JSON.stringify({
			name,
			desc,
			image
		}),
		headers: {
			Authorization: await AsyncStorage.getItem("id_token"),
			"Content-Type": "application/json"
		}
	});
	let responseJson = await res.json();
	return responseJson;
};
