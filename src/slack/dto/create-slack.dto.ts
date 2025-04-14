import { IsString } from "class-validator";

export class CreateSlackDto {
    @IsString()
    name: string;
}
