
type WellKnownBrands = 'apple' | 'lenove' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type Names = Record<string, number>
type BrandNames = Record<WellKnownBrands, number>

export const myBrands: BrandNames = {
    apple: 23,
    lenove: 44,
    dell: 34,
    hp: 36,
    huawei: 23,
    microsoft: 23,
}

// ----------------------------------

interface ITodo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

// pick -> take some properties
// include only - включити лише

type SimpleTodo = Pick<ITodo, 'id' | 'title' | 'completed'>

const todo1: SimpleTodo = {
    id: '1',
    title: 'Study',
    completed: false
}

// omit -> like Exclude, exclude only, don`t take write properties
//  виключити все

type SimpleTodo2 = Omit<ITodo, 'description' | 'createdAt'>
const todo2: SimpleTodo2 = {
    id: '1',
    title: 'Study',
    completed: false
}

type NewTodo = Pick<ITodo, 'title' | 'description'>


// Як потрібно описати тип CountriesByRegion для коректної типізації?
type Regions = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';


type CountriesByRegion = Record<Regions, string[]>

const visitedCountries: CountriesByRegion = {
    Africa: ['Egypt', 'Angola', 'Tunis'],
    America: ['Mexico'],
    Asia: ['India'],
    Europe: ['Spain', 'England', 'Hungary'],
    Oceania: []
}

// Даний тип Country, який буде використовуватись у різних цілях.

// Ми хочемо створити компонент із карткою, де мають виводитися лише назви країни, столиця та регіон.Як нам сформувати тип CountryCardProps?

type Country = {
    name: string,
    region: string,
    population: number,
    flag: string,
    capital: string,
    currencies: string[],
    languages: string[],
}

type CountryCardProps = Pick<Country, 'name' | 'region' | 'capital'>

// Ми знову працюємо з типом Country та знову хочемо створити компонент картки країни, але тепер крім назви, регіону та столиці, ми хочемо також додати туди прапор та розмір населення. Як нам сформувати тип CountryCardProps?

type CountryCardProps2 = Omit<Country, 'currencies' | 'languages'>
