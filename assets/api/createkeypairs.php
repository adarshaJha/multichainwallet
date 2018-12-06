<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_PORT => "6290",
  CURLOPT_URL => "http://194.135.82.88:6290",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"method\":\"createkeypairs\",\"params\":[],\"chain_name\":\"Buybit\"}",
  CURLOPT_HTTPHEADER => array(
    "Postman-Token: da259ddd-3e32-4a9a-9c4e-40670e77bb66",
    "cache-control: no-cache"
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