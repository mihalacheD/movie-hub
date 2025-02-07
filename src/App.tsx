import { Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import MovieGrid from "./components/MovieGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import SortSelector from "./components/SortSelector"
import MovieHeading from "./components/MovieHeading"

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [sortOption, setSortOption] = useState("popularity.desc");
  const [searchText, setSearchText] = useState<string>("");

  return(
      <>
  <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
  }}
      templateColumns={{
    base: '1fr',
    lg: '230px 1fr'
  }}
  >
    <GridItem area='nav'>
      <NavBar onSearch={(searchText) => setSearchText(searchText)}/>
    </GridItem>
    <GridItem area='aside'paddingX={5} display={{ base: "none", lg: "block" }}>
      <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
    </GridItem>
    <GridItem area='main' padding='10px' spaceY={5} >
      <MovieHeading selectedGenre={selectedGenre} />
      <SortSelector onSelectOptions={(option) => setSortOption(option)} value={sortOption}/>
      <MovieGrid selectedGenre={selectedGenre} sortOption={sortOption} searchText={searchText} />
    </GridItem>
  </Grid>
  </>
  )
}

export default App
