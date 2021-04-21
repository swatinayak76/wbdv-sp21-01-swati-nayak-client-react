import axios from "axios";
// export const baseUrl = "https://wbdv-sp21-swati-nayak-server.herokuapp.com";
export const baseUrl = "http://localhost:9090";
export default axios.create({
  baseURL: `${baseUrl}/api`
});
