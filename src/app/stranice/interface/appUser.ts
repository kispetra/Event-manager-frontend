import { Registration } from "./registration";
import { Event } from "./event";
import { Participant } from "./participant";
export interface AppUser{
    userid: number,
    login: string,
    firstname: string,
    lastname: string,
    address: string,
    houseNumber: string,
    country: string,
    email: string,
    events: Array<Event>,
    registrations: Array<Registration>,
    participants: Array<Participant>
}