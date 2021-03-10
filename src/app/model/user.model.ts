export class User {
    uid!: string;
    email!: string;
    displayName!: string;
    photoURL!: string;
    emailVerified!: boolean;
 }
export class PhoneNumber {
    country!: string;
    number!: string;
    // format phone numbers as E.164
    get e164() {
      const num = this.country + this.number ;
      return `+${num}`;
    }

  }
