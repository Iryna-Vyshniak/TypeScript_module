"use strict";
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error(`User has not displayName field`);
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}
const a = {};
assertUser(a);
a.name = 'John';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Not User');
}
//# sourceMappingURL=13-asserts.js.map