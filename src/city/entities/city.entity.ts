import { City as CityModel } from '@prisma/client';
export class City implements CityModel {
  name: string;
  id: number;
}
