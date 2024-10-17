import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  getProductWithId(id, query) {
    let categoryText
    let sql
    if (query.tab) {
      categoryText = query.tab
    }
    if (categoryText === 'all') {
      sql = `SELECT * FROM product WHERE 1=1`
    } else {
      sql = `SELECT * FROM product WHERE categoryText='${query.tab}'`
    }
    return this.productRepository.query(sql)
  }
}
