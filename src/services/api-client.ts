
const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3`,
  params: {language: 'en'},
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`

  }
};

export default options;

/*const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc'
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };*/

