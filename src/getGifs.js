const apiKey = `BHvAMCPWqkJnRMnN1xoocj8fzCGVQBDf`


export default function getGifs({keyword}) {
  const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=2&rating=g&lang=en`;
  return fetch(urlApi)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        if (Array.isArray(data)) {
          const gifs = data.map(image => {
            const {images, title, id} = image
            const url = images.downsized_medium.url;
            return {title, id, url}
          })
          return gifs
        }
    }
)}
