import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  async setAvatar(data: any, id: number) {
    const updateUser = await this.dbService.users.update({
      where: {
        id: id,
      },
      data: {
        photo_url: data,
      },
    });
  }

  async getProfile(id: number) {
    return await this.dbService.users.findFirst({
      where: {
        id: id,
      },
      select: {
        name: true,
        email: true,
        photo_url: true,
      },
    });
  }
}
