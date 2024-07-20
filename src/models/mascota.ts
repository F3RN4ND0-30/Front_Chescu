import { TipoMascota } from "./tipoMascota";

export interface Mascota { 
  nombre: string,
  edad: number,
  raza: string,
  tipoMascota: TipoMascota
}