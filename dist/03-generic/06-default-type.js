export async function request(url) {
    const response = await fetch(url);
    return response.json();
}
const data = request('');
//# sourceMappingURL=06-default-type.js.map