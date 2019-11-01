import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateEventDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly description: string;
}
