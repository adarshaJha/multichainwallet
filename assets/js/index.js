
// required bitcore.js libraries to interact with blockchain //
    bitcore = require('bitcore-lib');
    Mnemonic = require('bitcore-mnemonic');
    buffer = bitcore.util.buffer;
    // Buffer = require('buffer');

// List of global variables declared and Console toggle can be achieved by changing the value of CONSOLE_DEBUG to either true or false //

var CONSOLE_DEBUG = false;
var privkey1;
var pubaddr;
var pubkey1;
var net = localStorage.getItem("network");
var Bal;
pubaddr = localStorage.getItem("pubaddr");
var mainNetAddr;
var testNetAddr;
var address_pubkeyhash_version;
var address_checksum_value;
var private_key_version;
wordListLang = 'ENGLISH';
entropyLength = 256;
password = '';
var seed;
var MnemonicsArray;


$(Document).ready(function(){

    $('#createKeyPairsBtn').click(function(){
        jQuery.ajax({
            type: "POST",
            url: 'assets/api/createkeypairs.php',
            data: ({
               
            }),
            success: function(Response) {
                var x = Response;
                x = JSON.parse(x);
               alert(x);
               
    
            }
        });
    });
});



function generateBip39BBITWallet(password, wordListLang, entropyLength,
    address_pubkeyhash_version, address_checksum_value,
    private_key_version) {

    const wordList = eval('Mnemonic.Words.' + wordListLang);
    var code = new Mnemonic(entropyLength, wordList);

    var xprivKey = code.toHDPrivateKey(password); // using a passphrase
    var masterPrivateKey = xprivKey.privateKey.toString();

    BBITPublicAddress = createBBITAddressFromPrivateKey(masterPrivateKey, address_pubkeyhash_version, address_checksum_value);
    BBITPrivateKey = createBBITPrivateKeyFromPrivateKey(masterPrivateKey, private_key_version, address_checksum_value);

    CONSOLE_DEBUG && console.log("final publickey hex pkh1: ", PublicKeyString);
    // var pkh = bitcore.PublicKey.fromString(PublicKeyString);
    // CONSOLE_DEBUG && console.log("final publickey hex pkh: ", pkh);


    var xrkWallet = {
        "status": "success",
        "address": BBITPublicAddress,
        "privateKey": BBITPrivateKey,
        "publicKey": PublicKeyString,
        "seed": code.toString()
    };

    CONSOLE_DEBUG && console.log("BBITWallet", BBITWallet);
    CONSOLE_DEBUG && console.log("BBITWallet success : ", BBITWallet.status);
    CONSOLE_DEBUG && console.log("BBITWallet address :", BBITWallet.address);


    CONSOLE_DEBUG && console.log("BBITWallet privateKey :", BBITWallet.privateKey);
    CONSOLE_DEBUG && console.log("BBITWallet seed :", BBITWallet.seed);
    seed = BBITWallet.seed;

    localStorage.setItem("pubaddr", BBITWallet.address);
    pubaddr = localStorage.getItem("pubaddr");
    privkey1 = BBITWallet.privateKey;
    CONSOLE_DEBUG && console.log("BBITWallet privkey1 :", privkey1);

    CONSOLE_DEBUG && console.log("BBITWallet pubaddr :", pubaddr);



    return BBITWallet;


}




function restoreBip39BBITWallet(codeStr, password = '', address_pubkeyhash_version = '0041bb05',
    address_checksum_value = '07cb53da', private_key_version = '80fbe117') {

    try {
        if (!Mnemonic.isValid(codeStr))
            return {
                "status": "error",
                "message": "Seed/mnemonic list is not valid."
            };
    } catch (e) {
        return {
            "status": "error",
            "message": "Seed/mnemonic list is not valid."
        };
    }

    var code = new Mnemonic(codeStr);

    var xprivKey = code.toHDPrivateKey(password); // using a passphrase
    var masterPrivateKey = xprivKey.privateKey.toString();

    BBITPublicAddress = createBBITAddressFromPrivateKey(masterPrivateKey, address_pubkeyhash_version, address_checksum_value);
    BBITPrivateKey = createBBITPrivateKeyFromPrivateKey(masterPrivateKey, private_key_version, address_checksum_value);

    var BBITWallet = {
        "status": "success",
        "address": BBITPublicAddress,
        "publicKey": publicKeyHex,
        "privateKey": BBITPrivateKey
    };

    return BBITWallet;
