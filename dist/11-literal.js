"use strict";
// Literal Type — це тип, що набуває конкретного значення.З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.
let valueX;
valueX = 1; // OK
valueX = 2; // OK
let answerX;
answerX = 'yes'; // OK
answerX = 'no'; // OK
// answerX = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.
function fetchWithAuths(url, method) {
    // return 0; // error
    return 1; // ok
}
const url = 'https://api/v1/rest';
fetchWithAuths(url, 'POST');
const method = 'GET';
fetchWithAuths(url, method); // ok
let methodFromObj = 'POST';
fetchWithAuths(url, methodFromObj); // ok => use cust as
function getButtonStyle(size) {
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
let myButtonStyle = getButtonStyle('medium'); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.
//# sourceMappingURL=11-literal.js.map