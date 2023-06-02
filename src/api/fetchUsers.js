import axios from "axios";

axios.defaults.baseURL = "https://64799593a455e257fa635da5.mockapi.io";

export const fetchUsers = async (page = 1) => {
  const res = await axios.get(`/users?limit=6&page=${page}`);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axios.get(`/users`);
  return res.data;
};
