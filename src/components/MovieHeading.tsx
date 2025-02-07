import { Genre } from "@/hooks/useGenres";
import { Heading } from "@chakra-ui/react"

interface Props {
    selectedGenre: Genre | null,
}

const MovieHeading = ({ selectedGenre } : Props) => {

const heading = `${selectedGenre?.name || ""} Movies`

  return (
    <Heading as='h1' fontSize='5xl' marginY={5}>
      {heading}
    </Heading>
  )
}

export default MovieHeading
