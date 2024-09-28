import { useEffect, useState } from 'react';
import WebApp from "@twa-dev/sdk"; 

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, []);

  const handleSendUserID = async () => {
    const response = await fetch('http://localhost:5000/send_userid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userID: userData.id }), // Отправляем userID
    });

    const data = await response.json();
    console.log(data);
    // Обработка ответа от сервера
  };

  return userData;
};

export default useUserData;
