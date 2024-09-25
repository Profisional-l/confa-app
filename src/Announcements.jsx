import React, { useEffect } from 'react';
import { AnnouncScript } from './announcScript.js';

const Announcements = () => {
    const { announcements } = AnnouncScript(); // Получаем данные из AnnouncScript

    return (
        <div>
            <h2>Объявления:</h2>
            <ul style={{ textAlign: 'left' }}>
                {announcements.map((announcement) => (
                    <li key={announcement.id}>
                        <h2>@{announcement.title} - {announcement.description} | id: {announcement.id}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Announcements;
