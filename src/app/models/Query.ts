import { Country } from "./Country";

export class Query {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.organization = "";
    this.country = new Country();
    this.phoneNumber = "";
    this.query = "";

  }

  firstName: string;
  lastName: string;
  organization: string;
  country: Country;
  emailId: string;
  phoneNumber: string;
  query: string;
}
