import axios from "axios";

const url = process.env.REACT_APP_API;

export const api = axios.create({
  baseURL: `${url}/api`,
});
