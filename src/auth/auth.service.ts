import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  // constructor(private readonly authService: AuthService){}

  async checkLogin(loginDto: LoginDto) {
    return loginDto;
  }
}
