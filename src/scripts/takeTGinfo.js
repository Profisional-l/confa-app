import { useEffect, useState } from 'react';
import WebApp from "@twa-dev/sdk"; 

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, []);

  return userData;
};

export default useUserData;
