import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

interface ClaimsProps {
  uid: string;
  email: string;
}

@Injectable()
export class GenerateAuthToken {
  async execute(claims: ClaimsProps) {
    const token = sign(claims, process.env.JWT_SECRET_KEY as string || 'defaultSecretKey', {
      expiresIn: 60 * 60 * 1,
      algorithm: 'HS256',
    });

    return token;
  }
}