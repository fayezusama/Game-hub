// import { useState } from 'react'
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string ;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      // color="blackAlpha.700"
      // fontWeight="bold"
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem color={"white"} area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelect={(selected) =>
              setGameQuery({ ...gameQuery, genre: selected })
            }
          />
        </GridItem>
      </Show>
      <GridItem color={"white"} area={"main"}>
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelect={(selected) =>
                setGameQuery({ ...gameQuery, platform: selected })
              }
            />
          </Box>
          <SortSelector sortOrder = {gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({
            ...gameQuery, sortOrder: sortOrder})} />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
