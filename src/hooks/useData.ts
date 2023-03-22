
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';


interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint : string) => {
  const controller = new AbortController()
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      apiClient
        .get<FetchResponse<T>>( endpoint, { signal: controller.signal })
        .then((res) => {
          setData(res.data.results)
          console.log(res.data.results);
              
          setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        });
        
      return () => controller.abort();
    };
    fetchData();
  }, []);
    
  return { data, error, isLoading }
}
export default useData