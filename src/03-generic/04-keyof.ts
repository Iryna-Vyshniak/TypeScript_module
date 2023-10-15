type WindowProp = keyof Window;

// ctrl + space
const myValue: WindowProp = 'ontoggle';

interface PC {
    brand: string;
    year: string
}

type Type1 = keyof PC; // brand | year

const val: Type1 = 'brand'

type Tup1 = keyof [string, number]

const val2: Tup1 = '0'