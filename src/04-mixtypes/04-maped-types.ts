type PcBrand = {
    name: string;
    country: string;
    createdAt: Date;
}

type WellKnownBrands = 'apple' | 'lenove' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type MyPcRecord = {
    // [key: 'a' | 'd']: PcBrand // ERROR
    // [BrandKey in WellKnownBrands]: PcBrand // OK
    [BrandKey in WellKnownBrands]?: PcBrand // OK
}

const brandRecord: MyPcRecord = {
    apple: {
        country: "US",
        createdAt: new Date(),
        name: "Apple",
    }
}

function printPcCatalog(pcCatalog: MyPcRecord) {
    console.log(pcCatalog.apple?.country);
}



type PartOfWindow = {
    [Key in 'document' | 'screen' | 'navigator']?: Window[Key]
}

const p: PartOfWindow = {
    screen: window.screen,
}

export { }