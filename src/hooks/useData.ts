
import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';


interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint : string, requestConfig?: AxiosRequestConfig, deps? : any[]) => {
  const controller = new AbortController()
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      apiClient
        .get<FetchResponse<T>>( endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data.results) 
          setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        });
        
      return () => controller.abort();
    };
    fetchData();
  }, deps ? [...deps]:[]);
    
  return { data, error, isLoading }
}
export default useData