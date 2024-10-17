import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  username: string

  @PrimaryColumn()
  password: string

  @Column()
  userId: string
}