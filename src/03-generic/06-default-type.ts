interface AnyObject {
    [key: string]: unknown;
}

export async function request<T = AnyObject>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

interface Todo {
    id: string,
    completed: boolean,
    title: string
}
const data = request<Todo[]>('')