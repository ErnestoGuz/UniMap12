<?php
session_start();
include("conexion.php");

$usuario = $_POST['usuario'];
$password = $_POST['password'];

// Realizar una consulta para obtener el hash de la contraseña del usuario
$query = "SELECT pass FROM usuario WHERE Usuario = '$usuario'";
$result = mysqli_query($conexion, $query);
if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $hashed_password = $row['pass'];

    // Verificar la contraseña proporcionada con el hash almacenado en la base de datos
    if (password_verify($password, $hashed_password)) {
        // Las credenciales son válidas, iniciar sesión
        $_SESSION['usuario'] = $usuario;
        header('Location: index.html'); // Página de inicio de sesión exitoso
    } else {
        header('Location: login.php?no=La contraseña no coincide');
    }
} else {
    header('Location: login.php?no=Usuario no encontrado ');
}
?>
