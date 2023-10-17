import { average } from '../01-basic/02-functions'

console.log(typeof 'rtyureur');
const levels = ['junior', 'middle', 'senior'] as const
type Level = typeof levels[number]

const str = 'Hello'
type x = typeof str;

type fn = typeof average; // type fn = (...nums: number[]) => number

const max: fn = (...nums) => Math.max(...nums)
max(1, 2, 3)

type returnFn = ReturnType<typeof average> // type returnFn = number