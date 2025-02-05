import { Movie } from "@/hooks/useMovies"
import { Card, Heading, Image } from "@chakra-ui/react"
import RenderStars from "./RenderStars"
import noImg from '@/assets/no-img.jpg'


interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      { movie.poster_path
      ?
      (<Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></Image>)
      :
      (<Image src={noImg}></Image>)
      }
      <Card.Body>
        <Heading fontSize='2xl' mb={2}>{movie.title}</Heading>
        <RenderStars rating={movie.vote_average}/>
      </Card.Body>
    </Card.Root>
  )
}

export default MovieCard
