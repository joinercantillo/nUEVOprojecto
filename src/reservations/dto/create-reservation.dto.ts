
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength,IsEmail, IsNumber } from 'class-validator';



export class CreateReservationDto {
    @ApiProperty({ example: 'Main Courses', minLength: 4, maxLength: 100 })
    @IsString()
    @IsNotEmpty()
    @MinLength(4, { message: 'Enter at least 4 characters' })
    @MaxLength(100, { message: 'Enter no more than 100 characters' })
    customerName: string;


    @ApiProperty({ example: 'Main Courses', minLength: 4, maxLength: 100 })
    @IsEmail()
    @IsNotEmpty()
    @MinLength(4, { message: 'Enter at least 4 characters' })
    @MaxLength(100, { message: 'Enter no more than 100 characters' })
    email: string;

    @ApiProperty({ example: 'Main Courses', minLength: 4, maxLength: 100 })
    @IsNumber()
    @IsNotEmpty()
    @MinLength(4, { message: 'Enter at least 4 characters' })
    @MaxLength(100, { message: 'Enter no more than 100 characters' })
    people: number;
}
