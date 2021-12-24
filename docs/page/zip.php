<?php
 # ABBREVIAZIONE DA TASTIERA DI QUESTO SOFTWARE CTRL+MAIUSC+A (commentare più righe)
 # ABBREVIAZIONE DA TASTIERA DI QUESTO SOFTWARE CTRL+MAIUSC+Z (selezionare e sostituire più testo conteporaneamente) 
    # VERIFICA CHE LA PROGRAMMAZIONE SIA SCRITTA CORRETTA.
    declare(strict_types=1);
    # MOSTRA O NASCONDE ERRORI A VIDEO.
    ini_set('display_errors', '1'); // MOSTRA.
    // ini_set('display_errors', '0'); // NASCONDE.
   
    error_reporting(E_ALL);
    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header ("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    header('Content-Type: application/json; charset=UTF-8');

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $path_folder = "docs/file/";
        $files = ['auto-1.gif', 'auto-2.gif', 'auto-3.gif', 'auto-4.gif', 'auto-5.gif'];
        $msgSuccess = "";
        $msgDanger = "";
        $numFilesSuccess = 0;
        $numFilesDanger = 0;
    /*  
        print_r("<pre>");
        print_r($files);
        print_r("</pre>");
        foreach($files as $key => $file) :
            echo $file . "<br />";
        endforeach;
    */
   
        if(extension_loaded('zip')) {
            $zip = new ZipArchive(); // Load Zip library
            $zip_name = time().".zip"; // Zip name
            if($zip->open($zip_name, ZIPARCHIVE::CREATE) !== TRUE) {
                $msg = ("Spiacente, creazione del file zip, non riuscita");
                echo '{"Messaggio" : "'.$msg.'"}';
                exit();
            }
                foreach($files as $key => $file) {
                    $filename = basename($file);
                    if(file_exists($path_folder.$file)) {
                        // $zip->addFile($path_folder.$file); // recupera tutta la cartella
                        $zip->addFile($path_folder.$file, $filename); // recupera soltanto il nome file
                        $numFilesSuccess += 1;
                        $msgSuccess = "Numero file trovati: {$numFilesSuccess} "; 
                    }  else {
                        $numFilesDanger += 1;
                        $msgDanger .= "Numero file non trovati: {$numFilesDanger} nome file {$file} ";
                        // exit('{"Messaggio: " : "'.$msg.'"}');
                    } 
                }
                if($numFilesDanger == 0) {
                    $msgSuccess = "Processo completato con successo. Files: {$numFilesSuccess} "; 
                    $zip->close();
                }
            if(file_exists($zip_name)){
                $msgSuccess = ("Creazione file riuscita con successo.");
                // Push to download the Zip
                header('Content-type: application/zip');
                header('Content-Disposition: attachment; filename="'.$zip_name.'"');
                readfile($zip_name);
                // Remove zip file is exists in temp path
                unlink($zip_name);
            }
            echo '{"Messaggio success" : "'.$msgSuccess.'", "Messaggio danger" : "'.$msgDanger.'"}';
        } // ./extensione_loaded
    } // ./POST
?>
