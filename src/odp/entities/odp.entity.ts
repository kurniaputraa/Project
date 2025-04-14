import { ODP as ODPModel} from '@prisma/client';
export class ODP implements ODPModel {
    name: string;
    id: number;
    latitude: string;
    longitude: string;
    cityId: number;
    
}
