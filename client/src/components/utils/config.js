import axios from 'axios';

export const googleMapApiKey = "AIzaSyCZsYz3RtR70-Jz3lgHYatmwjmOzmBDOoM";
export default axios.create({
  baseURL: `https://forkify-api.herokuapp.com/api`,
});

