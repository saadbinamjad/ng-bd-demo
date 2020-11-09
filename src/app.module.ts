import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeakersModule } from './speakers/speakers.module';
import { EventsModule } from './events/events.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/entities/event.entity';
import { Speaker } from './speakers/entities/speaker.entity';

@Module({
  imports: [SpeakersModule, EventsModule, TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost',
    port: 3306,
    username: 'root', // demo username
    password: 'password', // demo password
    database: 'ng-bd-demo', // demo database name
    entities: [Event, Speaker],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
