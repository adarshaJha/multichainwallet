<?php

$curl = curl_init();

$config = include('config.php');
$publicAddress = $_POST['publicAddress'];
$toaddress = $_POST['toaddress'];

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
  CURLOPT_POSTFIELDS => "{\"method\":\"createrawsendfrom\",\"params\":[\"16fTLkm9iydr9tSgvcddHv9DCY5nHQ86Lz\",{\"$toaddress\":1},[],\"sign\"],\"chain_name\" : \"Buybit\"}",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Postman-Token: ddb1685e-68d4-476c-857a-3a7635287884",
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

?>