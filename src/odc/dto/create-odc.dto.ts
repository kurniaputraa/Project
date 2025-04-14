import { IsString } from "class-validator";

export class CreateOdcDto {
    @IsString()
    name: string;
}
