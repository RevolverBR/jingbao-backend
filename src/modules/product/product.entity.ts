import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  imgUrl: string;

  @Column()
  sales: number;

  @Column()
  price: number;

  @Column()
  oldPrice: number;
}
