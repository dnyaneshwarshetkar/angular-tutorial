type GenderType = "MALE"|"FEMALE"
export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    gender?: GenderType;
    email: string;
    mobile: string;
}