import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from './modules/store/store.module';
import { ProductModule } from './modules/product/product.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    StoreModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'myjingdong',
      autoLoadEntities: true,
      synchronize: false,
      logging: true
    })
  ],
  providers: [AppService],
  controllers: [AppController],

})
export class AppModule {}
