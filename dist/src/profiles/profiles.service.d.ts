import { CreateProfileDto, UpdateProfileDto } from './dto/create-profile.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(profile: CreateProfileDto): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: string;
        name: string;
        description: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        description: string;
    }[]>;
    patch(id: string, profile: UpdateProfileDto): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    findOrFail(id: string): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
}
