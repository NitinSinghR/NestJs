import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async createUser( @Args('createUserInputs') createUserInputs: CreateUserInputs) {
    return this.userService.createUser(createUserInputs);
  }

  @Query(() => User)
  public async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Query(()=> [User])
  public async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Mutation(()=> Boolean)
  public async deleteUserById(@Args('id') id: string) {
    return this.userService.deleteUserById(id);
  }
}
