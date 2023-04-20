const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Insira o código de consulta do Prisma aqui
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });