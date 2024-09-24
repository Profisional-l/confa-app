import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deleteId, setDeleteId] = useState(''); // Состояние для ID удаления

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        const response = await axios.get('http://127.0.0.1:5000/announcements');
        setAnnouncements(response.data);
    };

    const createAnnouncement = async () => {
        await axios.post('http://127.0.0.1:5000/announcements', { title, description });
        fetchAnnouncements();
        setTitle('');
        setDescription('');
    };

    const deleteAnnouncement = async () => {
        if (!deleteId) {
            alert('Пожалуйста, введите id объявления для удаления.'); // Проверка на пустое значение
            return;
        }
        await axios.delete(`http://127.0.0.1:5000/announcements/${deleteId}`);
        fetchAnnouncements(); // Обновить список после удаления
        setDeleteId(''); // Очистить поле ввода
    };

    return (
        <div>
            <h2>Заполните детали</h2>

            <input 
                type="text" 
                placeholder="Username без @" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                placeholder="Занятие" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button onClick={createAnnouncement}>Создать объявление</button>

            <h2>Удалить объявление по ID:</h2>
            <input 
                type="text" 
                placeholder="id" 
                value={deleteId} 
                onChange={(e) => setDeleteId(e.target.value)} 
            />
            <button onClick={deleteAnnouncement}>Удалить объявление</button>

            <h2>Объявления:</h2>
            <ul style={{textAlign: 'left'}} >
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
