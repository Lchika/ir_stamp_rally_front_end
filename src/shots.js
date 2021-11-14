import Api from "./api"

export const getShots = async(from_id) => {
	try {
		const response = await Api.get(`/shots?from_id=${from_id}`);
		return response;
	} catch (err) {
		console.log(err);
	}
};

