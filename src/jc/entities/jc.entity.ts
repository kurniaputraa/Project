import { JC as JCModel } from "@prisma/client";
export class JC implements JCModel{
    name: string;
    id: number;
    latitude: string;
    longitude: string;
    cityId: number;
    
}