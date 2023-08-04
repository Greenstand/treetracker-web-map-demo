import {faker} from '@faker-js/faker';

async function login(user: string, password: string): Promise<{
  userId: string, 
  token: string,
  firstName: string,
  lastName: string,
}> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    userId: faker.datatype.uuid(),
    token: faker.datatype.uuid(),
  };
}

export { login };
