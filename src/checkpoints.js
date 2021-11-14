import Api from "./api"

export const getCheckpoints = async(checkpoint_id) => {
	try {
		const response = await Api.get(`/checkpoints?checkpoint_id=${checkpoint_id}`);
		return response;
	} catch (err) {
		console.log(err);
	}
};

