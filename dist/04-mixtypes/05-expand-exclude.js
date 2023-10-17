// Exclude - передаємо юніон, останній параметр - останній параметр - те, що хочемо виключити
export function keys(obj) {
    const currentKeys = [];
    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
//# sourceMappingURL=05-expand-exclude.js.map