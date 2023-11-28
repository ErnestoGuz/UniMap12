<?php
include('conexion.php');

$nombre = $_POST['nombre'];
$apellido = $_POST['apellidos'];
$correo = $_POST['correo'];
$matricula = $_POST['matricula'];
$telefono = $_POST['telefono'];
$user = $_POST['usuario'];
$password = $_POST['password'];
$password_confirmacion = $_POST['confirmacion'];

// Función para validar el nombre de usuario
function validarNombreUsuario($nombre, $apellido, $user) {
    $nombre_minusculas = strtolower($nombre);
    $apellido_minusculas = strtolower($apellido);
    $usuario_esperado = $nombre_minusculas . '_' . $apellido_minusculas;
    return $user === $usuario_esperado;
}

// Función para validar la contraseña
function validarContrasena($password) {
    return preg_match('/^(?=.*[0-9])(?=.*[@#$%])[a-z0-9@#$%]{8,}$/',$password);
}

if ($password != $password_confirmacion) {
    header('Location: formulario.php?error=La contraseña no coincide con la confirmación');
} else if (!validarNombreUsuario($nombre, $apellido, $user)) {
    header('Location: formulario.php?error=El nombre de usuario no cumple con los requisitos');
} else if (!validarContrasena($password)) {
    header('Location: formulario.php?error=La contraseña no cumple con los requisitos');
} else {
    $hashed_password = password_hash($password, PASSWORD_DEFAULT); // Encriptar la contraseña

    $query = "INSERT INTO usuario(Nombre, Apellidos, Correo_escolar, Matricula, Telefono, Usuario, pass)
              VALUES ('$nombre', '$apellido', '$correo', '$matricula', '$telefono', '$user', '$hashed_password')";
    mysqli_query($conexion, $query);
    $_SESSION['registro_exitoso'] = true;
    header('Location: login.php?registro_exitoso=Registro Exitoso');
}
?>
