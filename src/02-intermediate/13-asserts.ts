type User = {
    name: string,
    displayName: string | null,
}

function assertDisplayName(user: User): asserts user is User & { displayName: string } {
    if (!user.displayName) throw new Error(`User has not displayName field`);
}

function logUserByDisplayName(user: User) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}


// ----------------------------------------------------------------

interface UserX {
    name: string;
}

const a = {};
assertUser(a)
a.name = 'John';

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Not User')
}