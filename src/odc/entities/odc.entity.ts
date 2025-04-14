import { ODC as ODCModel} from '@prisma/client';
export class ODC implements ODCModel {
    name: string;
    id: number;
    latitude: string;
    longitude: string;
    cityId: number;

}
