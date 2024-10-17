import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Store {
  @PrimaryColumn()
  _id: number

  @Column()
  name: string

  @Column()
  imgUrl: string

  @Column()
  sales: number

  @Column()
  expressLimit: number

  @Column()
  expressPrice: number

  @Column()
  slogan: string
}