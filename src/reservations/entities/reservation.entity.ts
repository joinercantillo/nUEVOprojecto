
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationStatus } from '../enums/reservation-status.enum.js';


@Entity('Reservations')
export class Reservation {
    @ApiProperty({
        format: 'uuid',
        example: '3f2a7c1d-5b8e-4d0a-9c6f-123456789abc',
        
    })
    @PrimaryGeneratedColumn('uuid')
    id:string

    @ApiProperty({
        
        example: 'Juancho Roy Bin laden',
        
    })
    @Index({ unique: true })
    @Column({ length: 100 })
    customerName: string;


    @ApiProperty({
        example: '4',
        
    })
    @Column({})
    people: number
}
