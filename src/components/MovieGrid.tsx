import { useEffect, useState } from "react";
import axios from 'axios';
import options from "@/services/api-client";


interface Movie {
  id: number,
  title: string
}

interface FetchMoviesResponse {
  count: number,
  results: Movie[]
}

const MovieGrid = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setErorr] = useState('');


  useEffect(() => {
    axios.get<FetchMoviesResponse>(options.url, {headers: options.headers, params :options.params})
             .then((res) => {
              const filteredMovies = res.data.results.map((movie) => ({
                id: movie.id,
                title: movie.title
              }));
              setMovies(filteredMovies);
             })
             .catch(error => setErorr(error.message))
  }, [])

  return (
    <>
    {error && <p>{error}</p>}
    <ul>
      {movies.map( movie => <li key={movie.id}>{movie.title}</li>)}
    </ul>
    </>
  )
}

export default MovieGrid
