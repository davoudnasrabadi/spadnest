import {
  Controller,
  UseGuards,
  Post,
  UseInterceptors,
  Req,
  UploadedFile,
  Get,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UserService } from '../user/user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/avatar')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async addAvatar(@UploadedFile() file, @Req() req) {
    return this.userService.setAvatar(file.filename, req.user.id);
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: any) {
    return this.userService.getProfile(req.user.id);
  }
}
