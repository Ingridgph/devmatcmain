import { CreateProfileInput } from './dto/create-profile.input';
import { PatchProfileInput } from './dto/patch-profile.input';
import { ProfilesService } from './profiles.service';
export declare class ProfilesResolver {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    profiles(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        description: string;
        id: string;
    }[]>;
    profile(id: string): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    createProfile(input: CreateProfileInput): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        name: string;
        description: string;
        id: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateProfile(id: string, input: PatchProfileInput): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    deleteProfile(id: string): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
}
