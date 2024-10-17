import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Store } from './store.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>
  ) {}

  getStore() {
    const sql = `SELECT * FROM store WHERE 1=1`
    console.log(sql)
    return this.storeRepository.query(sql)
  }

  getHotShop(id) {
    const sql = `SELECT * FROM store WHERE _id=${id}`
    return this.storeRepository.query(sql)
  }
}
