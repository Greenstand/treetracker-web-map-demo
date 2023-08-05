import { faker } from "@faker-js/faker";
import { Wallet } from "../entities/Wallet";

async function getWallets(userId: string): Promise<Wallet[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Array.from({ length: 3 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    balance: faker.datatype.number({ min: 1000, max: 100000 }),
    createdAt: faker.date.past(),
  }));
}

export { getWallets };
