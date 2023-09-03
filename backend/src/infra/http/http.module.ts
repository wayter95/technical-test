import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductController } from './controllers/product.controller';
import { UseCaseModule } from 'src/application/use-cases/use-case.module';

@Module({
  imports: [DatabaseModule, UseCaseModule],
  providers: [ ],
  controllers: [ 
    ProductController
  ],
})
export class HttpModule {}