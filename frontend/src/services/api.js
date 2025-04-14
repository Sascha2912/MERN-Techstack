'use strict';

import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Beispiel: Benutzer abrufen
export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};