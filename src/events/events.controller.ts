import { Controller, Get, Post, Patch, Delete, Param, Body, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dtos/create-event-dto';
import { UpdateEventDto } from './dtos/update-event-dto';
import { DeleteResult } from 'typeorm';

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

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updateEventDto: UpdateEventDto): Promise<Event> {
        return this.eventService.update(id, updateEventDto);
    }

    @Delete(':id')
    delete(@Param() id: number): Promise<DeleteResult> {
        return this.eventService.delete(id);
    }
}
