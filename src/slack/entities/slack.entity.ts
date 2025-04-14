import {Slack as SlackModel} from "@prisma/client";
export class Slack implements SlackModel{
    name: string;
    id: number;
    latitude: string;
    longitude: string;
    cityId: number;
}
