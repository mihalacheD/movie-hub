import options from "@/services/api-client";
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";


export interface Genre {
  id: number,
  name: string
}

interface FetchGenresResponse {
  count: number,
  genres: Genre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController();

    setLoading(true);

    axios.get<FetchGenresResponse>(`${options.url}/genre/movie/list`,{...options,  signal :controller.signal})
             .then((res) => {
              setGenres(res.data.genres);
              setLoading(false)
             })
             .catch(error => {
              if (error instanceof CanceledError) return;
              setError(error.message)
              setLoading(false)
             })

             return () => controller.abort()
  }, []);
  return { genres, error, isLoading}

}


export default useGenres;