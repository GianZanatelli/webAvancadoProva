import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class agendaServices {
  constructor() {}

  async listarAgenda() {
    try {
      const agenda = await prisma.agenda.findMany();
      return agenda;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar agendas");
    }
  }

  async criarAgenda(data: any) {
    try {
        const agenda = await prisma.agenda.create({
            data: {
                data: data.data,
                nomePacinte: data.nomePaciente
            }
        });
        return agenda;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao criar agendas");
      }
  }

  async atualizarAgenda(id: number, data: any) {
    try {
        const agenda = await prisma.agenda.update({
            where:{id: id},
            data: data
        });
        return agenda;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao atualizar agendas");
      }
  }

  async deletarAgenda(id: number) {
    try {
        const agenda = await prisma.agenda.delete({
            where:{id: id}
        });
        return agenda;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao deletar agendas");
      }
  }

  async pegarAgenda(id: number) {
    try {
        const agenda = await prisma.agenda.findUnique({
            where:{id: id}
        });
        return agenda;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao pegar agenda");
      }
  }
}

export default new agendaServices();