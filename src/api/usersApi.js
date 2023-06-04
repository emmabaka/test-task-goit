import axios from "axios";

axios.defaults.baseURL = "https://64799593a455e257fa635da5.mockapi.io";

export const getUsers = async (page = 1) => {
  const res = await axios.get(`/users?limit=6&page=${page}`);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axios.get(`/users`);
  return res.data;
};

export const getAllSortedUsers = async (query) => {
  const res = await axios.get(`/users?follow=${query}`);
  return res.data;
};

export const getSortedUsers = async (query, page) => {
  const res = await axios.get(`/users?limit=6&page=${page}&follow=${query}`);
  return res.data;
};

export const updateFollowUser = async (id) => {
  const res = await axios.put(`/users/${id}`, { follow: true });
  return res.data;
};

export const updateUnfollowUser = async (id) => {
  const res = await axios.put(`/users/${id}`, { follow: false });
  return res.data;
};
