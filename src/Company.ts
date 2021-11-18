import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    name: string;
    location: {
        lat: number,
        lng: number,
    };
    catchPhrase: string;

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
        <div>
            <h1>${this.name}</h1>
            <h3>${this.catchPhrase}</h3>
        </div>
        `
    }

}

