import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dtos/create-event-dto';

@Controller('events')
export class EventsController {

    constructor(private eventService: EventsService) {
    }

    @Get()
    index(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Get(':id')
    show(@Param('id') id: number): Promise<Event> {
        return this.eventService.find(id);
    }

    @Post()
    store(@Body() createEventDto: CreateEventDto): Promise<Event> {
        return this.eventService.create(createEventDto);
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
