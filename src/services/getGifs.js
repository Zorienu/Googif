const API_KEY = "vklctwKmEwUBnrWW8w6e6Z1R9vwdeEwv";

export default function getGifs({ keyword }) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=r&lang=en`;
  return fetch(API_URL)
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
