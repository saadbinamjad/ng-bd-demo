import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';

@Controller('events')
export class EventsController {

    constructor(private eventService: EventsService) {
    }

    @Get()
    index(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Get()
    show(): string {
        return 'show';
    }

    @Post()
    store(): Promise<Event> {
        return this.eventService.create();
    }

    @Patch()
    update(): string {
        return 'update';
    }

    @Delete()
    delete(): string {
        return 'delete';
    }
}
