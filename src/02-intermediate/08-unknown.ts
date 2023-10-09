let input: unknown;

input = 3;
input = ['sf', 'sdf']

// let res: string = input; // error

function run(i: unknown) {
    if (typeof i === 'number') {
        i++;
    } else {
        i // stays unknown
    }
}

run(input)

async function getData() {
    try {
        await fetch('')
    } catch (error) {
        // console.log(error.message); // error
        if (error instanceof Error) {
            console.log(error.message);

        }
    }
}

async function getDataForce() {
    try {
        await fetch('')
    } catch (error) {
        const e = error as Error;
        console.log(e.message);
    }
}


type U1 = unknown | null; // unknown with another type always be unknown => U1 => unknown

type I1 = unknown & string; // string