import { Injectable } from '@nestjs/common';
import { CreateUserInputs } from './dto/create-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.userRepo.createUser(createUserInputs);
  }

  public async getUserById(id) {
    // select * from users left join post on user.user_id = post.user_id where users.user_id = ''
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.post', 'p')
      .where('user.id =:id', { id })
      .getOne();
  }

  public async getAllUsers(){
    return this.userRepo
      .createQueryBuilder('user')
      .getMany();
  }

  // public async updateUserById(updateUserInputs){
  //   return this.userRepo.updateUser(updateUserInputs);
  // }

   async deleteUserById(id: string): Promise<boolean>{
    const deleted = await this.userRepo.softDelete({id})
    return deleted.affected>0
  }
}
