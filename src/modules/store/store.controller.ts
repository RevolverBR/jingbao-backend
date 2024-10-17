import { Body, Controller, Get, Query, Param, Post, ParseIntPipe } from "@nestjs/common";
import { wrapperResponse } from "src/utils/reponse";
import { StoreService } from "./store.service";

@Controller('store')
export class StoreController {
  constructor(
    private readonly storeService: StoreService
  ) {}

  @Get(':id')
  getHotShop(@Param('id', ParseIntPipe) id) {
    console.log(id)
    return wrapperResponse(
      this.storeService.getHotShop(id),
      '获取店铺信息成功'
    )
  }

  @Get()
  getStore() {
    return wrapperResponse(
      this.storeService.getStore(),
      '获取商家列表信息成功'
    )
  }

}