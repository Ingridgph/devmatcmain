import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto, UpdateProfileDto } from './dto/create-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}
  create(profile: CreateProfileDto) {
    return this.prisma.profile.create({
      data: profile,
    });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  async patch(id: string, profile: UpdateProfileDto) {
    await this.findOrFail(id);
    return this.prisma.profile.update({
      where: { id },
      data: profile,
    });
  }

  async findOrFail(id: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { id },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }
  async remove(id: string) {
    await this.findOrFail(id);
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
