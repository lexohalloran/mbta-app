import { Attributes } from './attributes';

export interface Datum {
    type: string;
    id: string;
    attributes: Attributes;
}