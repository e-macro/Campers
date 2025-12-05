import axios from "axios";

const url = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'

export const getCampers = async (page: number, filters: {
    location: string;
    equipment: string[];
    transmission: string;
    form: string;
}) => {
    const params: Record<string, number | string | boolean> = {
        page,
        limit: 4
    };
    
    if (filters.location) params.location = filters.location;
    if (filters.transmission) params.transmission = filters.transmission;
    if (filters.form) params.form = filters.form.toLowerCase().replace(' ', '');
    
    // Equipment як окремі параметри
    filters.equipment.forEach(eq => {
        params[eq] = true;  // AC=true, bathroom=true...
    });
    
    const res = await axios.get(url, { params });
    return res.data;
};