import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // constructor(private readonly authService: AuthService){}

  async checkLogin() {
    return 'Olá do AuthService';
  }
}
