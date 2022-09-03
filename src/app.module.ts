import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { XModule } from './x/x.module';

@Module({
  imports: [PrismaModule, XModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
