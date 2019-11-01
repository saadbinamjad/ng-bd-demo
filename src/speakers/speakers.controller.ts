import { Controller, Get, Post, Patch, Delete, Param, Body, Put } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { SpeakersService } from './speakers.service';
import { CreateSpeakerDto } from './dtos/create-speaker-dto';
import { UpdateSpeakerDto } from './dtos/update-speaker-dto';
import { Speaker } from './entities/speaker.entity';

@Controller('speakers')
export class SpeakersController {

    constructor(private speakerService: SpeakersService) {
    }

    @Get()
    index(): Promise<Speaker[]> {
        return this.speakerService.findAll();
    }

    @Get(':id')
    show(@Param('id') id: number): Promise<Speaker> {
        return this.speakerService.find(id);
    }

    @Post()
    store(@Body() createSpeakerDto: CreateSpeakerDto): Promise<Speaker> {
        return this.speakerService.create(createSpeakerDto);
    }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updateSpeakerDto: UpdateSpeakerDto): Promise<Speaker> {
        return this.speakerService.update(id, updateSpeakerDto);
    }

    @Delete(':id')
    delete(@Param() id: number): Promise<DeleteResult> {
        return this.speakerService.delete(id);
    }
}
