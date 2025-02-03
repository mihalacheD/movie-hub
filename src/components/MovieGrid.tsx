import useMovies from "@/hooks/useMovies";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";



const MovieGrid = () => {

const { movies, error } = useMovies();

  return (
    <>
    {error && <p>{error}</p>}
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' gap={8}>
      {movies.map( movie => <MovieCard key={movie.id} movie={movie}/>)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid
