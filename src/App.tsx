// import { useState } from 'react'
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem color={"white"}  area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem color={"white"}  area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
