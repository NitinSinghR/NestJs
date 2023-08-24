import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
// import { UpdateUserInputs } from './dto/update-user.input';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.save({
      fullname: createUserInputs.fullname,
      // createTime: createUserInputs.createTime,
    });
  }

  // public async updateUser(updateUserInputs : UpdateUserInputs){
  //   const userToUpdate = await this.findOne(id);
  //   return this.save({
  //       fullname: updateUserInputs.fullname,
  //       // const userToUpdate = await this.findOne(id); 
  //   });
  // }

  
}
