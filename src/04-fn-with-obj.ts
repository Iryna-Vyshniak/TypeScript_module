function printPoint(point: { x: string; y: string }): void {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}

const object = {
    x: '1',
    y: '2',
    z: 4,
}

printPoint(object)

function printName(user: { firstName: string; lastName?: string }): void {
    console.log(`Hello`, user.firstName.toUpperCase());
    if (user.lastName) console.log(`Nice to meet you Mr.`, user.lastName.toUpperCase());
}

printName({ firstName: 'John' })
printName({ firstName: 'John', lastName: 'Doe' })


function getFullData(userEntity: { firstName: string, lastName: string }): string {
    console.log(`Hello`, userEntity.firstName.toUpperCase());
    return `Nice to meet you Mr. ${userEntity.lastName.toUpperCase()}`;
}

const userX = {
    firstName: 'John',
    lastName: 'Doe',
    city: 'San Francisco',
    age: 34,
    skills: {
        dev: true,
        devops: true,
    }
}

// getFullData({ firstName: 'John' })  => error
getFullData({ firstName: 'John', lastName: 'Doe' })