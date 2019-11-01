import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;
}
