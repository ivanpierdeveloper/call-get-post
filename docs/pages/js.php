<?php 
    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    header('Content-Type: application/json; charset=UTF-8');

    // print_r($_POST);
    /*
    # funziona perfettamente receive formData
    # from javascript senza gli headers da parte di javascript
        $POST = $_POST;
        $json = json_encode($POST); // {"id":"1","usr":"utente1","psw":"12345_&","age":"25"}
        $obj = json_decode($json); // stdClass Object
                                    
                                    # (
                                       # [id] => 1
                                       # [usr] => utente1
                                       # [psw] => 12345_&
                                       # [age] => 25
                                    # )
                                    
        print_r($obj->usr);
    */
    # funziona benissimo, queste righe di codice risolvono il problema del browser CORS
    // header('Access-Control-Allow-Origin: *');
    // header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    // header('Content-Type: application/json; charset=UTF-8');
    try {
        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            // throw new Exception("nuovo messaggio METHOD POST", 154);
            $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);
        echo '[{
                "id": 101,
                "email" : "mariorossi@gmail.com",
                "usr": "Mario Rossi",
                "psw": "'.sha1("oxnde7n39").'",
                "age": 22,
                "method" : "POST"
            },
            {
                "id": 102,
                "email" : "mariobianchi@gmail.com",
                "usr": "Mario Bianchi",
                "psw": "'.sha1("123abc").'",
                "age": 25,
                "method" : "POST"
            },
            {
                "id" : "'.$POST['id'].'",
                "email" : "'.$POST['email'].'",
                "usr": "'.$POST['usr'].'",
                "psw": "'.sha1($POST['psw']).'",
                "age": "'.$POST['age'].'",
                "method" : "POST"
            },
            {
                "id" : 103,
                "email" : "batman@gmail.com",
                "usr"  : "batman cavaliere oscuro",
                "psw" : "'.sha1("batmobile").'",
                "age" : "101",
                "method" : "POST"
            },
            {
                "id" : 104,
                "email" : "spidereman@gmail.com",
                "usr"  : "spiderman",
                "psw" : "'.sha1("uomoragno").'",
                "age" : "98",
                "method" : "POST"
            }
        ]';
        } else {
            if($_SERVER['REQUEST_METHOD'] === 'GET') {
                // throw new Exception("nuovo messaggio METHOD GET", 154);
                $GET = filter_var_array($_GET, FILTER_SANITIZE_STRING);
                echo '[
                    {
                        "id" : "'. $GET['id'] .'",
                        "email" : "'. $GET['email'] .'",
                        "usr" : "'. $GET['usr'] .'",
                        "psw" : "'.$GET['psw'].'",
                        "age" : "'.$GET['age'].'",
                        "method" : "GET"
                    }
                ]';
            }
        }
    } catch (Exception $error) {
        /*
        echo '[
            {
                "messaggio" : "'. $error->getMessage() .'",
                "codice" : "'. $error->getCode() .'",
                "line" : "'. $error->getLine() .'",
                "file" : "'. $error->getFile() .'"
            }
        ]';
        */
        echo '[
            {
                "id" : "'.$error->getMessage().'",
                "email" : "codice ' .$error->getCode().'",
                "usr" : "line '.$error->getLine().'",
                "psw" : "file '.$error->getFile().'",
                "age" : "nil",
                "method" : "ERROR"
            }
        ]';
    }
?>