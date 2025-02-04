import useMovies from "@/hooks/useMovies";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./movieCardSkeleton";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
}

const MovieGrid = ({ selectedGenre} : Props) => {

const { movies, error, isLoading } = useMovies(selectedGenre);
const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
    {error && <p>{error}</p>}
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' gap={4}>
      {isLoading && skeletons.map(skeleton => <MovieCardSkeleton key={skeleton}/>)}
      {movies.map( movie => <MovieCard key={movie.id} movie={movie}/>)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid
