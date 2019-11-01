import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('events')
export class EventsController {

    @Get()
    index(): string {
        return 'index';
    }

    @Get()
    show(): string {
        return 'show';
    }

    @Post()
    store(): string {
        return 'store';
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
