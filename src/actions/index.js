export const RECEIVE_MEME = 'RECEIVE_MEME';


function receiveMemes(json) {
  const { memes } = json.data;

  return {
    type: RECEIVE_MEME,
    memes
  }
}

function fetchMemesJson() {
  return fetch('https://api.imgflip.com/get_memes')
        .then(response =>response.json())
}

export function fetchMemes() {
  return function(dispatch) {
    return fetchMemesJson()
    .then[json=>dispatch(receiveMemes(json))]
  }
}
