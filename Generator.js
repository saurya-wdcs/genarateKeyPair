var rsa = require("node-rsa");
var fs = require("fs");

function GeneratePair() {
    var key = new rsa().generateKeyPair();

    var publicKey = key.exportKey("public");

    var privateKey = key.exportKey("private");

    fs.openSync("./Keys/public.pem", "w")
    fs.writeFileSync("./Keys/public.pem", publicKey, "utf8")

    fs.openSync("./Keys/private.pem", "w")
    fs.writeFileSync("./Keys/private.pem", privateKey, "utf8")
    
}

GeneratePair();
