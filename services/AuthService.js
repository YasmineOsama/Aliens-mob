import decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';

export default class AuthService {
	constructor(domain) {
		this.domain = domain || 'https://aliens-app.herokuapp.com/api/v1';
		this.fetch = this.fetch.bind(this);
		this.login = this.login.bind(this);
		this.getProfile = this.getProfile.bind(this);
	}

	login(email, password) {
		return this.fetch(`${this.domain}/login`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
		}).then(res => {
			this.setToken(res.auth_token);
			return Promise.resolve(res);
		});
	}

	loggedIn() {
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token);
	}

	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				return true;
			} else return false;
		} catch (err) {
			return false;
		}
	}

	setToken(idToken) {
		AsyncStorage.setItem('id_token', idToken);
	}

	async getToken() {
		return await AsyncStorage.getItem('id_token');
	}

	logout() {
		AsyncStorage.removeItem('id_token');
		if (AsyncStorage.getItem('id_token')) {
			return true;
		}
		return false;
	}

	async getProfile() {
		return decode(await this.getToken());
	}

	fetch(url, options) {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		};

		if (this.loggedIn()) {
			headers['Authorization'] = 'Bearer ' + this.getToken();
		}

		return fetch(url, {
			headers,
			...options
		})
			.then(this._checkStatus)
			.then(response => response.json());
	}

	_checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			let error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	}
}
