import axios from "axios";
import { localStorageAction } from "./localstorage";

axios.defaults.baseURL = "http://localhost:8000/api";

export const sendRequest = async ({
  method = "GET",
  route,
  body,
  includeHeaders = true,
}) => {
  if (!route) throw Error("URL required");

  axios.defaults.headers.authorization = includeHeaders
    ? `Bearer ${localStorage.getItem("token")}`
    : "";

  try {
    const response = await axios.request({
      method,
      url: route,
      data: body,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
