import { CreateProfileInput } from './dto/create-profile.input';
import { PrismaService } from "../prisma/prisma.service";
import { PatchProfileInput } from './dto/patch-profile.input';
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(profile: CreateProfileInput): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        name: string;
        description: string;
        id: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        description: string;
        id: string;
    }[]>;
    patch(id: string, profile: PatchProfileInput): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    findOrFail(id: string): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
}
