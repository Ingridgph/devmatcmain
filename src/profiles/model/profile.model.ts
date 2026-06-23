import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
