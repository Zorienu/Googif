import { API_KEY, API_URL } from "./settings";

export default function getGifs({ keyword, limit = 9, page = 0 }) {
  const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=r&lang=en`;
  return fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      const gifs = data.map((gif) => {
        const { images, title, id } = gif;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });

      return gifs;
    });
}
