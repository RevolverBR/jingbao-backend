import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoreController } from "./store.controller";
import { StoreService } from "./store.service";
import { Store } from "./store.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoreService],
  controllers: [StoreController]
})
export class StoreModule {}