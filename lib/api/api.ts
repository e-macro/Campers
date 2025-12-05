import axios from "axios";

const url = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'

export const getCampers = async (page: number, location: string, filter: string) => {
    const res = await axios.get(`${url}`, {
        params: {
            page: page,
            location: location,
            limit: 4,
            [filter]: true
        }
    });
    return res.data;
}