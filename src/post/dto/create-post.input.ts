import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  postName: string;

  @Field()
  userId: string;

  @Field() 
  postOrderNumber: string;
}
