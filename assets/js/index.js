
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
var publicKey;
var redeemScript;
var publicAddress;
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
var isvalid;
var hex;
var decodedvout;
var txid;
var scriptHash;
var finaltxid;
var privateKey;
address_pubkeyhash_version = '00';
address_checksum_value = '00000000';
private_key_version = '80';

$('Document').ready(function(){


    //addressGenrationScript();
    BitcoreAddressGenerator();
    sendTransaction();

});


// function addressGenrationScript(){
//     $('#createKeyPairsBtn').click(function(){
//         $.ajax({
//             type: "POST",
//             // url: "/assets"
//             url: 'assets/api/createkeypairs.php',
//             data: ({
               
//             }),
//             success: function(Response) {
//                 var x = Response;
//                 console.log(x); 
//                 x = JSON.parse(x);
//                 publicKey = x.result[0].pubkey;
//                 publicAddress = x.result[0].address;

//                 importAddress(publicAddress);

                
//                 createmultisig();
                          
//             }
//         });
//     });
// }


function createmultisig(){
    $.ajax({
        type: "POST",
        // url: "/assets"
        url: 'assets/api/createmultisig.php',
        data: ({
           publicKey:publicKey
        }),
        success: function(Response) {
            publicAddress = Response;
            publicAddress = JSON.parse(publicAddress);
            publicAddress = publicAddress.result.address;
          
            console.log(publicAddress, "outscope"); 
            localStorage.setItem("publicAddress", publicAddress);
            
            importAddress(publicAddress);

            validateAddress();
                      
        }
    });   
    
}



function importAddress(publicAddress){
    // publicAddress = localStorage.getItem('publicAddress');
    $.ajax({
        type: "POST",
        // url: "/assets"
        url: 'assets/api/importaddress.php',
        data: ({
           publicAddress : publicAddress
        }),
        success: function(Response) {
            importAddressResponse = Response;
            importAddressResponse = JSON.parse(importAddressResponse);
            importAddressResponse = importAddressResponse.result.address;
          
            //console.log(importAddressResponse, "outscope"); 
            //localStorage.setItem("importAddressResponse", importAddressResponse);
            
                      
        }
    });   
    
}




function validateAddress(){
    $.ajax({
        type: "POST",
        // url: "/assets"
        url: 'assets/api/validateaddress.php',
        data: ({
           publicAddress:publicAddress
        }),
        success: function(Response) {
            addressValidity = Response;
            addressValidity = JSON.parse(addressValidity);
            isvalid = addressValidity.result.isvalid;
            console.log(isvalid, "isvalid");
          
            console.log(addressValidity, "outscope"); 

            redirectToHome();
            
                      
        }
    });   
    
}

function decodeTransaction(hex){
    $.ajax({
        type: "POST",
        // url: "/assets"
        url: 'assets/api/decodetransaction.php',
        data: ({
           hex:hex
        }),
        success: function(Response) {
            var txdata = Response;
            txdata = JSON.parse(txdata);
            txid = txdata.result.vin[0].txid;
            decodedvout = txdata.result.vin[0].vout;
            console.log(txid, "result is: ");

            getScripthash(txid);
                             
        }
    });   
    
}

function getScripthash(txid){

       $.ajax({
        type: "POST",
        // url: "/assets"
        url: 'assets/api/getScripthash.php',
        data: ({
                txid : txid     
        }),
        success: function(Response) {
            var x = Response;
            x = JSON.parse(x);
            scriptHash = x.result.vout[decodedvout].scriptPubKey.hex;
            console.log(scriptHash, "script hash is:");      
            signTransaction(hex, txid, decodedvout, scriptHash, redeemScript, privateKey);     
        }
        
    });

}


function signTransaction(hex, txid, decodedvout, scriptHash, redeemScript, privateKey){
    
    var privateKey = $('#privkey').val();
    redeemScript = localStorage.getItem('redeemscript');
    
    $.ajax({
        type: "POST",
        // url: "/assets"
        url: 'assets/api/signtransaction.php',
        data: ({
           hex: hex,
           txid: txid,
           decodedvout: decodedvout,
           redeemScript: redeemScript,
           scriptHash: scriptHash,
           privateKey : privateKey
        }),
        success: function(Response) {
            signedresult = Response;
            signedresult = JSON.parse(signedresult);
            finalhex = signedresult.result.hex;
            console.log(finalhex, "final hex is:");
          
            //console.log(addressValidity, "outscope");            
                      
        }
    });   
    
}



