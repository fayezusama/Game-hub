import React, { useState, useEffect } from "react";
import {Text} from '@chakra-ui/react'

import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchGames = () => {
      apiClient
        .get<FetchGameResponse>("/games")
        .then((res) => {
          console.log(res.data.results);
          setGames(res.data.results);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
        });
    };
    fetchGames();
  },[]);
    return <>
        {error && <Text> {error}</Text>}
        <ul>
            {games.map(game => <li key={game.id} > {game.name} </li>)}
        </ul>
    </>
};

export default GameGrid;
