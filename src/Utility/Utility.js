import config from "../Config/Config";
import axios from "axios";
export async function GetAllRepositories(username, page) {
  let responseCode = 200;
  let response = await axios
    .get(`${config.get("BaseURL")}/${username}/repos?page=${page}&per_page=4`)
    .catch((err) => (responseCode = err.response.status));

  if (responseCode === 200) {
    return [responseCode, response];
  } else {
    return [responseCode];
  }
}
export async function GetUserProfile(username) {
  let responseCode = 200;
  let response = await axios
    .get(`${config.get("BaseURL")}/${username}`)
    .catch((err) => (responseCode = err.response.status));

  if (responseCode === 200) {
    return [responseCode, response];
  } else {
    return [responseCode];
  }
}
