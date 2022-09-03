import { Prisma } from '@prisma/client';

export class RegisterDto implements Prisma.usersCreateInput {
  name: string;
  email: string;
  password: string;
}
