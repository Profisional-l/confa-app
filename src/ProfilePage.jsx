import React from 'react';
import { AnnouncScript } from './announcScript.js';

const ProfilePage = () => {
  const { announcements, deleteAnnouncement, setDeleteId} = AnnouncScript(); 

  return (
    <div>
      <h1>Profile Page</h1>
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
