import axios from "axios";
 export const baseUrl = "https://wbdv-sp21-swatin-server-node.herokuapp.com";
//export const baseUrl = "http://localhost:9090";
export default axios.create({
  baseURL: `${baseUrl}/api`
});
