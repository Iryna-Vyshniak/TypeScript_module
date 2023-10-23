export { }

interface ITodo {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
}

type ReadOnlyTodo = Readonly<ITodo> // make all fields read-only

const todo: Readonly<ITodo> = {
    id: '1',
    title: "Delete inactive users",
    description: "clear clutter",
    completed: false,
    createdAt: new Date(),
};

// todo.title = "Hello"; // => Cannot assign to 'title' because it is a read - only property.

type PartialTodo = Partial<ITodo> // all fields become aren`t necessarily
// Цей підхід зробить все передачу всіх полів необов'язковими і можна буде змінити будь-який із ключів або групу ключів.

function updateTodo(todo: ITodo, fieldsToUpdate: PartialTodo) {
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

type RequiredTodo = Required<ITodo> // make all fields required

// Даний тип Developer. Як на базі його створити тип FrontendDeveloper, у якого всі ключі збігатимуться з оригінальним Developer, але будуть обов'язковими?

type LanguageLevel = 'begginer' | 'junior' | 'middle' | 'senior' | 'native';

type Developer = {
    html: LanguageLevel,
    css: LanguageLevel,
    javascript?: LanguageLevel,
    typescript?: LanguageLevel,
}

type FrontendDeveloper = Required<Developer>;

// Даний тип Developer та функція для оновлення його полів. Як правильно встановити тип для другого параметра функції updateDeveloper?

type Skill = { language: string, level: LanguageLevel }

type Developer1 = {
    id: string,
    login: string,
    level: 'junior' | 'middle' | 'senior',
    skills: Skill[],
}

function updateDeveloper(dev: Developer1, updatedFields: Partial<Developer1>) {
    return { ...dev, ...updatedFields }
}





