import  { useState, useEffect } from 'react'
import apiClient from "../services/api-client";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}
 
 export interface Game {
  id: number;
   name: string;
   background_image: string;
   parent_platforms: { platform: Platform }[];
   metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
    
const useGames = () => {
    const controller = new AbortController()
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchGames = () => {
      setLoading(true)
        apiClient
            .get<FetchGameResponse>("/games", {signal : controller.signal})
          .then((res) => {
            setGames(res.data.results)
             setLoading(false)
          })
          .catch((err) => {
            setError(err.message)
           setLoading(false)
          });
        
        return () => controller.abort();
    };
    fetchGames();
  }, []);
    
    return {games, error, isLoading}
}

export default useGames