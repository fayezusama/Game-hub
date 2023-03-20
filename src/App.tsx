// import { useState } from 'react'
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      gridTemplateRows={"60px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem color={"white"} pl="2" area={"aside"}>
        
        </GridItem>
      </Show>
      <GridItem color={"white"} pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
