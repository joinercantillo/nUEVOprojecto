import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto.js';
import { UpdateReservationDto } from './dto/update-reservation.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity.js';

import { CustonException } from './filters/http-exception.filters.js';


@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ){}
async  create(createReservationDto: CreateReservationDto) {
    
  const name = createReservationDto.customerName.trim();
  const existingReservation = await this.reservationRepository.findOneBy ({ customerName });


  if (existingReservation) {
    throw new CustonException(
      `reservation with customer name "${name}" already exists`,
    );
  }

  }

}
