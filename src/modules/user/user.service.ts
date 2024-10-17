import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  getAllUser() {
    const sql = `SELECT * FROM user WHERE 1=1`

    return this.userRepository.query(sql)
  }

  findUserByName(username) {
    return this.userRepository.findOneBy({username})
  }
}