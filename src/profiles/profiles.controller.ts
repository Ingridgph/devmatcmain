import { Body, Controller , Delete, Get , Param, Patch, Post, Query,HttpCode,HttpStatus} from '@nestjs/common';
import { CreateProfileDto, UpdateProfileDto} from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
constructor(private profilesService: ProfilesService){}
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.profilesService.findOne(id);
  }

  @Post()
  create(@Body() createProfileDTo: CreateProfileDto) {
    return { nome: createProfileDTo.nome, descricao: createProfileDTo.descricao };
  }
  @Patch(':id')
  update(@Param('id') id:string, @Body() updateProfileDTo: UpdateProfileDto) {
    return { id,  descricao: updateProfileDTo.descricao };
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id:string) {}
  

}
