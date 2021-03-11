export class User {
    uid!: string;
    email!: string;
    PhoneNumber!: string;
    firstName!: string;
    LastName!: string;
    displayName!: string;
    photoURL!: string;
    emailVerified!: boolean;
    password!: string;
 }
export class PhoneNumber {
    country!: string;
    number!: string;
    // format phone numbers as E.164
    get e164(): string{
      const num = this.country + this.number ;
      return `+${num}`;
    }

  }
