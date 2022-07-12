import axios from "axios";

/* Will be used to fetch data in the external files. */
export const baseUrl = "https://bayut.p.rapidapi.com/";

/* Fetch the data frpm API. */
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "0924d117afmsh0d754a6f73fb286p10e53ejsne6725ef39b07",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
