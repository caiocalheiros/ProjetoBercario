import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


(async () => {
    const maes = await prisma.mae.create({
        data: {
            nome: "Luisa",
            endereco: "Rua Dourada",
            telefone: "4002-8922"
        },
    });
    console.log(maes)
})();

/*(async () => {
    const maes = await prisma.mae.count();
    console.log(maes);
})()*/


