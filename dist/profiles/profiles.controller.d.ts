import { CreateProfileDto, UpdateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    findAll(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    }[];
    findOne(id: string): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    } | undefined;
    create(createProfileDTo: CreateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    update(id: string, updateProfileDTo: UpdateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    remove(id: string): void;
}
