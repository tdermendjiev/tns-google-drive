var GoogleDrive = require("nativescript-google-drive").GoogleDrive;
var googleDrive = new GoogleDrive();

describe("greet function", function() {
    it("exists", function() {
        expect(googleDrive.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(googleDrive.greet()).toEqual("Hello, NS");
    });
});