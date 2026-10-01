import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateReservationDto } from './dto/create-reservation.dto.js';
import { CustonException } from './filters/http-exception.filters.js';

@Injectable()
export class ReservationsService {
  private readonly reservations: Array<{
    id: string;
    customerName: string;
    people: number;
  }> = [];

  findAll() {
    return this.reservations;
  }

  create(createReservationDto: CreateReservationDto) {
    const customerName = createReservationDto.customerName.trim();
    const existingReservation = this.reservations.find(
      (reservation) => reservation.customerName === customerName,
    );

    if (existingReservation) {
      throw new CustonException(
        `Reservation with customer name "${customerName}" already exists`,
      );
    }

    const reservation = {
      id: randomUUID(),
      customerName,
      people: createReservationDto.people,
    };
    this.reservations.push(reservation);

    return reservation;
  }
}
