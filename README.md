<link rel="shortcut icon" href="img/sun.png" type="image/x-icon" sizes="16x16">
# APP TESTING GET AND POST
app per testare le chiamate GET &amp; POST
<br />
<a href="https://ivanpierdeveloper.github.io/testingGetPost/index">Inizia</a>
<img src="https://cdn.shopify.com/s/files/1/0104/7583/1377/products/GOH72169.001_1_1200x1200.jpg?v=1616437645" />
ESEMPIO DI COME SCRIVERE LA PAGINA CHE RICEVE LE CHIAMATE GET E POST:
## INIZIO ##
<?php
    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    
    header('Content-Type: application/json; charset=UTF-8');
    
echo '[{
            "id": 101,
            "email" : "mariorossi@gmail.com",
            "usr": "Mario Rossi",
            "psw": "'.sha1("oxnde7n39").'",
            "age": 22
        },
        {
            "id": 102,
            "email" : "mariobianchi@gmail.com",
            "usr": "Mario Bianchi",
            "psw": "'.sha1("123abc").'",
            "age": 25
        },
        {
            "id" : "'.$_POST['id'].'",
            "email" : "'.$_POST['email'].'",
            "usr": "'.$_POST['usr'].'",
            "psw": "'.sha1($_POST['psw']).'",
            "age": "'.$_POST['age'].'"
        }
    ]';
?>
## FINE ##
