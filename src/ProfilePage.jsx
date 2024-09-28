import React from 'react';
import { AnnouncScript } from './announcScript.js';
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";


const ProfilePage = () => {
  const { announcements, deleteAnnouncement, setDeleteId} = AnnouncScript(); 

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, []);

  return (
    
    <div>
      <h1>Profile Page</h1>
      <hr /><br />
      <div>
      {userData ? (
        <div>
          <h1>Welcome, {userData.first_name}!</h1>
          <p>Username: {userData.username}</p>
          <p>UserID: {userData.id}</p>
          <p>Language: {userData.language_code}</p>
          {userData.is_premium && <p>You are a premium user!</p>}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    <br /><hr /><br />
      <h2>Удалить объявление по ID:</h2>
            <input 
                type="text" 
                placeholder="id" 
                value={announcements.deleteId} 
                onChange={(e) => setDeleteId(e.target.value)} 
            />
            <button onClick={deleteAnnouncement}>Удалить объявление</button>

    </div>
  );
};

export default ProfilePage;
