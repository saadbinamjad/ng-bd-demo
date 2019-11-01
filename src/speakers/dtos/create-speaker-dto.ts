import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSpeakerDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly company: string;
}
