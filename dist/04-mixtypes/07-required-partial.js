const todo = {
    id: '1',
    title: "Delete inactive users",
    description: "clear clutter",
    completed: false,
    createdAt: new Date(),
};
// Цей підхід зробить все передачу всіх полів необов'язковими і можна буде змінити будь-який із ключів або групу ключів.
function updateTodo(todo, fieldsToUpdate) {
    return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
    id: '1',
    title: "organize desk",
    description: "clear clutter",
    completed: false,
    createdAt: new Date(),
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
function updateDeveloper(dev, updatedFields) {
    return { ...dev, ...updatedFields };
}
export {};
//# sourceMappingURL=07-required-partial.js.map