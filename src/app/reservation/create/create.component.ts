import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { windowWhen } from 'rxjs/operators';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { error } from 'protractor';
import { Contact } from '../contact';

@Component({

    selector: 'app-create-reservation',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

@Injectable()
export class CreateReservationComponent implements OnInit {

    form: FormGroup
    reservation = new Reservation()
    birthdateTemp: any
    reservationId: number;
    sub: any;
    validForm = true;
    public Editor = ClassicEditor;
    timeout = null;

    contactTypes = ['Premium', 'Regular']

    constructor(private _reservationService: ReservationService, private _router: Router, private router: ActivatedRoute) { }

    ngOnInit() {

        this.sub = this.router.params.subscribe(params => {
            this.reservationId = +params['id'];
        })

        if (this.reservationId > 0) {
            this.getReservation();
        }

    }

    checkContactName() {

        clearTimeout(this.timeout)
        let self = this
        this.timeout = setTimeout(() => {

            this._reservationService.getContactByName(this.reservation.owner.name)
                .subscribe((response) => {

                    
                    if (response.birthdate && (response instanceof Object)) {

                        self.reservation.owner = response
                        let date = new Date(self.reservation.owner.birthdate);
                        self.birthdateTemp = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
                    }
                },
                    (error) => {
                        console.log(error);
                    })

        }, 1500)
    }

    onDateSelect() {

        const newDate = this.birthdateTemp
        let { year, month, day } = newDate

        let mdate = new Date(year, month - 1, day)
        this.reservation.owner.birthdate = mdate.getTime()
    }

    addReservation(): void {

        if (this.checkForm()) {

            this._reservationService.addReservation(this.reservation)
                .subscribe((response) => {

                    this._router.navigate(['/']);
                },
                    (error) => { console.log(error) })
        }
    }

    /**
     *  Custom Validation
     */

    checkForm() {

        if (this.reservation.owner.name !== '' && this.reservation.owner.type !== '' && this.reservation.owner.birthdate !== '') {
            this.validForm = true
            return true
        }

        this.validForm = false
        return false;
    }

    getReservation() {

        this._reservationService.getReservationById(this.reservationId)
            .subscribe((reservationData) => {

                this.reservation = reservationData
                let date = new Date(this.reservation.owner.birthdate);
                this.birthdateTemp = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());

            }, (error) => {
                console.log(error)
            })
    }


}