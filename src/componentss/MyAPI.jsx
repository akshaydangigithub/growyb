import axios from "axios";

export const API_ENDPOINT = 'http://localhost:8080';

const MyAPI = {
    async get(url, token = null) {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response = await axios.get(`${API_ENDPOINT}${url}`, { headers });
            return { status: response.status, data: response.data };
        } catch (error) {
            return { status: error.response?.status || 501, error: error.message };
        }
    },
    async post(url, data, token = null) {
        try {
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response = await axios.post(`${API_ENDPOINT}${url}`, data, { headers });
            return { status: response.status, data: response.data };
        } catch (error) {
            return { status: error.response?.status || 500, error: error.message };
        }
    },
    async put(url, data, token = null) {
        try {
            let convertData = JSON.stringify(data);
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            const response = await axios.put(`${API_ENDPOINT}${url}`, convertData, { headers });
            return { status: response.status, data: response.data };
        } catch (error) {
            return { status: error.response?.status || 500, error: error.message };
        }
    }
};

export const Item = {
    setItem(item_name, value) {
        localStorage.setItem(item_name, value);
    },
    getItem(item_name) {
        return localStorage.getItem(item_name);
    }
};

export const Date = {
    formatDate(date) {
        const now = new Date(date);
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        return `${day}-${month}-${year}`;
    }
};

export default MyAPI;
