import { api } from "../api";

export const searchCar = async (plateNumber) => {
    const res = await api.get(`/?platenumber=${plateNumber}`);

    if (!res.data) {
        throw new Error('Error searching car');
    }
    return res.data;
}