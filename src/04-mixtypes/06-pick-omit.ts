
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



