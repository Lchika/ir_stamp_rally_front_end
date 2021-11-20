import API from "./api";
import Api from "./api"

export const getPoints = async(from_id) => {
	try {
		const response = await Api.get(`/points?from_id=${from_id}`);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const deletePoints = async() => {
  try {
    const response = await Api.delete("/points");
    return response;
  } catch (err) {
    console.log(err);
  }
}