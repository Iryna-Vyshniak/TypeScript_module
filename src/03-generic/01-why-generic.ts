function head(value: string): string;
function head(value: number[]): number;
function head(value: string[]): string;
function head(value: boolean[]): boolean;
function head(value: Date[]): Date;

function head(value: any): any {
    return value[0];
}

head('string');
head([1, 2, 4, 34]);
head([true, false, true, false]);


interface IModelData {
    title: string
    value: string // number[] boolean
}