function redirectToHome(){
    if(isvalid == true){
        window.location.href = "/multichainwallet/home.php";
    }
    else{
        alert("invalid address ");
    }
}


// function to generate BIP39XRKwallet

function BitcoreAddressGenerator(){
     $('#createKeyPairsBtn').click(function(){
            generateBip39XRKWallet(password, wordListLang, entropyLength,
    address_pubkeyhash_version, address_checksum_value,
    private_key_version);
     });
}




function generateBip39XRKWallet(password, wordListLang, entropyLength,
    address_pubkeyhash_version, address_checksum_value,
    private_key_version) {

    const wordList = eval('Mnemonic.Words.' + wordListLang);
    var code = new Mnemonic(entropyLength, wordList);

    var xprivKey = code.toHDPrivateKey(password); // using a passphrase
    var masterPrivateKey = xprivKey.privateKey.toString();

    PublicAddress = createXRKAddressFromPrivateKey(masterPrivateKey, address_pubkeyhash_version, address_checksum_value);
    PrivateKey = createXRKPrivateKeyFromPrivateKey(masterPrivateKey, private_key_version, address_checksum_value);

    CONSOLE_DEBUG && console.log("final publickey hex pkh1: ", PublicKeyString);
    // var pkh = bitcore.PublicKey.fromString(PublicKeyString);
    // CONSOLE_DEBUG && console.log("final publickey hex pkh: ", pkh);


    var xrkWallet = {
        "status": "success",
        "address": xrkPublicAddress,
        "privateKey": xrkPrivateKey,
        "publicKey": PublicKeyString,
        "seed": code.toString()
    };

    CONSOLE_DEBUG && console.log("xrkWallet", xrkWallet);
    CONSOLE_DEBUG && console.log("xrkWallet success : ", xrkWallet.status);
    CONSOLE_DEBUG && console.log("xrkWallet address :", xrkWallet.address);


    CONSOLE_DEBUG && console.log("xrkWallet privateKey :", xrkWallet.privateKey);
    CONSOLE_DEBUG && console.log("xrkWallet seed :", xrkWallet.seed);
    seed = xrkWallet.seed;

    localStorage.setItem("pubaddr", xrkWallet.address);
    publicAddress = localStorage.getItem("pubaddr");
    privatekey = xrkWallet.privateKey;
    CONSOLE_DEBUG && console.log("xrkWallet privkey1 :", privkey1);

    CONSOLE_DEBUG && console.log("xrkWallet pubaddr :", pubaddr);



    return xrkWallet;


}


// this functions creates XRK Public Address from master private key
function createXRKAddressFromPrivateKey(masterPrivateKey, address_pubkeyhash_version, address_checksum_value) {

    // step 1: Get raw private key
    var privateKeyHex = new bitcore.PrivateKey(masterPrivateKey);

    // step 2: Get public key from private key
    publicKeyHex = privateKeyHex.publicKey;

    var publicKeyBuffer = publicKeyHex.toBuffer();


    // step 3: Calculate sha256 hash of the public key
    var publicKeySHA256Hash = new bitcore.crypto.Hash.sha256(publicKeyBuffer);

    // step 4: Calculate ripemd160 hash of the previous sha256 hash
    var publicKeyRipemd160Hash = new bitcore.crypto.Hash.ripemd160(publicKeySHA256Hash);

    // step 5: insert address_pubkeyhash_version at appropriate place in previous digest
    var adrPubKeyHashVer = buffer.hexToBuffer(address_pubkeyhash_version);
    var insertStep = Math.floor(20 / adrPubKeyHashVer.length)
    var publicKeyExtendedRipemd160Hash = buffer.copy(publicKeyRipemd160Hash);

    for (var i = 0; i < adrPubKeyHashVer.length; i++) {

        var buf_before = publicKeyExtendedRipemd160Hash.slice(0, i + i * insertStep);
        var buf_middle = adrPubKeyHashVer.slice(i, i + 1);
        var buf_after = publicKeyExtendedRipemd160Hash.slice(i + i * insertStep);

        publicKeyExtendedRipemd160Hash = buffer.concat([buf_before, buf_middle, buf_after]);

    }

    // step 6: Calculate sha256 of the extended ripemd160
    var publicKeySHA256HashOfExtendedRipemd160Hash = new bitcore.crypto.Hash.sha256(publicKeyExtendedRipemd160Hash);

    // step 7: Calculate sha256 hash of the previous sha256 hash
    var publicKeySHA256HashOfSHA256HashOfExtendedRipemd160Hash = new bitcore.crypto.Hash.sha256(publicKeySHA256HashOfExtendedRipemd160Hash);

    // step 8: Get address checksum - First 4 bytes of previous hash
    var addressChecksum = publicKeySHA256HashOfSHA256HashOfExtendedRipemd160Hash.slice(0, 4);

    // step 9: XOR above checksum with address-checksum-value blockchain parameter
    var adrChecksumValue = buffer.hexToBuffer(address_checksum_value);
    var xoredChecksum = xorBuffer(adrChecksumValue, addressChecksum);

    // step 10: Add xored checksum at the end of extended ripemd160 hash (from step 5)
    var PublicBinaryAddress = buffer.concat([publicKeyExtendedRipemd160Hash, xoredChecksum]);

    // step 11: Apply bitcoin base58 encoding to above result
    var publicAddress = bitcore.encoding.Base58.encode(PublicBinaryAddress);


    //console.log("public key hex is: " + publicKeyHex);

    // convert publicKeyString to toString 

    PublicKeyString = publicKeyHex.toString();

    //console.log("PublicKeyString key hex is: " + PublicKeyString);


    //console.log("public address is : " + xrkPublicAddress);



    return publicAddress;
}



