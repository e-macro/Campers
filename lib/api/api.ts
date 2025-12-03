import axios from "axios";

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/'

export const getCampers = async () => {
    const res = await  axios.get(`${BASE_URL}campers`);
    return res.data;
}