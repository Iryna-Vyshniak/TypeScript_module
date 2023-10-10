function logId(id: string | number): void {
    console.log(id);
}

const a = logId(1) // a = void

function multiply(a: number, b?: number) {  // : number | void
    if (!b) {
        return a * a;
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => { console.log('This func is void') }

const f2: voidFunc = () => {
    return true;  // ignore return because void
}

const bX = f2(); // void

const skills = ['Dev', 'Guard']

export const user = {
    s: ['s']
}

skills.forEach(skill => user.s.push(skill))

const v: void = undefined;