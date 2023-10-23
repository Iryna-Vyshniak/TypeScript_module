export { }

type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';

// border-style: 'solid
type BorderStyle = `${Style} ${Uncapitalize<Color>}`
type BorderStyleLC = `${Style} ${Lowercase<Color>}`

const borderStyle: BorderStyle = 'solid red';
/* const borderStyle: "none red" | "none green" | "none blue" | "none black" | "none white" | "dotted red" | "dotted green" | "dotted blue" | "dotted black" | "dotted white" | "dashed red" | "dashed green" | ... 7 more ... | "solid white" */


const borderStyle2: BorderStyle = 'dashed white';
/* const borderStyle2: "none red" | "none green" | "none blue" | "none black" | "none white" | "dotted red" | "dotted green" | "dotted blue" | "dotted black" | "dotted white" | "dashed red" | "dashed green" | ... 7 more ... | "solid white" */


const borderStyle3: BorderStyleLC = 'dotted white';
/* const borderStyle3: "none red" | "none green" | "none blue" | "none black" | "none white" | "dotted red" | "dotted green" | "dotted blue" | "dotted black" | "dotted white" | "dashed red" | "dashed green" | ... 7 more ... | "solid white" */

