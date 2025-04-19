import { OmitType } from "@nestjs/mapped-types";
import { CityEntity } from "../entities/city.entity";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCityDto extends OmitType(CityEntity, ['id']) {
    @IsNotEmpty()
    @IsString()
    name: string;
}
