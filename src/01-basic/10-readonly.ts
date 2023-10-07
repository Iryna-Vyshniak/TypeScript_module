// const skill: [number, string] = [1, 'Dev'];
// skill[0] = 2 // ok - change

// readonly  - say that const skill = [1, 'Dev'];  is tuple and can`t be changed

// eslint-disable-next-line prettier/prettier
const skill: readonly [number, string] = [1, 'Dev'];
// skill[0] = 2;  // error

const skillX: readonly string[] = ['Dev', 'QA']
// skillX[0] = ''; // error

const skillXX: ReadonlyArray<string> = ['Dev', 'QA']
// skillXX[0] = ''; // error

// skill.push('') // error