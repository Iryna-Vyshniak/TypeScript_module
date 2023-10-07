/* eslint-disable prettier/prettier */
// Literal Type — це тип, що набуває конкретного значення.З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.

type FirstOrSecond = 1 | 2;
let valueX: FirstOrSecond;
valueX = 1; // OK
valueX = 2; // OK
// valueX = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNoX = 'yes' | 'no';
let answerX: YesOrNoX;
answerX = 'yes'; // OK
answerX = 'no'; // OK
// answerX = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

function fetchWithAuths(url: string, method: 'POST' | 'GET'): 1 | -1 {
    // return 0; // error
    return 1; // ok
}

const url = 'https://api/v1/rest';
fetchWithAuths(url, 'POST');

const method = 'GET';
fetchWithAuths(url, method); // ok

const methodFromObj = 'POST';
fetchWithAuths(url, methodFromObj as 'POST'); // ok => use cust as

type ButtonSize = 'small' | 'medium' | 'large';

function getButtonStyle(size: ButtonSize) {
    switch (size) {
        case 'small':
            return { fontSize: '10px', padding: '5px' };
        case 'medium':
            return { fontSize: '14px', padding: '10px' };
        case 'large':
            return { fontSize: '18px', padding: '15px' };
        default:
            return { fontSize: '14px', padding: '10px' };
    }
}

const myButtonStyle = getButtonStyle('medium'); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.
