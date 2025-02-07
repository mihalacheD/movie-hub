import useMovies from "@/hooks/useMovies";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { Genre } from "@/hooks/useGenres";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Props {

  selectedGenre: Genre | null,
  sortOption :string,
  searchText: string;
}

const MovieGrid = ({ selectedGenre, sortOption, searchText} : Props) => {

const { movies, error, isLoading } = useMovies(selectedGenre, sortOption, searchText);
const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (error) return <Text>{error}</Text>;


  return (
    <>
    {!isLoading && movies.length === 0 && (
      <Text fontSize="xl" fontWeight="bold" textAlign="center" mt={4}>
        No movies found
      </Text>
    )}
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}}  gap={6}>
      {isLoading && skeletons.map(skeleton => <MovieCardSkeleton key={skeleton}/>)}
      {movies.map( movie => <MovieCard key={movie.id} movie={movie}/>)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid
