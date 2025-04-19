import { City as CityModel } from "@prisma/client";

export class CityEntity implements CityModel {
    name: string;
    id: string;
}
