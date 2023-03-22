import {useEffect, useState} from 'react'
import apiClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
 
 export interface Genre {
   id: number;
   name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const controller = new AbortController()
    const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchGames = () => {
      setLoading(true)
        apiClient
            .get<FetchGenreResponse>("/genres", {signal : controller.signal})
          .then((res) => {
              setGenres(res.data.results)
              console.log(res.data.results);
              
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
    
    return {genres, error, isLoading}
}

export default useGenres