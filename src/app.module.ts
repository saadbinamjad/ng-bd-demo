import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeakersModule } from './speakers/speakers.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [SpeakersModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
