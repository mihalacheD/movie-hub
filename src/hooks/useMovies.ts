import options from "@/services/api-client";
import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";

export interface Movie {
  id: number,
  title: string,
  poster_path: string
}

interface FetchMoviesResponse {
  count: number,
  results: Movie[]
}

const useMovies = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');


  useEffect(() => {

    const controller = new AbortController();

    axios.get<FetchMoviesResponse>(options.url,
      {headers: options.headers, params :options.params, signal :controller.signal})
             .then((res) => {
              const filteredMovies = res.data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
              }));
              setMovies(filteredMovies);
             })
             .catch(error => {
              if (error instanceof CanceledError) return;
              setError(error.message)
             })

             return () => controller.abort()
  }, []);
  return { movies, error}
}

export default useMovies
