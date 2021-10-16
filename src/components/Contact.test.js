const Contact = require("./Contact")
// @ponicode
describe("Contact.default", () => {
    test("0", () => {
        let callFunction = () => {
            Contact.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
