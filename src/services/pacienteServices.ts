import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class pacienteServices {
  constructor() {}

  async listarPaciente() {
    try {
      const paciente = await prisma.paciente.findMany();
      return paciente;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar paciente");
    }
  }

  async criarPaciente(data: any) {
    try {
        const paciente = await prisma.paciente.create({
            data: {
                nomePacinte: data.nomePaciente,
                senha: data.senha,
                usuario: data.usuario,
                cpf: data.cpf
            }
        });
        return paciente;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao criar paciente");
      }
  }

  async atualizarPaciente(id: number, data: any) {
    try {
        const paciente = await prisma.paciente.update({
            where:{id: id},
            data: data
        });
        return paciente;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao atualizar paciente");
      }
  }

  async deletarPaciente(id: number) {
    try {
        const paciente = await prisma.paciente.delete({
            where:{id: id}
        });
        return paciente;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao deletar paciente");
      }
  }

  async pegarPaciente(id: number) {
    try {
        const paciente = await prisma.paciente.findUnique({
            where:{id: id}
        });
        return paciente;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao pegar paciente");
      }
  }
}

export default new pacienteServices();