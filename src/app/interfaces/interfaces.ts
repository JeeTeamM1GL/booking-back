export interface User {
    id?:string;
    firstName? : string;
    lastName? : string;
    email? : string;
    telephone? : Telephone;
    password? : string;
    address? : string;
    role?: Role;
    enabled?: boolean;
    createdAt?: Date;
    updatedAt?: Date
}

export interface Telephone {
    indicatif?:string;
    number?:string;
}

export enum Role{
    SUPER_ADMIN = "SUPER_ADMIN",
    AMDIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    MANAGER = "MANAGER"
}