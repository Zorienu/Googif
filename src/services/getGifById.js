const API_KEY = "vklctwKmEwUBnrWW8w6e6Z1R9vwdeEwv";

export default function getGifById(id) {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then(({ data }) => {
      const { title, images, import_datetime: date } = data;
      const { url } = images.downsized_medium;
      return { title, url, date };
    });
}
