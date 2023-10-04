import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class secretariaServices {
  constructor() {}

  async listarSecretaria() {
    try {
      const secretaria = await prisma.secretaria.findMany();
      return secretaria;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar secretaria");
    }
  }

  async criarSecretaria(data: any) {
    try {
        const secretaria = await prisma.secretaria.create({
            data: {
                nome: data.nome,
                rg: data.rg,
                consultorio: data.consultorio
            }
        });
        return secretaria;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao criar secretaria");
      }
  }

  async atualizarSecretaria(id: number, data: any) {
    try {
        const secretaria = await prisma.secretaria.update({
            where:{id: id},
            data: data
        });
        return secretaria;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao atualizar secretaria");
      }
  }

  async deletarSecretaria(id: number) {
    try {
        const secretaria = await prisma.secretaria.delete({
            where:{id: id}
        });
        return secretaria;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao deletar secretaria");
      }
  }

  async pegarSecretaria(id: number) {
    try {
        const secretaria = await prisma.secretaria.findUnique({
            where:{id: id}
        });
        return secretaria;
      } catch (error) {
        console.log(error);
        throw new Error("Erro ao pegar secretaria");
      }
  }
}

export default new secretariaServices();