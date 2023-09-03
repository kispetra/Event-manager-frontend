import { Registration } from "./registration";
import { Event } from "./event";
import { Participant } from "./participant";
export interface AppUser{
    username: string,
    firstName: string,
    lastName: string,
    address: string,
    houseNumber: string,
    country: string,
    email: string,
    events: Array<Event>,
    registrations: Array<Registration>,
    participants: Array<Participant>
}