import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from './reservation';
import { ReservationService } from './reservation.service';

@Component({

    selector: 'app-reservation-list',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

    reservations: Reservation[];

    itemsPerPage = 5;
    currentPage = 1
    collectionSize: number;
    pageSize: number;
    sorting: Array<Object>;

    constructor(private _reservationService: ReservationService, router: Router) { }

    /**
     * 
     */
    public onPageChange(pageNumber: number): void {

        this.pageSize = this.itemsPerPage * (pageNumber - 1)

    }

    ngOnInit() {

        this.sorting = [{ name: 'By Alphabetical Ascending', value: 'asc' }, { name: 'By Alphabetic Descending', value: 'desc' }]
        this.getReservations();
    }

    /**
     * Get a List of Reservations
     */
    getReservations() {
        this._reservationService.getAllReservations()
            .subscribe((reservationData) => { this.reservations = reservationData, this.collectionSize = reservationData.length }, (error) => {
                console.log(error)
            })
    }
    /**
     * Delete a reservation 
     * 
     * @param reservationId Reservation id
     */
    deleteReservation(reservationId: string) {

        this._reservationService.deleteReservation(reservationId)
            .subscribe((response) => {

                this.getReservations()
            },
                (error) => {
                    console.log(error)
                })

    }

    /**
     *  Order reservations by description asc or desc
     */
    order(type: string) {

        switch (type) {
            case 'asc':

                this.reservations.sort((a, b) => {

                    if (a.description < b.description) return -1

                    if (a.description > b.description) return 1

                    return 0
                })

                break;

            case 'desc':

                this.reservations.sort((a, b) => {

                    if (a.description > b.description) return -1

                    if (a.description < b.description) return 1

                    return 0
                })
                break;

            default:
                break;
        }
    }


}