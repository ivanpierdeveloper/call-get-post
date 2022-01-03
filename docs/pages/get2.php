<?php 
    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    
    header('Content-Type: application/json; charset=UTF-8');
    try {
        if($_SERVER['REQUEST_METHOD'] === "POST") {
            $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);
            $id     = $POST['id'];
            $email   = $POST['email']; 
            $usr    = $POST['usr'];
            $psw    = $POST['psw'];
            $age    = $POST['age'];
            echo '[
                    {
                        "id" : "'.$id.'",
                        "email" : "'.$email.'",
                        "usr" : "'.$usr.'",
                        "psw" : "'.$psw.'",
                        "age" : "'.$age.'",
                        "method" : "POST",
                        "avatar" : "default.png"
                    }
                    
                ]';
        } else {
            throw new Exception("NOT POST", 500);
        }
    } catch(Exception $e) {
        echo '[
                {
                    "id" : "messaggio di errore: '.$e->getMessage().'",
                    "email" : "codie di errore: '.$e->getCode().'",
                    "usr" : "linea dove si è verificato l\'errore: '.$e->getLine().'",
                    "psw" : "file: '.$e->getFile().'",
                    "age"  : "errore di sintassi",
                    "method" : "ERROR",
                    "avatar" : "default.png"
                }
            ]';
    }
?>