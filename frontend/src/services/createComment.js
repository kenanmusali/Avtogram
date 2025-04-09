import { api } from "../api"

export const createComment = async (plateNumber, body) => {
    const res = await api.post(`/comment/${plateNumber}`, body);
    if (!res.data) {
        throw new Error('Error creating comment');
    }
    return res.data;
}
