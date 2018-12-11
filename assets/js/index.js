
// // required bitcore.js libraries to interact with blockchain //
//     bitcore = require('bitcore-lib');
//     Mnemonic = require('bitcore-mnemonic');
//     buffer = bitcore.util.buffer;
//     // Buffer = require('buffer');

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

$('Document').ready(function(){

    addressGenrationScript();
    sendTransaction();

});


function addressGenrationScript(){
    $('#createKeyPairsBtn').click(function(){
        $.ajax({
            type: "POST",
            // url: "/assets"
            url: 'assets/api/createkeypairs.php',
            data: ({
               
            }),
            success: function(Response) {
                var x = Response;
                console.log(x); 
                x = JSON.parse(x);
                publicKey = x.result[0].pubkey;
                publicAddress = x.result[0].address;

                importAddress(publicAddress);

                
                createmultisig();
                          
            }
        });
    });
}


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
