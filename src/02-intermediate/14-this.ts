const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true; // this - OK
    }
}

// <button onClick='myClickHandler(2)'>Save</button>

function myClickHandler(this: HTMLButtonElement, event: Event, b: number) {
    event.preventDefault();
    this.disabled = true;
}