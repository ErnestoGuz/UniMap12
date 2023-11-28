<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="formulario.css">
  <title>Login</title>
</head>
<body>
  <div class="imagen-logo">
    <img src="UniMap.png" alt="Esta imagen es el logotipo de la aplicion">
  </div>
  <section class="form-login">
    <center><h4>Iniciar sesion</h4><center>
    <form name="contacto" method="POST" action="conexion_login.php">

  
     <input class="controls2" type="text" name="usuario" id="usuario" placeholder="Ingrese su usuario"required autocomplete="off">
     <input class="controls2" type="password" name="password" id="password" placeholder="Ingrese su Contraseña"required autocomplete="off">
    <input class="botons" type="submit" value="Iniciar sesion">
    <div>
      <?php
    function mostrarError($mensaje) {
      echo '<div class="registro-box">'.$mensaje.'</div>';
  }
  
  if(isset($_GET['registro_exitoso'])){
      echo '<style>
              .registro-box {
                background-color: #cce5ff;
                color: #007bff;
                border: 2px solid #007bff;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 15px;
                animation: fadeOut 5s forwards;
              }
              @keyframes fadeOut {
                to {
                    opacity: 0;
                    display: none;
                }
            }
            </style>';
            
      mostrarError($_GET['registro_exitoso']);
  }
      ?>
    </div>
    <!----------------------------------------------------------->
    <div>
      <?php
    function mostrarError2($mensaje) {
      echo '<div class="registro">'.$mensaje.'</div>';
  }
  
  if(isset($_GET['no'])){
      echo '<style>
              .registro {
                background-color: #ffcccc;
                color: #cc0000;
                border: 2px solid #cc0000;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 15px;
                animation: fadeOut 5s forwards;
              }
              @keyframes fadeOut {
                to {
                    opacity: 0;
                    display: none;
                }
            }
            </style>';
            
      mostrarError2($_GET['no']);
  }
      ?>
    </div>
    <!----------------------------------------------------------->
    <p><a href="formulario.php">¿Aun no tienes Cuenta?</a></p> 
   </form>
  </section>

</div>
  <iframe
  id="map"
  width="640px"
  height="510px"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.268296623284!2d-106.40883842528504!3d31.59910734324936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e766e2aee37dd7%3A0x33a53ddce213988c!2sUniversidad%20Tecnol%C3%B3gica%20de%20Ciudad%20Ju%C3%A1rez%20(UTCJ)!5e0!3m2!1ses!2smx!4v1691678273546!5m2!1ses!2smx">
  </iframe>
</body>
</html>