import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const fetchMemories = async () => await api.get("/memories");

export const createMemory = async (newMemory) => {
  await api.post("/memories", newMemory);
};

export const deleteMemory = async (id) => await api.delete(`/memories/${id}`);