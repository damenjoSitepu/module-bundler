const path = require("path");

module.exports = {
    mode: "production",
    entry: "./webpack/src/secure-application.js",
    output: {
        filename: "secure-bundled-application.js",
        path: path.resolve(__dirname,"../module-bundle"),
    },
    watch: true
}