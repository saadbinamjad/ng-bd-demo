import { Injectable, Inject } from '@nestjs/common';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dtos/create-event-dto';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>) {
    }

    async findAll(): Promise<Event[]> {
        return await this.eventRepository.find();
    }

    async find(id: number): Promise<Event> {
        return await this.eventRepository.findOne(id);
    }

    async create(data: CreateEventDto): Promise<Event> {
        return await this.eventRepository.save(data);
    }
}
