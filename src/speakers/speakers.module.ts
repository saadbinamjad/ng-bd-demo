import { Module } from '@nestjs/common';
import { SpeakersController } from './speakers.controller';
import { SpeakersService } from './speakers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker } from './entities/speaker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Speaker])],
  controllers: [SpeakersController],
  providers: [SpeakersService],
})
export class SpeakersModule { }
