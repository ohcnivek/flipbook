import axios from "axios";

export const BASE_URL = "http://localhost:3001";

export async function getVideoInfo(videoID) {
  const PATH = `/video/${videoID}`;
  return await axios.get(BASE_URL + PATH);
}
