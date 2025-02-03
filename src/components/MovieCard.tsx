import { Movie } from "@/hooks/useMovies"
import { Card, Heading, Image } from "@chakra-ui/react"


interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card.Root borderRadius={10} >
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></Image>
      <Card.Body>
        <Heading fontSize='2xl'>{movie.title}</Heading>
      </Card.Body>
    </Card.Root>
  )
}

export default MovieCard
