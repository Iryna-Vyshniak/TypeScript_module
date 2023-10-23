export { }

// { } - літерал це тип, який приймає будь-яке значення - одне конкретне

type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin-${Side}` // type Margin = "margin-top" | "margin-right" | "margin-bottom" | "margin-left"

// for JS
// Capitalize
// Lowercase
// Uppercase
// Uncapitalize
type MarginJS = `margin${'' | Capitalize<Side>}` // type Margin = "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft"

type Padding = `padding-${Side}` // type Padding = "padding-top" | "padding-right" | "padding-bottom" | "padding-left"

type Direction = "down" | "left" | "right" | "up";
type Position = "top" | "bottom";
type Entry = "in" | "out";
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`
/* type FadeClassNames = "fadeIn" | "fadeInTop" | "fadeInRight" | "fadeInBottom" | "fadeInLeft" | "fadeInDown" | "fadeInUp" | "fadeOut" | "fadeOutTop" | "fadeOutRight" | "fadeOutBottom" | "fadeOutLeft" | "fadeOutDown" | "fadeOutUp" */


interface Car {
  brand: string,
  model: string,
  year: number,
}

type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void
}

/* type CarFactory = {
    setBrand: (car: Car, value: string) => void;
    setModel: (car: Car, value: string) => void;
    setYear: (car: Car, value: number) => void;
} */
