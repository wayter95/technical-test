import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface IProduct {
  name: string;
  description: string;
  photoUrl: string;
  value: number;
  freightValue: number;
  discountPercentage: number;
}

const productData: IProduct[] = [
  {
    name: "Tênis social",
    description: "Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa",
    photoUrl: "https://onedrive.live.com/embed?resid=6C7FE151DA3BD5E8%2119237&authkey=%21AACFUeIkf0PW1Cw&width=660",
    value: 300,
    discountPercentage: 10,
    freightValue: 0,
  },
  {
    name: "Tênis social",
    description: "Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa",
    photoUrl: "https://onedrive.live.com/embed?resid=6C7FE151DA3BD5E8%2119236&authkey=%21APfN4v9bVwkLzho&height=660",
    value: 300,
    discountPercentage: 10,
    freightValue: 0,
  },
  {
    name: "Tênis social",
    description: "Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa",
    photoUrl: "https://onedrive.live.com/embed?resid=6C7FE151DA3BD5E8%2119235&authkey=%21AENi8PWf0serqUs&width=660",
    value: 300,
    discountPercentage: 10,
    freightValue: 0,
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for(const product of productData) {
    await prisma.product.create({
      data: product
    })

    console.log(`Create product ${product.name} successfully.`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });