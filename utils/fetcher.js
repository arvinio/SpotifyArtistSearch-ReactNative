export function get(url){
  return fetch(url).then((response) => response.json())
  .catch((error) => console.error("Fetch Error: " + error))
}

export function searchFor(query) {
  const requestUrl = (
    `https://api.spotify.com/v1/search?q=${"\"" + query + "\""}&type=artist`
  );
  return get(requestUrl).then((res) => {
    const artists = res.artists ? res.artists.items : []

    return artists
  })
}
