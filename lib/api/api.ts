import axios from "axios";

const url = new URL('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
url.searchParams.append('limit', '4');

const urlId = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const getCampers = async (page: number, location: string, filter: string) => {
    url.searchParams.set('page', page.toString());
    url.searchParams.set('location', location);
    url.searchParams.set(filter.toString(), "true");
    const res = await axios.get(`${url}`);
    return res.data;
}