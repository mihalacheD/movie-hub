import useMovies from "@/hooks/useMovies";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./movieCardSkeleton";



const MovieGrid = () => {

const { movies, error, isLoading } = useMovies();
const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
    {error && <p>{error}</p>}
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' gap={5}>
      {isLoading && skeletons.map(skeleton => <MovieCardSkeleton key={skeleton}/>)}
      {movies.map( movie => <MovieCard key={movie.id} movie={movie}/>)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid
