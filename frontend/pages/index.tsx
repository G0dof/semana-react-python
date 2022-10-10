import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Lista from "../src/components/Lista/Lista";

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/g0dof.png",
      descricao: "Descrição do professor 1",
      valorHora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/g0dof.png",
      descricao: "Descrição do professor 2",
      valorHora: 200
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://github.com/g0dof.png",
      descricao: "Descrição do professor 3",
      valorHora: 300
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://github.com/g0dof.png",
      descricao: "Descrição do professor 4",
      valorHora: 400
    }
  ]

    return (
        <Box sx={{ backgroundColor: "secondary.main" }}>
            <Lista professores={professores}></Lista>
        </Box>
    );
};

export default Home;
