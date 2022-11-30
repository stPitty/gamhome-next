import axios from "axios";
import { Url } from "../config_enums/url.enum";

const axiosInstance = axios.create({
  baseURL: Url.CLIENT_PATH,
  timeout: 1000,
});

export { axiosInstance };
