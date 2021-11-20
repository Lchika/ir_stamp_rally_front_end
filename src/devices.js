import Api from "./api"

export const getDevices = async() => {
	try {
		const response = await Api.get(`/devices`);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const deleteDevices = async() => {
  try {
    const response = await Api.delete("/devices");
    return response;
  } catch (err) {
    console.log(err);
  }
}