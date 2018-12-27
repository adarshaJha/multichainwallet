<? php 

?>



<!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="assets/css/materialize.min.css"  media="screen,projection"/>
      <link type="text/css" rel="stylesheet" href="assets/css/index.css"  media="screen,projection"/>
      <!-- <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"> -->
      <!-- google font loaded here -->
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">


      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
     
        <section class="navSection">
            <nav>
                <div class="nav-wrapper">
                  <a href="#" class="brand-logo"></a>
                  
                  
                </div>
              </nav>
        </section>

        <section>
            <div class="container">
                <div class="sm-6">
                    <div class="">
                        <!-- <input placeholder="Enter Password" id="pass" type="text" class="validate"> -->
                        

                    </div>
                </div>
                <div class="sm-6">
                    <div class="">

                    </div>
                </div>
            </div>
            <div class= "container">
              <div class="card-panel center-align">
                <p class="gray-text text-darken-2 center-align">If you a're a new user, please click on the create BBIT wallet. </p>
                
                <button class="btn waves-effect waves-light modal-trigger" type="submit" name="action" href="#modal1">Create BBIT Wallet
                  <i class="material-icons right">send</i>
                </button>

                <p class="gray-text text-darken-2 center-align">
                   If you already have a BBIT wallet, please enter your wallet address here.
                </p>


                <input type="text" class="registered_address logininputs" name="registered_adr" id="registered_adr" placeholder="Enter your BBIT wallet address" value="">

                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i class="material-icons right">send</i>
                </button>

              </div>
            </div>
             <!-- Modal Trigger -->
            <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> -->

          <!-- Modal Structure -->
          <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
              <h6>Create BBIT Wallet</h6>
              <p>You may create Buybit's BBIT wallet without any password but it is highly recommended that you provide a password for additional security of your wallet.

             </p>
             <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s6">
                      <input placeholder="Password" id="pass" type="text" class="validate">
                      <label for="first_name">Password</label>
                    </div>
                    <div class="input-field col s6">
                      <input id="confirmpass" type="text" class="validate" placeholder="Confirm Password">
                      <label for="last_name">Confirm Password (Optional)</label>
                    </div>
                  </div>
                  <a class="waves-effect waves-light btn-large " id="createKeyPairsBtn"><i class="material-icons left">cloud</i>Create  it</a>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
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
      
      <script src ="assets/js/index.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
      <!-- <script src="bundle.js"></script> -->
      <script src = "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.min.js">
      </script>
    </body>
  </html>