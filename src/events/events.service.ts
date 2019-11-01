import { Injectable, Inject } from '@nestjs/common';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateEventDto } from './dtos/create-event-dto';
import { UpdateEventDto } from './dtos/update-event-dto';

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

    async create(createPayload: CreateEventDto): Promise<Event> {
        return await this.eventRepository.save(createPayload);
    }

    async update(id: number, updatePayload: UpdateEventDto): Promise<Event> {
        const event = await this.eventRepository.findOne(id);
        const data = Object.assign(event, updatePayload);
        return await this.eventRepository.save(data);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.eventRepository.delete(id);
    }
}
