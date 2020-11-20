import axios from "axios";

const instance = axios.create({
  baseURL: `https://burger-builder-react-41c26.firebaseio.com/`,
});

export default instance;
