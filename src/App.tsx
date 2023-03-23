import { Grid, GridItem } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='aside'>Aside</GridItem>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
