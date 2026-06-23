"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_profile_input_1 = require("./dto/create-profile.input");
const patch_profile_input_1 = require("./dto/patch-profile.input");
const profile_model_1 = require("./model/profile.model");
const profiles_service_1 = require("./profiles.service");
let ProfilesResolver = class ProfilesResolver {
    profilesService;
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    profiles() {
        return this.profilesService.findAll();
    }
    profile(id) {
        return this.profilesService.findOrFail(id);
    }
    createProfile(input) {
        return this.profilesService.create(input);
    }
    updateProfile(id, input) {
        return this.profilesService.patch(id, input);
    }
    deleteProfile(id) {
        return this.profilesService.remove(id);
    }
};
exports.ProfilesResolver = ProfilesResolver;
__decorate([
    (0, graphql_1.Query)(() => [profile_model_1.Profile]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfilesResolver.prototype, "profiles", null);
__decorate([
    (0, graphql_1.Query)(() => profile_model_1.Profile),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesResolver.prototype, "profile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_model_1.Profile),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_input_1.CreateProfileInput]),
    __metadata("design:returntype", void 0)
], ProfilesResolver.prototype, "createProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_model_1.Profile),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, patch_profile_input_1.PatchProfileInput]),
    __metadata("design:returntype", void 0)
], ProfilesResolver.prototype, "updateProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_model_1.Profile),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfilesResolver.prototype, "deleteProfile", null);
exports.ProfilesResolver = ProfilesResolver = __decorate([
    (0, graphql_1.Resolver)(() => profile_model_1.Profile),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], ProfilesResolver);
//# sourceMappingURL=profiles.resolver.js.map