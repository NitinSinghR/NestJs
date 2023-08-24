import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInputs {
  @Field()
  fullname: string;

  // @Field()
  // createTime:Date;
}
