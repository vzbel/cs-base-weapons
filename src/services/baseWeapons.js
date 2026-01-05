import axios from "axios";

const baseURL = `https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en`;


const getAll = () => {
    const req = axios.get(`${baseURL}/base_weapons.json`);
    return req.then((res) => res.data);
};

export default {
    getAll
};
