<?php 

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $acesso = $_POST['acesso'];

    switch($acesso){
        case 'paciente':
            header("Location: ../../cliente/agendamento.html");
            exit;
        case 'recepcao':
            header('Location: ../../../recepcao/agendar.html');
            exit;
    }
}

?>