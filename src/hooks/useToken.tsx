import { useEffect, useState } from 'react';
import { storage } from 'utils/storage';

export const useToken = () => {
  const [token, setToken] = useState<string | any>();

  useEffect(() => {
    const getToken = async () => {
      const queryClient = await storage.getItem('user_token');
      console.log(queryClient, 'app navigation');
      setToken(queryClient);
    };
    getToken();
  }, []);

  return { token };
};
