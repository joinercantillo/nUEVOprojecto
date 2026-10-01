
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReservationDto {
    @ApiProperty({ example: 'Carlos Pérez' })
    @IsString()
    @IsNotEmpty()
    customerName: string;

    @ApiProperty({ example: 'carlos@example.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 4, minimum: 1 })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    people: number;
}
