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
    photoUrl: "https://res.cloudinary.com/ddk6md0qd/image/upload/v1693926523/image-1.png",
    value: 300,
    discountPercentage: 10,
    freightValue: 0,
  },
  {
    name: "Tênis social",
    description: "Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa",
    photoUrl: "https://res.cloudinary.com/ddk6md0qd/image/upload/v1693926524/image-2.png",
    value: 300,
    discountPercentage: 10,
    freightValue: 0,
  },
  {
    name: "Tênis social",
    description: "Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa",
    photoUrl: "https://res.cloudinary.com/ddk6md0qd/image/upload/v1693926524/image-3.png",
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