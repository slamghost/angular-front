import { Contact } from './contact'
export class Reservation {

    id: string;
    description: string;
    owner: Contact;


    constructor() {      
        this.description = ""
        this.owner = new Contact();
    }

}