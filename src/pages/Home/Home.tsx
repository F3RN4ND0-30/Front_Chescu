import { getAllMascotas } from "@/api";
import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { Mascota } from "src/models/mascota";

const Home = () => {
  const [mascotas, setMascotas] = useState<Mascota[] | null>([]);
  useEffect(() => {
    async function fechMascotas() {
      const response = await getAllMascotas();
      setMascotas(response.data);
      console.log(mascotas);
    }
    fechMascotas();
  }, []);
  return (
    <div className="container mx-auto py-4">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nombre</Table.Th>
            <Table.Th>Raza</Table.Th>
            <Table.Th>Edad</Table.Th>
            <Table.Th>Tipo</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {mascotas?.map((mascota) => (
            <Table.Tr key={mascota.nombre}>
              <Table.Td>{mascota?.nombre || "N/A"}</Table.Td>
              <Table.Td>{mascota?.raza || "N/A"}</Table.Td>
              <Table.Td>{mascota?.edad || "N/A"}</Table.Td>
              <Table.Td>{mascota?.tipoMascota?.nombre || "N/A"}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default Home;
