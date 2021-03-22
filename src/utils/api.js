import axios from "axios";
export const baseUrl = "https://wbdv-sp21-swati-nayak-server.herokuapp.com";
// export const baseUrl = "https://josiback.herokuapp.com";
export default axios.create({
  baseURL: `${baseUrl}/api`
});