// this functions creates XRK Private Key from master private key
function createXRKPrivateKeyFromPrivateKey(masterPrivateKey, private_key_version, address_checksum_value) {

    // step 1: Get raw private key
    var privateKeyHex = new bitcore.PrivateKey(masterPrivateKey);
    var privateKeyBuffer = privateKeyHex.toBuffer();

    // step 2: Append 0x01 at end of private key (if corresponding public key is compressed)
    var buf01 = buffer.emptyBuffer(1);
    buf01[0] = 1;
    var privateKeyBufferAppended = buffer.concat([privateKeyBuffer, buf01]);

    // step 3: insert private_key_version at appropriate place in previous result
    var privateKeyVer = buffer.hexToBuffer(private_key_version);
    var insertStep = Math.floor(33 / privateKeyVer.length)
    var privateKeyExtended = buffer.copy(privateKeyBufferAppended);

    for (var i = 0; i < privateKeyVer.length; i++) {

        var buf_before = privateKeyExtended.slice(0, i + i * insertStep);
        var buf_middle = privateKeyVer.slice(i, i + 1);
        var buf_after = privateKeyExtended.slice(i + i * insertStep);

        privateKeyExtended = buffer.concat([buf_before, buf_middle, buf_after]);
    }

    // step 4: Calculate sha256 of the extended private key
    var privateKeyExtendedSHA256 = new bitcore.crypto.Hash.sha256(privateKeyExtended);

    // step 5: Calculate sha256 hash of the previous sha256 hash
    var privateKeyExtendedSHA256OfSHA256 = new bitcore.crypto.Hash.sha256(privateKeyExtendedSHA256);

    // step 6: Get address checksum - First 4 bytes of previous hash
    var addressChecksum = privateKeyExtendedSHA256OfSHA256.slice(0, 4);

    // step 7: XOR above checksum with address-checksum-value blockchain parameter
    var adrChecksumValue = buffer.hexToBuffer(address_checksum_value);
    var xoredChecksum = xorBuffer(adrChecksumValue, addressChecksum);

    // step 8: Add xored checksum at the end of extended privatekey (from step 3)
    var BinaryPrivateKey = buffer.concat([privateKeyExtended, xoredChecksum]);

    // step 9: Apply bitcoin base58 encoding to above result
    var privateKey = bitcore.encoding.Base58.encode(BinaryPrivateKey);


    return privateKey;

}


function sendTransaction(){
    publicAddress = localStorage.getItem('publicAddress');
    $('#send').click(function(){

       var toaddress = $('#toaddress').val();
       //console.log(publicAddress, "toaddress value here : - ");
       $.ajax({
        type: "POST",
        // url: "/assets"
        url: 'assets/api/createrawsendfrom.php',
        data: ({
            publicAddress : publicAddress,
            toaddress : toaddress
            
        }),
        success: function(Response) {
            var x = Response;
            x = JSON.parse(x);
            hex = x.result.hex;
            console.log(hex, "hex is:"); 
            decodeTransaction(hex);
            // listaddress(publicAddress);   
                             
        }
        
    });   
    });

}
