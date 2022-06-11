import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const fetchMemories = async () => await api.get("/memories");

export const fetchMemory = async (id) => await api.get(`/memories/${id}`);

export const createMemory = async (newMemory) => {
  await api.post("/memories", newMemory);
};

export const updateMemory = async (id, updatedMemory) =>
  await api.put(`/memories/${id}`, updatedMemory);

export const deleteMemory = async (id) => await api.delete(`/memories/${id}`);
