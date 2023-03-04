import { IsDate, IsEmail, IsNotEmpty } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    // @IsDate()
    date_of_birth: Date;

    @IsNotEmpty()
    house_no: string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;

    postcode: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    mobile: string;

    @IsNotEmpty()
    salary: number;

    @IsNotEmpty()
    department: string;

    @IsNotEmpty()
    position: string;

}

