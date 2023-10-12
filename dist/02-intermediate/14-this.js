"use strict";
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true; // this - OK
    }
};
// <button onClick='myClickHandler(2)'>Save</button>
function myClickHandler(event, b) {
    event.preventDefault();
    this.disabled = true;
}
//# sourceMappingURL=14-this.js.map