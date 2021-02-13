import { API_KEY, API_URL } from "./settings";

const getTrendingTerms = () => {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(url)
    .then((res) => res.json())
    .then(({ data }) => data);
};

export default getTrendingTerms;
