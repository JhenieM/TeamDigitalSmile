<?php 

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $acesso = $_POST['acesso'];

    switch($acesso){
        case 'paciente':
            header("Location: ../../cliente/agendamento.html");
            exit;
        case 'recepcao':
            header('Location: ../../recepcao/inicio_recepcao.html');
            exit;
        case 'dentista':
            header('Location: ../../dentista/registrar_consulta.html');
            exit;
        default:
            echo "<script>alert('Por favor, selecione seu cargo (PACIENTE, RECEPCAO ou DENTISTA)');</script>";
    }
}

?>