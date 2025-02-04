import { Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import MovieGrid from "./components/MovieGrid"
import GenreList from "./components/GenreList"

function App() {

  return(
      <>
  <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
  }}
      templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
  }}
  >
    <GridItem area='nav'>
      <NavBar/>
    </GridItem>
    <GridItem area='aside'paddingX={5} display={{ base: "none", lg: "block" }}><GenreList/></GridItem>
    <GridItem area='main'><MovieGrid/></GridItem>
  </Grid>
  </>
  )
}

export default App
