import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductController } from './controllers/product.controller';
import { UseCaseModule } from 'src/application/use-cases/use-case.module';
import { AccountController } from './controllers/account.controller';

@Module({
  imports: [DatabaseModule, UseCaseModule],
  providers: [ ],
  controllers: [ 
    ProductController,
    AccountController,
  ],
})
export class HttpModule {}