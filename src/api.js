import axios from "axios";

const axiosAPI = axios.create({
	baseURL: "http://192.168.100.121:8000/"
});

const apiRequest = (method, url, request) => {
	const headers = {};
	return axiosAPI({
		method,
		url,
		data: request,
		headers
	}).then(res => {
		return Promise.resolve(res.data);
	})
	.catch(err => {
		return Promise.reject(err);
	});
};

const getRequest = (url, request) => apiRequest("get", url, request);

const deleteRequest = (url, request) => apiRequest("delete", url, request);

const postRequest = (url, request) => apiRequest("post", url, request);

const API = {
	get: getRequest,
	delete: deleteRequest,
	post: postRequest
};
export default API;

