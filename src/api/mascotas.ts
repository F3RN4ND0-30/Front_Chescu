import axios from "./axios";

export const getAllMascotas = async () => axios.get("/api/v1/mascotas");