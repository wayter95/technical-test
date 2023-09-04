import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductController } from './controllers/product.controller';
import { UseCaseModule } from 'src/application/use-cases/use-case.module';
import { AccountController } from './controllers/account.controller';
import { JwtStrategy } from './auth/jwt-strategy';
import { APP_GUARD } from '@nestjs/core';
import { JWTAuthGuard } from './auth/jwt-auth-guard';
import { OrderController } from './controllers/order.controller';

@Module({
  imports: [DatabaseModule, UseCaseModule],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
  ],
  controllers: [ 
    ProductController,
    AccountController,
    OrderController
  ],
})
export class HttpModule {}