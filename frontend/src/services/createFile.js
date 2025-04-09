import { api } from "../api";

export const createFile = async (plateNumber, file) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await api.post(`/file/${plateNumber}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    if (!res.data) {
        throw new Error('Error creating file');
    }

    return res.data;
}