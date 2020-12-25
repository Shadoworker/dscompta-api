import { Entity } from '@loopback/repository';
export declare class Tesseract extends Entity {
    id?: string;
    title?: string;
    [prop: string]: any;
    constructor(data?: Partial<Tesseract>);
}
export interface TesseractRelations {
}
export declare type TesseractWithRelations = Tesseract & TesseractRelations;
