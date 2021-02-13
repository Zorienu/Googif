import { API_KEY, API_URL } from "./settings";

export default function getGifById(id) {
  const url = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      const { title, images, import_datetime: date } = data;
      const { url } = images.downsized_medium;
      return { title, url, date };
    });
}
