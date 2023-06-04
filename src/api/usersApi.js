import axios from "axios";

axios.defaults.baseURL = "https://64799593a455e257fa635da5.mockapi.io";

export const getUsers = async (page = 1) => {
  try {
    const res = await axios.get(`/users?limit=6&page=${page}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`/users`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSortedUsers = async (query) => {
  try {
    const res = await axios.get(`/users?follow=${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSortedUsers = async (query, page) => {
  try {
    const res = await axios.get(`/users?limit=6&page=${page}&follow=${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateFollowUser = async (id) => {
  try {
    const res = await axios.put(`/users/${id}`, { follow: true });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUnfollowUser = async (id) => {
  try {
    const res = await axios.put(`/users/${id}`, { follow: false });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
