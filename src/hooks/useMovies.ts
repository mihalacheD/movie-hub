import options from "@/services/api-client";
import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { Genre } from "./useGenres";

export interface Movie {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number
}

interface FetchMoviesResponse {
  count: number,
  results: Movie[]
}

const useMovies = ( selectedGenre: Genre | null) => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {

    const controller = new AbortController();

    setLoading(true);

    axios.get<FetchMoviesResponse>(`${options.url}/discover/movie`, {
      ...options,
      params: {
        ...options.params,
        with_genres: selectedGenre ? selectedGenre.id : "", // Filtrare după gen
      },
      signal: controller.signal,
    })
             .then((res) => {
              const filteredMovies = res.data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average
              }));
              setMovies(filteredMovies);
              setLoading(false)
             })
             .catch(error => {
              if (error instanceof CanceledError) return;
              setError(error.message)
              setLoading(false)
             })

             return () => controller.abort()
  }, [selectedGenre]);  // 🔥 Re-fetch când se schimbă genul
  return { movies, error, isLoading}
}

export default useMovies
