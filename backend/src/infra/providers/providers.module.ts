import { Module } from '@nestjs/common';
import { GenerateAuthToken } from './generate-auth-token';

@Module({
  providers: [GenerateAuthToken],
  exports: [
    GenerateAuthToken
  ],
})
export class ProvidersModule {}