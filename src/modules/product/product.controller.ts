import {
  Body,
  Controller,
  Get,
  Query,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { wrapperResponse } from 'src/utils/reponse';
import { ProductService } from './product.service';
import { query } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  getProductWithId(@Param('id', ParseIntPipe) id, @Query() query) {
    return wrapperResponse(
      this.productService.getProductWithId(id, query),
      '获取商店物品信息成功'
    )
  }
}
