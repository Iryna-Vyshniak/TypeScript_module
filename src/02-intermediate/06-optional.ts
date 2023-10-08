interface User {
    login: string,
    password?: string
}

const user: User = {
    login: 'q@q.ua',
    password: 'qwerty',
}

function multiply(a: number, b: number = 5, c?: number): number {
    if (!c) {
        return a * b;
    }
    return a * b * c
}

multiply(5)


interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: UserPro) {
    // const t = user.password ?  user.password.type : undefined;
    const t = user.password?.type;
}

function testPassX(user: UserPro) {
    const t = user.password!.type; // sure that the password will never be undefined, always have type
}


export function test(params?: string) {
    const t = params && multiply(5) // if params is undefined or null -> do function multiply(5)
}


