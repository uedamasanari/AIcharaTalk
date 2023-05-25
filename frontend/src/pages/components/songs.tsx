import { axios } from 'axios';

export const fetchSong = () => {
  return axios.get('https://api.vocaloid.com/v1/songs/')
    .then(response => response.data)
    .catch(error => console.error(error));
};