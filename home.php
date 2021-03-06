<?php



?>


<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="assets/css/materialize.min.css"  media="screen,projection"/>
      <link type="text/css" rel="stylesheet" href="assets/css/index.css"  media="screen,projection"/>
      <!-- google font loaded here -->
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.css">
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
     
        <section class="navSection">
            <nav>
                <div class="nav-wrapper">
                  <a href="#" class="brand-logo"></a>
                  <ul id="nav-mobile" class=" hide-on-med-and-down">
                    <li><a href="sass.html">Settings</a></li>
                    <li><a href="badges.html">English</a></li>
                    <li><a href="collapsible.html">Exit</a></li>
                  </ul>
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Settings</a></li>
                    <li><a href="badges.html">English</a></li>
                    <li><a href="collapsible.html">Exit</a></li>
                  </ul>
                </div>
              </nav>
        </section>

        <section>
            <div class="container">
                <div class="sm-6">
                    <div class="">
                    <input placeholder="To Address" id="toaddress" type="text" class="validate">
                    <input placeholder="Enter Amount" id="amount" type="number" class="validate">
                    <input placeholder="Enter Password" id="pass1" type="text" class="validate">
                    <input placeholder="Enter Seed Phrase" id="seedphrase" type="text" class="validate">
                    <input placeholder="Enter Private Key" id="privkey" type="text" class="validate">

                        <a class="waves-effect waves-light btn-large " id="send"><i class="material-icons left">cloud</i>Send Amount</a>
                        <a class="waves-effect waves-light btn-large " id="check"><i class="material-icons left">cloud</i>Check Validity</a>

                    </div>
                </div>
                <div class="sm-6">
                    <div class="">

                    </div>
                </div>
            </div>
        </section>


     <!--JavaScript at end of body for optimized loading-->
     <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"
        ></script>
      <script type="text/javascript" src="assets/js/materialize.min.js"></script>
      
      <script src="assets/js/bitcore-lib/bitcore-lib.js"></script>
      <script src="assets/js/bitcore-mnemonic/bitcore-mnemonic.js"></script>
      <script src = "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.min.js">
      </script>
      <script src ="assets/js/index.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
      <!-- <script src="bundle.js"></script> -->

       
    </body>
  </html>




