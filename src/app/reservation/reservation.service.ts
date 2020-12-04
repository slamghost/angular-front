import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { Reservation } from './reservation';
import { map, catchError } from 'rxjs/operators';
import { Contact } from './contact';


@Injectable()
export class ReservationService {

    constructor(private _httpService: HttpClient) { }
    /**
     * Get list of reservations
     */
    getAllReservations(): Observable<Reservation[]> {

        return this._httpService.get('http://localhost:8080/bookingsys/api/reservation')
            .pipe(
                catchError(error => of(error))
            )

    }

    /**
     * Add a reservation
     * @param reservation 
     */
    addReservation(reservation: Reservation) {

        let body = JSON.stringify(reservation)
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        if (reservation.id) {

            return this._httpService.put('http://localhost:8080/bookingsys/api/update/' + reservation.id, body, {
                headers: headers
            })
        } else {

            return this._httpService.post('http://localhost:8080/bookingsys/api/save', body, {
                headers: headers
            })
        }

    }

    /**
     * Delete a reservation
     * @param reservationId 
     */
    deleteReservation(reservationId: string) {

        if (reservationId)
            return this._httpService.delete('http://localhost:8080/bookingsys/api/delete/' + reservationId)

    }

    /**
     * Get a reservation by Id
     * @param id 
     */
    getReservationById(id: number): Observable<Reservation> {

        return this._httpService.get('http://localhost:8080/bookingsys/api/get/' + id)
            .pipe(
                catchError(error => of(error))
            )

    }

    /**
     * Get contact by name
     * @param name 
     */
    getContactByName(name: string): Observable<Contact> {

        return this._httpService.get('http://localhost:8080/bookingsys/api/get_contact/' + name)
            .pipe(
                catchError(error => of(error))
            )
    }  
 
   
}