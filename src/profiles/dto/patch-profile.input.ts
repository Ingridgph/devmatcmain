import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PatchProfileInput {

  @Field()
  description: string;
}