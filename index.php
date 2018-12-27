<?php

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>BBIT Wallet</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">

    <link rel="stylesheet" type="text/css" media="screen" href="assets/css/index.css" />
        <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    
</head>
<body>

<header>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">
                <img alt="Brand" src="">
            </a>
            </div>
        </div>
    </nav>
</header>

<section>
<div class="loginContainer">
                    <div class="row positionCont">
                        
                        <p class="font14">If you a're a new user, please click on the create BBIT wallet or BBIT MultiSig wallet button.</p>
                        <div class="col-md-12">
                             <button type="submit" class="createwalletBtn margintop30 btnmobilemarg testnetColor buttons" id="createkeypairsbtn1" data-toggle="modal" data-target="#myModal1">CREATE BBIT WALLET</button>
                           
                        </div>
                       
                       <div class="col-md-12">
                            <button type="submit" class="createwalletBtn margintop30 btnmobilemarg testnetColor buttons" id="createkeypairsbtn1" data-toggle="modal" data-target="#myModal2">RESTORE BBIT WALLET</button>
                       </div>
                        
                    </div>

                    <div class="row margintop30 mobilemarg">
                        <p class="font14">If you already have a BBIT wallet please enter your wallet address here. </p>
                        <input type="text" class="registered_address logininputs inputboxes" name="registered_adr" id="registered_adr" placeholder="Enter your BBIT wallet address" value="">
                            <div class="pretty p-svg p-curve">
                                <input type="checkbox" class="checkboxmulti">
                                <div class="state p-success">
                                   
                                    <label>It is a MultiSig Wallet</label>
                                </div>
                            </div>
                            
                        <button type="submit" class="createwalletBtn  testnetColor buttons" id="walletloginbtn">Submit</button>
                        <div class="clearfix"> </div>
                        <p id="restorelink1" style="margin: 25 0 -22 0;"><a data-toggle="modal" data-target="#myModal4">Forgot your BBIT Address? Click here </a></p>

                    </div>
                </div>
</section>

<section>
<div id="myModal1" class="modal fade in" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close testnetColor" data-dismiss="modal">×</button>
                    <h4 class="modal-title ">Create BBIT Wallet</h4>
                    <span class="standfont"></span>
                </div>
                <div class="modal-body " id="firststand" style="display: block;">

                    <div id="fistmodbod">
                       
                        
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label13"> Password </label>
                                <input type="password" name="firstpass" class="mb20 inputboxes" placeholder="Password (optional)" id="firstpass" value="">
                            </div>
                            <div class="col-md-6">
                                 <label class="label13"> Confirm Password </label>
                                <input type="password" name="firstpass" class="mb20 inputboxes" placeholder="Confirm Password" id="confpass" value="" aria-autocomplete="list">
                            </div>
                            <div class="colmd-12 text-center">
                                <button type="submit" class="createwalletBtn margintop30 testnetColor buttons" id="createXRKhd">Create BBIT Wallet</button>
                            </div>
                        </div> 
                    </div>
                    
                </div>
                 <div class="seedcont"> <img id="printimg2" src="">  </div>
                <div id="seedcontainer">
                      
                </div>
               <!--  <p class="seedcontainer" id="seed">
                    
                </p> -->
               


                <div class="row walletcontent" id="qrcodecontainer" style="display: none;">
                    <img src="" id="printimg">
                    <div class="col-md-4 code1">
                        
                        <div id="qrcode">
                            <p class="qrlabel">xrk-wallet-address</p>
                        </div>
                    </div>
                    <div class="col-md-4 code2">
                        
                        <div id="qrcode6">
                            <p class="qrlabel">xrk-wallet-public-key</p>
                        </div>
                    </div>
                    <div class="col-md-4 code6">

                        <div id="qrcode2">
                            <p class="qrlabel">xrk-wallet-private-key</p>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="" id="modaladdrcont"></div>
                    <div>
                        <div class="col-md-12 printcontainer">

                            <a id="printWallet" value="Print" class="noprint">Print Wallet</a>
                
                        </div>
                    </div>
                </div>
                 <a download="RecordsKeeper-wallet-key.json" id="downloadlink">Download</a>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default testnetColor" id="createKeyCloseBtn" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</section>



<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<!-- <script src="assets/js/main.js"></script> -->
</body>
</html>