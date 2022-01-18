var rsa = require("node-rsa");
var fs = require("fs");

var publicKey = new rsa();
var privateKey = new rsa();

var public = fs.readFileSync("./Keys/public.pem", "utf8");
var private = fs.readFileSync("./Keys/private.pem", "utf8");

publicKey.importKey(public);
privateKey.importKey(private);

function CreateLicense(mail) {
    const salt = "hdgsdfhvodhfnlkgfidslfjfhus";
    const saltSecond = "hdgsdfhvo24344kgfidslfjfhus";

    const encrypted = privateKey.encryptPrivate(salt+mail+saltSecond, "base64");
    return encrypted;
}

function CheckValidity(License){
    const decrypted = publicKey.decryptPublic(License, "utf8");

    if("hdgsdfhvodhfnlkgfidslfjfhusaks@example.comhdgsdfhvo24344kgfidslfjfhus" == decrypted) {
        return true;
    }else{
        return false;
    }
}

console.log( CheckValidity("icX4uP84SfvIXT0ICDfa5BccJwZj7AHrmsP+UV9TaIsmjIs4onPxkKFRyTuKF9SNyWncKTm+tQEbykxeWRzskKklc6HUqImrx+5sGmftB+UL9TjbsZ4OUWH2/VUegu2f1V3yfGYLIdPHnhc/BeuczfgP2Bv5sHl5/EYnvoNrtbfGBlg+9NMejm9kWSw+eENel8SxLj5i0v5Pp/F92MwvGJL6PMsRd5cBi3CuevpqISHNu9hDs/TJzLmBm+J5cIpdmBlFpmc8crd4Xgl95sU2GQe1I8eJw+48ZzERAcglix1cCN555IXkSTRwAHxoXSpfBpiLDBp126yFENHIHedo8Q=="));