<?php

$curl = curl_init();

$config = include('config.php');
$pubkey = $_POST['publicKey'];
$pubkey1 = $config['multisig1'];
$pubkey2 = $config['multisig2'];

curl_setopt_array($curl, array(
    CURLOPT_PORT => $config['port'],
    CURLOPT_URL => $config['host'],

    CURLOPT_USERPWD => $config['user'].":".$config['pass'],
  
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"method\":\"addmultisigaddress\",\"params\":[2,[\"$pubkey1\",\"$pubkey2\",\"$pubkey\"]],\"chain_name\":\"Buybit\"}",
  CURLOPT_HTTPHEADER => array(
    "Cache-Control: no-cache",
    "Content-Type: application/json",
    
    "application-type: application/json",
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}