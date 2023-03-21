import  { useState, useEffect } from 'react'
import apiClient from "../services/api-client";

 export interface Game {
  id: number;
   name: string;
   background_image: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
    }
const useGames = () => {
    const controller = new AbortController()
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

  useEffect(() => {
    const fetchGames = () => {
        apiClient
            .get<FetchGameResponse>("/games", {signal : controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
        
        return () => controller.abort();
    };
    fetchGames();
  }, []);
    
    return {games, error}
}

export default useGames