import axios from 'axios';
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/finland';

const getAll = () => {
    return axios.get(baseUrl);
};
