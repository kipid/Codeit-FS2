import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';

const instance = axios.create({
	baseURL: `http://localhost:3100`,
});

instance.interceptors.request.use(function (config) {
	const user = localStorage.getItem("user");
	if (user) {
		const accessToken = JSON.parse(user).accessToken;
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
	_retry?: boolean;
}

const retryConfig: CustomAxiosRequestConfig = {
	_retry: true,
};

instance.interceptors.response.use(res => res, async (error) => {
	const originalRequest = error.config;
	const response = error.response; // 가로챈 리스폰스
	const user = localStorage.getItem("user");
	if (user && (response?.status === 401 || response?.status === 403)) {
		const userJSON = JSON.parse(user);
		if (!originalRequest._retry) {
			const res = await instance.post('/auth/refresh-token', { refreshToken: userJSON.refreshToken }, retryConfig);
			userJSON.accessToken = res.data.accessToken;
			userJSON.refreshToken = res.data.refreshToken;
			localStorage.setItem("user", JSON.stringify(userJSON));
			originalRequest._retry = true;
			return instance(originalRequest);
		} else {
			localStorage.removeItem("user");
			const router = useRouter();
			router.push('/login');
		}
	}
	return Promise.reject(error);
});

export default instance;
