<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="formulario.css">
  <title>Formulario Registro</title>
</head>
<body>
  <section class="form-register">
    <h4>Formulario Registro</h4>

    <div>
   <!--MOSTRAR ERROR CUANDO EL USUARIO NO COINCIDE LA CONTRASENA DE CONFIRMACION-->    
    <?php
function mostrarError($mensaje) {
    echo '<div class="error-box">'.$mensaje.'</div>';
}

if(isset($_GET['error'])){
    echo '<style>
            .error-box {
                background-color: #ffcccc;
                color: #cc0000;
                border: 2px solid #cc0000;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 15px;
                animation: fadeOut 4s forwards;
            }
            @keyframes fadeOut {
              to {
                  opacity: 0;
                  display: none;
              }
          }
          </style>';
          
    mostrarError($_GET['error']);
}
?>  

</div>
<!----------------------------------------------------------------------->
  
    <form name="contacto" method="POST" action="formula.php">
  <div class="user-details"> 
    <div class="column"> 
    <input class="controls" type="text" name="nombre" id="nombres" placeholder="Ingrese su Nombre" required autocomplete="off">
    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"required autocomplete="off">
    <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" required autocomplete="off">
    <input class="controls" type="text" name="matricula" id="matricula" placeholder="Ingrese su Matricula"required autocomplete="off">
    <input class="controls" type="text" name="telefono" id="telefono" placeholder="Ingrese su Numero de Telefono"required autocomplete="off">
    <input class="controls" type="text" name="usuario" id="usuario" placeholder="Ingrese su usuario"required autocomplete="off">
    <input class="controls" type="password" name="password" id="password" placeholder="Ingrese su Contraseña"required autocomplete="off">
    <input class="controls" type="password" name="confirmacion" id="confirmacion" placeholder="Confirmacion de Contraseña"required autocomplete="off">
    </div>
    
  </div>
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
    <input class="botons" type="submit" value="Registrar">
    <p><a href="login.php">¿Ya tengo Cuenta?</a></p> 
   </form>
  </section>

</body>
</html>