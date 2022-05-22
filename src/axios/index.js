import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const createMemory = async (newMemory) => {
  const { data } = await api.post("/memories", newMemory);
  console.log(data);
};
