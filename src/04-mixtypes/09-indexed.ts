export { };

// ПО ІНДЕКСУ ОТРИМУВАТИ ВКЛАДЕНИЙ ТИП

interface DataModel {
  id: string,
  title: string,
  elements: {
    header: {
      title: string,
      description: string,
      links: string[]
    },
    footer: {
      description: string,
      links: string[]
    },
    body: [
      {
        title: string,
        content: {},
      },
    ],
  }
}

type T0 = DataModel['elements']['footer'] // => type T0 = { description: string; links: string[]; }

type someTuple = [number, string, boolean, ...string[]];
// for example:
const arr: someTuple = [1, 'asd', true, '', '']

type T1 = someTuple[1] // => type T1 = string
type T2 = someTuple[0] // => type T2 = number


const sizes = ['small', 'medium', 'large'] as const; // const sizes: readonly ["small", "medium", "large"]


// [number] - all indexex
type T3 = typeof sizes[number] // => type T3 = "small" | "medium" | "large"
// [number] - all indexes

