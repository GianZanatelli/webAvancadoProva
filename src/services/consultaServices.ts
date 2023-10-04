import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class consultaServices {
  constructor() {}

  async listarConsulta() {
    try {
      const consulta = await prisma.consulta.findMany();
      return consulta;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar consulta");
    }
  }

  async criarConsulta(data: any) {
    try {
        const consulta = await prisma.consulta.create({
            data: {
                data: data.data,
                nomePacinte: data.nomePaciente,
                nomeDentes: data.nomeDentes,
                pacienteId: data.pacienteId,
                secretariaId: data.secretariaId
            }
        });
        return consulta;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao criar consulta");
      }
  }

  async atualizarConsulta(id: number, data: any) {
    try {
        const consulta = await prisma.consulta.update({
            where:{id: id},
            data: data
        });
        return consulta;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao atualizar consulta");
      }
  }

  async deletarConsulta(id: number) {
    try {
        const consulta = await prisma.consulta.delete({
            where:{id: id}
        });
        return consulta;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao deletar consulta");
      }
  }

  async pegarConsulta(id: number) {
    try {
        const consulta = await prisma.consulta.findUnique({
            where:{id: id}
        });
        return consulta;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao pegar consulta");
      }
  }
}

export default new consultaServices();