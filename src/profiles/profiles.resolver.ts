import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProfileInput } from './dto/create-profile.input';
import { PatchProfileInput } from './dto/patch-profile.input';
import { Profile } from './model/profile.model';
import { ProfilesService } from './profiles.service';

@Resolver(() => Profile)
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  @Query(() => [Profile])
  profiles() {
    return this.profilesService.findAll();
  }

  @Query(() => Profile)
  profile(@Args('id') id: string) {
    return this.profilesService.findOrFail(id);
  }

  @Mutation(() => Profile)
  createProfile(@Args('input') input: CreateProfileInput) {
    return this.profilesService.create(input);
  }

  @Mutation(() => Profile)
  updateProfile(
    @Args('id') id: string,
    @Args('input') input: PatchProfileInput,
  ) {
    return this.profilesService.patch(id, input);
  }

  @Mutation(() => Profile)
  deleteProfile(@Args('id') id: string) {
    return this.profilesService.remove(id);
  }
}
