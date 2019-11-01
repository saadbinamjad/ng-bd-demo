import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateSpeakerDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly company: string;
}
