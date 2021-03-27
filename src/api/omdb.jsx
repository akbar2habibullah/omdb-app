import axios from "axios";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "6d2a2796";

const fetchAPI = async ({ variables }) => {
  const res = await axios.get(API_URL, {
    params: {
      ...variables,
      apikey: API_KEY,
    },
  });

  return res.data;
};

export const getMovie = async (id) => {
  const data = await fetchAPI({
    variables: {
      i: id,
      plot: "full",
    },
  });

  return data;
};

export const getAllMovie = async ({ title, page = 1 }) => {
  const data = await fetchAPI({
    variables: {
      s: title,
      page,
    },
  });

  return data;
};
