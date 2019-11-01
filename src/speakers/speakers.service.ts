import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateSpeakerDto } from './dtos/create-speaker-dto';
import { UpdateSpeakerDto } from './dtos/update-speaker-dto';
import { Speaker } from './entities/speaker.entity';

@Injectable()
export class SpeakersService {
    constructor(
        @InjectRepository(Speaker)
        private readonly speakerRepository: Repository<Speaker>) {
    }

    async findAll(): Promise<Speaker[]> {
        return await this.speakerRepository.find();
    }

    async find(id: number): Promise<Speaker> {
        return await this.speakerRepository.findOne(id);
    }

    async create(createPayload: CreateSpeakerDto): Promise<Speaker> {
        return await this.speakerRepository.save(createPayload);
    }

    async update(id: number, updatePayload: UpdateSpeakerDto): Promise<Speaker> {
        const event = await this.speakerRepository.findOne(id);
        const data = Object.assign(event, updatePayload);
        return await this.speakerRepository.save(data);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.speakerRepository.delete(id);
    }
}
