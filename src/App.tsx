import { Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import MovieGrid from "./components/MovieGrid"

function App() {

  return(
      <>
  <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <NavBar/>
    </GridItem>
    <GridItem area='aside' display={{ base: "none", lg: "block" }}>Aside</GridItem>
    <GridItem area='main'><MovieGrid/></GridItem>
  </Grid>
  </>
  )
}

export default App
 