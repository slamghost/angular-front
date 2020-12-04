import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export class Contact {

    name: string;
    phone: string;
    birthdate: any;
    type: string;

    constructor() {

        this.name = '';
        this.phone = '';
        this.birthdate = '';
        this.type = ''
    }

}