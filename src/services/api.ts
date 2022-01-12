import axios from "axios";
import { config } from "../global/config";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    authorization: `Bearer ${config.CLASHROYALE_TOKEN_API}`,
  },
});
