function initMap(){
    var coord = {lat:31.599313,lng: -106.407848};
    var utc={lat:31.59915516955869,lng: -106.4062684578863}
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17.4,
      center: coord,
      mapId: 'f6d52ff1b1157e05',
      
    });

    /*DISENO DE VISTA DEL MAPA*/ 
    map.setMapTypeId('satellite');
  /*------------------------------*/ 

    /*ESTA FUNCION SIRVE PARA EL CONTENIDO DE LA VENTANA DE INFORMACION*/ 
     const infowindow = new google.maps.InfoWindow({
      content: `
      <div class="Edificio_J">
        <img src="edificio.jpg.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio J</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Laboratorios</li>
        <li>-E-Carnegie</li>
        <li>-Metodos</li>
        <li>-Energias Renovables</li>
        <li>-Electrica</li>
        <li>-Redes</li>
        <li>-CISCO</li>
        <li>-Maquinas Electricas</li>
        <li>-Metrologia</li>
        <li>-Nanotecnologia</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_I = new google.maps.InfoWindow({
      content: `
      <div class="edificio_I">
        <img src="edificioL.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio I</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Direccion de la carrera de Tecnologias de la Informacion</li>
        <li>*Direccion de la carrera de Procesos Industriales</li>
        <li>*Direccion de la carrera de Operaciones Industriales</li>
        <li>*Audiovisual</li>
        <h2>Segundo piso</h2>
        <li>*Tutores de Terapia Fisica</li>
        <li>*Tutores de Procesos Industriales</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_H = new google.maps.InfoWindow({
      content: `
      <div class="edificio_H">
        <img src="edificioH.jpeg" alt="Imagen del marcador">
         <div class="contenido">
         <h1>Edificio H</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Laboratorios</li>
        <li>-Telecomunicaciones</li>
        <li>-loT Scratch</li>
        <li>-Diseño de impresion 3D</li>
        <li>*Audivisual</li>
        <li>-Tutores de TICs</li>
        <h2>Segundo piso</h2>
        <li>*Direccion de maestria en Ingenieria de Sistemas Industriales Sustentables</li>
        <li>*Tutores de TICs</li>
        <li>*Tutores de Energias renovables</li>
      </ol>
         </div>
      </div>
    `,
    });
    
    /*INFORMACIO DIVIDA EN LOS MARCADORES EDIFICIO O*/
     var info_O = '<div id="content">'+
      '<div class="edificio_O">'+
       '<img src="edificioO.jpeg" alt="Imagen del marcador">'+
       '<div class="contenido">'+
    '<h1>Edificio O</h1>'+
            '<h2>Primer piso</h2>'+
            '<ol type="A">'+
            '<li>-Direccion de carrera de Terapia fisica</li>'+
            '<li>-Direccion de carrera de Proteccion Civil</li>'+
            '<li>-Direccion de carrera de Emergencias</li>'+
            '<li>-Consultorio del centro de terapia fisica</li>'+
            '<li>-Angar de ambulancias</li>'+
            '<li>-Tutores</li>'+
            '<li>-Laboratorios</li>'+
          '</ol>'+
          '<h2>Segundo piso</h2>'+
          '<ol type="A">'+
          '<li>-Paramedico</li>'+
          '<li>-Laboratorios</li>'+
        '</ol>'+
          '</div>'+
         
      '</div>';
      /*-------------------------------------------------*/ 
      
    /*VENTANA DE INFORMACION DONDE SE AGUARDA LA INFORMACION DEL EDIFICIO O*/ 
    const informacion_o= new google.maps.InfoWindow({
      content: info_O
    });
    /*----------------------------------------------------------------------*/ 

    const info_N = new google.maps.InfoWindow({
      content: `
      <div class="edificio_N">
        <img src="edificioN.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio N</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Laboratorios</li>
        <li>-LabVIEW</li>
        <li>-Instrumentacion Virtual</li>
        <li>-Centro de Negocios</li>
        <li>-Talleres de Radio, Television y Fotografia</li>
        <li>-Talleres de impresion,Serigrafia y Tampografia</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_L = new google.maps.InfoWindow({
      content: `
      <div class="edificio_L">
        <img src="edificioll.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio L</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Aula de Usos Multiples</li>
        <h2>Segundo piso</h2>
        <li>*Departamento de Internacionalizacion e Idiomas</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_K = new google.maps.InfoWindow({
      content: `
      <div class="edificio_K">
        <img src="edificioK.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio K</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Direccion de la carrera de Contaduria</li>
        <li>*Direccion de la carrera de Innovacion de Negocios</li>
        <li>*Direccion de la carrera de Mercadotecnia</li>
        <li>*Tutores</li>
        <li>*Laboratorios de Diseño Grafico</li>
        <li>*Audiovisual</li>
        <h2>Segundo piso</h2>
        <li>*Tutores</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_F = new google.maps.InfoWindow({
      content: `
      <div class="edificio_F">
        <img src="EdificioF.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio F</h1>
        <h2>Vinculacion</h2>
        <ol type="A">
        <li>*Servicios Escolares</li>
        <li>*Becas</li>
        <li>*Caja General</li>
        <li>*Direccion de Vinculacion</li>
        <li>*Sala de Capacitacion</li>
        <li>*Sala de Rectores</li>
        <li>*Aula Magna</li>
        <li>*Toroshop</li>
        <li>*Cajeros Automaticos</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_A = new google.maps.InfoWindow({
      content: `
      <div class="edificio_A">
        <img src="EdificioA.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio A</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Laboratorios</li>
        <li>-Informatica</li>
        <li>-Contabilidad</li>
        <li>-Ingles</li>
        <li>-Tiflotecnia</li>
        <li>*Subdireccion de Sistemas</li>
        <li>*Audiovisual</li>
        <h2>Segundo piso</h2>
        <li>*Direccion de la carrera de Logistica Internacional</li>
        <li>*Tutores de la carrera de Logistica Internacional</li>
        <li>*Audiovisual</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_C = new google.maps.InfoWindow({
      content: `
      <div class="edificio_C">
        <img src="EdificioC.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio C</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Servicio Medico</li>
        <li>*Programa Talleres de Artes y Oficios</li>
        <li>*Tutores de Mecatronica</li>
        <li>*Audiovisual</li>
        <h2>Segundo piso</h2>
        <li>*Direccion de la carrera de Mantenimiento Industrial</li>
        <li>*Direccion de la carrera de Nanotecnologia</li>
        <li>*Tutores</li>
        <li>*Audiovisual</li>
        <h2>Tercer piso</h2>
        <li>*Direccion de la carrera de Mecatronica</li>
        <li>*Direccion de la carrera de Energias Renovables</li>
        <li>*Tutores</li>
        <li>*Audiovisual</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_D = new google.maps.InfoWindow({
      content: `
      <div class="edificio_D">
        <img src="EdificioD.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio D</h1>
         <h2>Primer piso</h2>
         <ol type="A">
        <li>*Laboratorios</li>
        <li>-Soldadura</li>
        <li>-Gestion de Mantenimiento</li>
        <li>-Quimica Basica</li>
        <li>-Quimica Avanzada</li>
        <li>-Electronica</li>
        <li>-Electricidad</li>
        <li>-SMT</li>
        <h2>Segundo piso</h2>
        <li>*Jefatura de Laboratorios</li>
        <li>*Subdireccion de Extension Universitaria</li>
        <li>*Departamento de Prensa y Difusion</li>
        <li>*Departamento de Editorial</li>
        <li>*Incubadora de Empresas</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_E = new google.maps.InfoWindow({
      content: `
      <div class="edificio_E">
        <img src="EdificioE.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio E</h1>
         <ol type="A">
        <li>*Biblioteca</li>
        <li>*Sala Multimedia</li>
        <li>*Subdireccion de Desarrollo Estudiantil</li>
        <li>*Archivo Institucional</li>
      </ol>
         </div>
      </div>
    `,
    });

    const info_Q = new google.maps.InfoWindow({
      content: `
      <div class="edificio_Q">
        <img src="EdificioQ.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio Q</h1>
        <p>Informacion adicional sobre el marcador.</p>
      </div>
    `,
    });

    const info_G = new google.maps.InfoWindow({
      content: `
      <div class="edificio_G">
        <img src="EdificioG.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio G</h1>
         <ol type="A">
         <li>*Cafeteria</li>
       </ol>
          </div>
      </div>
    `,
    });

    const info_B = new google.maps.InfoWindow({
      content: `
      <div class="edificio_B">
        <img src="edificioB.jpg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio B</h1>
         <ol type="A">
         <li>*Laboratorios</li>
         <li>-Hidraulica y Mecanismos</li>
         <li>-Robotica</li>
         <li>-Mecanica</li>
         <li>-Neumatica</li>
         <li>-Cad-Cam</li>
         <li>-Automatizacion y PLC</li>
         <li>-Minibaja SAE</li>
         <h2>Exterior(Vagon naranja)</h2>
         <li>-Departamento de Actividades Culturales y Deportivas</li>
       </ol>
          </div>
      </div>
    `,
    });

    const info_M = new google.maps.InfoWindow({
      content: `
      <div class="edificio_M">
        <img src="EdificioM.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Edificio M</h1>
         <ol type="A">
         <h2>Primer piso</h2>
         <li>*Direccion de Administracion y Finanzas</li>
         <li>*Subdireccion de Administracion y Finanzas</li>
         <li>*Subdireccion de Servicios Administrativos</li>
         <li>*Departamento de Contabilidad</li>
        <h2>Segundo Piso</h2>
         <li>*Secretaria Academica</li>
         <li>*Subdireccion de Desarrollo Academico</li>
         <li>*Direccion de Planeacion y Evaluacion</li>
         <li>*Departamento de Informacion y Estadistica</li>
         <li>*Sistema de Gestion de la calidad</li>
         <h2>Tercer piso</h2>
         <li>*Rectoria</li>
         <li>*Secretaria Tecnica</li>
         <li>*Abogado General</li>
         <li>*Asuntos Interinstitucionales</li>
       </ol>
          </div>
      </div>
    `,
    });

    const gimnasio = new google.maps.InfoWindow({
      content: `
      <div class="gimnasio">
        <img src="gim.jpeg" alt="Imagen del marcador">
        <div class="contenido">
         <h1>Gimansio</h1>
         <ol type="A">
         <h2>Horario de Entrenamientos de Basquetbol</h2>
         <li>*Martes a Jueves de 2:00pm a 3:30pm </li>
       </ol>
          </div>
      </div>
    `,
    });
    /*-----------------------------------------------------------------------*/
    
    /*MARCADORES PARA EDIFICIOS*/
    /*MARCADOR EDIFICIO I*/ 
    const marcador = new google.maps.Marker({
      position: {lat:31.598917915414358,lng: -106.40919031989917},
      map: map,
      label: {
        text: 'Edificio I', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const edificio_H = new google.maps.Marker({
      position: {lat:31.599431565645222,lng: -106.40911098486548},
      map: map,
      label: {
        text: 'Edificio H', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const edificio_J = new google.maps.Marker({
      position: {lat:31.599221470358714,lng: -106.40984724788179},
      map: map,
      label: {
        text: 'Edificio J', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_F = new google.maps.Marker({
      position: {lat:31.59929529276121,lng:-106.40795157969426 }, 
      map: map,
      label: {
        text: 'Edificio F', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_G = new google.maps.Marker({
      position: {lat:31.598790813439397,lng:-106.40746263412886 }, 
      map: map,
      label: {
        text: 'Cafeteria', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'cafeteria-label'
      },

    });

    const Edificio_C = new google.maps.Marker({
      position: {lat:31.599479264310016,lng: -106.40619485970934}, 
      map: map,
      label: {
        text: 'Edificio C', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_A = new google.maps.Marker({
      position: {lat: 31.598702243057993,lng:  -106.40624100312519}, 
      map: map,
      label: {
        text: 'Edificio A', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    
    const Edificio_L = new google.maps.Marker({
      position: {lat: 31.598126814370456,lng:-106.40707051866723},
      map: map,
      label: {
        text: 'Edificio L', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

        
    const Edificio_N = new google.maps.Marker({
      position: {lat: 31.59817560661038,lng:-106.40774361873234},
      map: map,
      label: {
        text: 'Edificio N', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-edificioN'
      },

    });

           
    const Edificio_E = new google.maps.Marker({
      position: {lat: 31.598733666038473,lng:-106.40698101068129},
      map: map,
      label: {
        text: 'Edificio E', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_D = new google.maps.Marker({
      position: {lat: 31.599174242739334,lng:-106.40688235174557},
      map: map,
      label: {
        text: 'Edificio D', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_B = new google.maps.Marker({
      position: {lat:31.599094370328547,lng: -106.40556096057539},
      map: map,
      label: {
        text: 'Edificio B', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_O = new google.maps.Marker({
      position: {lat:31.600418529266502,lng:-106.40912028817208},
      map: map,
      label: {
        text: 'Edificio O', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_K = new google.maps.Marker({
      position: {lat:31.597574273020054,lng:-106.4063770345353},
      map: map,
      label: {
        text: 'Edificio K', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Edificio_M = new google.maps.Marker({
      position: {lat:31.59865762051365,lng: -106.40529510289255},
      map: map,
      label: {
        text: 'Edificio M', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    
    const Edificio_Q = new google.maps.Marker({
      position: {lat:31.59756665447705,lng: -106.40768992739129},
      map: map,
      label: {
        text: 'Edificio Q', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const Gimnasio = new google.maps.Marker({
      position: {lat:31.601027885297352,lng: -106.40787673916566},
      map: map,
      label: {
        text: 'Gimnasio', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'custom-label'
      },

    });

    const hola = new google.maps.Marker({
      position: {lat:31.59998487787727,lng: -106.40501558739774},
      map: map,
      label: {
        text: 'Puestos de comida', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'comida'
      },

    });

    /*const parking = new google.maps.Marker({
      position: {lat:31.60001179513736,lng: -106.41017763252535},
      map: map,
      label: {
        text: 'Puestos de comida', // Título personalizado
        color: '#ffffff', 
        fontWeight: 'bold', // Grosor del texto
        fontSize: '13px', // Tamaño de la fuente
        className: 'comida'
      },

    });*/
    /*---------------------------*/
    

 /*DARLE NOMBRE A NUESTRA VARIABLE*/     
const icon = document.createElement("div");
const icon2 = document.createElement("div");
const icon3 = document.createElement("div");
const icon4 = document.createElement("div");
const icon5 = document.createElement("div");
const icon6 = document.createElement("div");
const icon7 = document.createElement("div");
const icon8 = document.createElement("div");
const icon9 = document.createElement("div");
const icon10 = document.createElement("div");
const icon11 = document.createElement("div");
const icon12 = document.createElement("div");
const icon13 = document.createElement("div");
const icon14 = document.createElement("div");
const icon15 = document.createElement("div");
const icon16 = document.createElement("div");
const icon17 = document.createElement("div");
const icon18 = document.createElement("div");
const icon19 = document.createElement("div");
/*----------------------------*/ 

/*AGREGAR EL ICONO A NUESTRA VARIABLE */ 
icon.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon2.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon3.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon4.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon5.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon6.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon7.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon8.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon9.innerHTML = '<i class="fa-solid fa-user-tie"></i>';
icon10.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon11.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon12.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon13.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
icon14.innerHTML = '<i class="fa-solid fa-hospital"></i>';
icon15.innerHTML = '<i class="fa-solid fa-dumbbell"></i>';
icon16.innerHTML = '<i class="fa-solid fa-utensils"></i>';
icon17.innerHTML = '<i class="fa-solid fa-book-open"></i>';
icon18.innerHTML = '<i class="fa-solid fa-utensils"></i>';
icon19.innerHTML = '<i class="fa-solid fa-p"></i>';
/*-------------------------------------*/ 

/*CREAR UN MARCADOR CON EL ICONO QUE DESEA Y DISENO*/ 
const faPinView = new google.maps.marker.PinView({
  glyph: icon,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const faPinVie = new google.maps.marker.PinView({
  glyph: icon2,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const faPinVi = new google.maps.marker.PinView({
  glyph: icon3,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const faPinV = new google.maps.marker.PinView({
  glyph: icon4,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});
const ed_D = new google.maps.marker.PinView({
  glyph: icon5,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_C = new google.maps.marker.PinView({
  glyph: icon6,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_A = new google.maps.marker.PinView({
  glyph: icon7,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_B = new google.maps.marker.PinView({
  glyph: icon8,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_M = new google.maps.marker.PinView({
  glyph: icon9,
  glyphColor: "black",
  background: "white",
  borderColor: "black",
});

const ed_L = new google.maps.marker.PinView({
  glyph: icon10,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_N = new google.maps.marker.PinView({
  glyph: icon11,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_K = new google.maps.marker.PinView({
  glyph: icon12,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_Q = new google.maps.marker.PinView({
  glyph: icon13,
  glyphColor: "#54CE45",
  background: "black",
  borderColor: "#54CE45",
});

const ed_O = new google.maps.marker.PinView({
  glyph: icon14,
  glyphColor: "#D51919",
  background: "white",
  borderColor: "black",
});

const gim = new google.maps.marker.PinView({
  glyph: icon15,
  glyphColor: "#D51919",
  background: "white",
  borderColor: "black",
});

const ed_G = new google.maps.marker.PinView({
  glyph: icon16,
  glyphColor: "white",
  background: "#F7B300",
  borderColor: "black",
});

const ed_E = new google.maps.marker.PinView({
  glyph: icon17,
  glyphColor: "#1ECBBE",
  background: "black",
  borderColor: "white",
});

const comida = new google.maps.marker.PinView({
  glyph: icon18,
  glyphColor: "white",
  background: "#F7B300",
  borderColor: "black",
});

const par = new google.maps.marker.PinView({
  glyph: icon19,
  glyphColor: "white",
  background: "#3A54E7",
  borderColor: "black",
});
/*--------------------------------------------------*/ 

/*DISENO DE LOS MARCADORES*/
    /*DISENO DEL MARCADOR PARA EL EDIFICIO F*/ 
    const markerViewWithText = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat:31.59929529276121,lng: -106.40795157969426 },
      content:faPinVie.element
    });
      
    /*DISENO DEL MARCADOR DEL EDIFICIO H*/ 
        const ma = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.599431565645222,lng: -106.40911098486548},
      content:faPinView.element
    });

    const Edi_i = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.598917915414358,lng: -106.40919031989917},
      content:faPinVi.element
    });

    const Edi_J = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.599221470358714,lng: -106.40984724788179},
      content:faPinV.element
    });

    const Edi_D = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat: 31.599174242739334,lng:-106.40688235174557},
      content:ed_D.element
    });

    const Edi_C = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.599479264310016,lng: -106.40619485970934},
      content:ed_C.element
    });

    const Edi_A = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat: 31.598702243057993,lng:  -106.40624100312519},
      content:ed_A.element
    });

    const Edi_B = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.599094370328547,lng: -106.40556096057539},
      content:ed_B.element
    });

    const Edi_M = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.59865762051365,lng: -106.40529510289255},
      content:ed_M.element
    });

    const Edi_L = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat: 31.598126814370456,lng:-106.40707051866723},
      content:ed_L.element
    });

    const Edi_N = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat: 31.59817560661038,lng:-106.40774361873234},
      content:ed_N.element
    });

    const Edi_K = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.597574273020054,lng:-106.4063770345353},
      content:ed_K.element
    });

    const Edi_Q = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.59756665447705,lng: -106.40768992739129},
      content:ed_Q.element
    });

    const Edi_O = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.600418529266502,lng:-106.40912028817208},
      content:ed_O.element
    });

    const gym = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.601027885297352,lng: -106.40787673916566},
      content:gim.element
    });

    const Edi_G = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.598790813439397,lng:-106.40746263412886},
      content:ed_G.element
    });

    
    const Edi_E = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat: 31.598733666038473,lng:-106.40698101068129},
      content:ed_E.element
    });

    const puesto = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.59998487787727,lng: -106.40501558739774},
      content:comida.element
    });

    const estacionamiento = new google.maps.marker.AdvancedMarkerView({
      map,
      position: {lat:31.600046159089587,lng: -106.41012435747783},
      content:par.element
    });

    /*------------------------------------------------------*/ 

    /*FUNCION QUE AL DAR CLICK A UN MARCADOR ABRA LA VENTANA DE INFORMACION*/ 
    edificio_J.addListener("click", () => {
      infowindow.open(map,edificio_J );
    });

    marcador.addListener("click", () => {
      info_I.open(map,marcador );
    });

    edificio_H.addListener("click", () => {
      info_H.open(map,edificio_H );
    });

    Edificio_O.addListener("click", () => {
      informacion_o.open(map,Edificio_O );
    });

    Edificio_N.addListener("click", () => {
      info_N.open(map,Edificio_N );
    });

    Edificio_L.addListener("click", () => {
      info_L.open(map,Edificio_L);
    });

    Edificio_K.addListener("click", () => {
      info_K.open(map,Edificio_K);
    });

    Edificio_F.addListener("click", () => {
      info_F.open(map,Edificio_F);
    });

    Edificio_A.addListener("click", () => {
      info_A.open(map,Edificio_A);
    });
    
    Edificio_C.addListener("click", () => {
      info_C.open(map,Edificio_C);
    });

    Edificio_D.addListener("click", () => {
      info_D.open(map,Edificio_D);
    });

    Edificio_Q.addListener("click", () => {
      info_Q.open(map,Edificio_Q);
    });

    Edificio_E.addListener("click", () => {
      info_E.open(map,Edificio_E);
    });

    Edificio_G.addListener("click", () => {
      info_G.open(map,Edificio_G);
    });

    Edificio_B.addListener("click", () => {
      info_B.open(map,Edificio_B);
    });

    Edificio_M.addListener("click", () => {
      info_M.open(map,Edificio_M);
    });

    Gimnasio.addListener("click", () => {
      gimnasio.open(map,Gimnasio);
    });
    /*-------------------------------------------------------------------------*/ 
/*
    ma.addListener("mouseover", () => {
      infowindow.open(map,ma );
    });
*/   
    /*
   
*/

/*Esta funcion nos sirve que al momento de presionar un boton de dirije hacia el punto y da un zoom aparte*/ 
document.getElementById('button').addEventListener('click', function () {
    map.setCenter({ lat: 31.59909742322683, lng: -106.40569793638133});
    map.setZoom(20);
});
/*------------------------------------------------------------------------------------------------*/ 

/*Esta funcion sirve para que el mismo boton te muestre un contenedor con informacion*/ 
document.getElementById("button").addEventListener("click", function() {
    var contenedorInterno = document.getElementById("contenedorInterno");
    contenedorInterno.style.display = contenedorInterno.style.display === "none" ? "block" : "none";
  });
/*-------------------------------------------------------------------------------------------------*/ 

/*Funcion que nos sirve para cerrar el contenedor*/ 
  document.getElementById("cerrarContenedorBtn").addEventListener("click", function() {
    document.getElementById("contenedorInterno").style.display = "none";
  });
/*-------------------------------------------------------------------------------------------------*/ 

/*Cerrar el contenedor de becas*/ 
  document.getElementById("cerrar_beca").addEventListener("click", function() {
    document.getElementById("contenedor_beca").style.display = "none";
  });

/*---------------------------------------------------------------------------*/  

/*cerrar el contenedor de biblioteca*/
document.getElementById("cerrar_biblioteca").addEventListener("click", function() {
  document.getElementById("contenedor_biblioteca").style.display = "none";
});

/*cerrar contenedor de servicios*/
document.getElementById("cerrar_servicios").addEventListener("click", function() {
  document.getElementById("contenedor_servicios").style.display = "none";
});

/*Cerrar contenedor de servicios medicos*/ 
document.getElementById("cerrar_medico").addEventListener("click", function() {
  document.getElementById("contenedor_medico").style.display = "none";
});

/*Cerrar contenedor de toro shop*/ 
document.getElementById("cerrar_toro").addEventListener("click", function() {
  document.getElementById("contenedor_toro").style.display = "none";
});

/*Cerrar contenedor de unidad de apoyo Psicopedagogico*/ 
document.getElementById("cerrar_apoyo").addEventListener("click", function() {
  document.getElementById("contenedor_apoyo").style.display = "none";
});


/*------------BOTONES DE CONTENEDORES DE DIRECCIONES DE CARRERA-------------*/
document.getElementById("cerrar_contaduria").addEventListener("click", function() {
  document.getElementById("contenedor_contaduria").style.display = "none";
});
document.getElementById("cerrar_energias").addEventListener("click", function() {
  document.getElementById("contenedor_energias").style.display = "none";
});
document.getElementById("cerrar_innovacion").addEventListener("click", function() {
  document.getElementById("contenedor_innovacion").style.display = "none";
});
document.getElementById("cerrar_mecatronica").addEventListener("click", function() {
  document.getElementById("contenedor_mecatronica").style.display = "none";
});
document.getElementById("cerrar_mercadotecnia").addEventListener("click", function() {
  document.getElementById("contenedor_mercadotecnia").style.display = "none";
});
document.getElementById("cerrar_mantenimiento").addEventListener("click", function() {
  document.getElementById("contenedor_mantenimiento").style.display = "none";
});
document.getElementById("cerrar_nanotecnologia").addEventListener("click", function() {
  document.getElementById("contenedor_nanotecnologia").style.display = "none";
});
document.getElementById("cerrar_proteccion").addEventListener("click", function() {
  document.getElementById("contenedor_proteccion").style.display = "none";
});
document.getElementById("cerrar_procesos").addEventListener("click", function() {
  document.getElementById("contenedor_procesos").style.display = "none";
});
document.getElementById("cerrar_terapia").addEventListener("click", function() {
  document.getElementById("contenedor_terapia").style.display = "none";
});
document.getElementById("cerrar_tecnologias").addEventListener("click", function() {
  document.getElementById("contenedor_tecnologias").style.display = "none";
});
/*------------------------------------------------------------------------------*/  

  /*Dar a las variables un nombre y la funcion de donde son*/ 
const bibliotecaLink = document.querySelector('.submenu1 a[href="#biblioteca"]');
const serviciosLink = document.querySelector('.submenu1 a[href="#serviciosE"]');
const becasLink = document.querySelector('.submenu1 a[href="#beca"]');
const medicoLink = document.querySelector('.submenu1 a[href="#medico"]');
const toroLink = document.querySelector('.submenu1 a[href="#toro"]');
const unidadLink = document.querySelector('.submenu1 a[href="#unidad"]');
const centroLink = document.querySelector('.submenu1 a[href="#idiomas"]');
/*Funcion para al momento de aplastar uno de los submenus el mapa se movera ala coordenada y tambien al mismo tiempo se podra cerrar*/ 
  bibliotecaLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({ lat: 31.598733666038473,lng:-106.40698101068129 }); // Edificio E
    map.setZoom(20);
    var contenedor_biblioteca = document.getElementById("contenedor_biblioteca");
    contenedor_biblioteca.style.display = contenedor_biblioteca.style.display === "none" ? "block" : "none";
  });

  serviciosLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({lat:31.59929529276121,lng:-106.40795157969426}); // Coordenadas del Edificio F
    map.setZoom(20);
    var contenedor_servicios = document.getElementById("contenedor_servicios");
    contenedor_servicios.style.display = contenedor_servicios.style.display === "none" ? "block" : "none";
  });

  becasLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({lat:31.59929529276121,lng:-106.40795157969426}); // Coordenadas del Edificio F
    map.setZoom(20);
    var contenedor_beca = document.getElementById("contenedor_beca");
    contenedor_beca.style.display = contenedor_beca.style.display === "none" ? "block" : "none";
  });

  medicoLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({lat:31.599479264310016,lng: -106.40619485970934}); // Coordenadas del edificio C
    map.setZoom(20);
    var contenedor_medico = document.getElementById("contenedor_medico");
    contenedor_medico.style.display = contenedor_medico.style.display === "none" ? "block" : "none";
  });

  toroLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({lat:31.59929529276121,lng:-106.40795157969426}); // Coordenadas del edificio F
    map.setZoom(20);
    var contenedor_toro = document.getElementById("contenedor_toro");
    contenedor_toro.style.display = contenedor_toro.style.display === "none" ? "block" : "none";
  });

  unidadLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({lat:31.59756665447705,lng: -106.40768992739129}); // Coordenadas del edificio I
    map.setZoom(20);
    var contenedor_apoyo = document.getElementById("contenedor_apoyo");
    contenedor_apoyo.style.display = contenedor_apoyo.style.display === "none" ? "block" : "none";
  });

  centroLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({lat: 31.598702243057993,lng:  -106.40624100312519}); // Coordenadas del edificio A
    map.setZoom(20);
    var contenedor_apoyo = document.getElementById("contenedor_apoyo");
    contenedor_apoyo.style.display = contenedor_apoyo.style.display === "none" ? "block" : "none";
  });
  /*-------------------------------------------------------------------------------------------------------*/ 

  /*Funcion de variables de direcciones de carrera*/
  const contaduriaLink = document.querySelector('.submenu2 a[href="#contaduria"]');
   const energiasLink=document.querySelector('.submenu2 a[href="#energias"]');
  const innovacionLink=document.querySelector('.submenu2 a[href="#innovacion"]');
  const mecatronicaLink=document.querySelector('.submenu2 a[href="#mecatronica"]');
  const mercadotecniaLink=document.querySelector('.submenu2 a[href="#mercadotecnia"]');
  const mantenimientoLink=document.querySelector('.submenu2 a[href="#mantenimiento"]');
  const nanotecnologiaLink=document.querySelector('.submenu2 a[href="#nanotecnologia"]');
  const proteccionLink=document.querySelector('.submenu2 a[href="#proteccion"]');
  const procesosLink=document.querySelector('.submenu2 a[href="#procesos"]');
  const terapiaLink=document.querySelector('.submenu2 a[href="#terapia"]');
  const tecnologiasLink=document.querySelector('.submenu2 a[href="#tecnologias"]');
  /*----------------------------------------------*/  

  /*Funcion para la ubicacion de las direcciones de carrera*/
  contaduriaLink.addEventListener('click', () => {
    // Mover el mapa al centro de la ubicación deseada
    map.panTo({lat:31.597574273020054,lng:-106.4063770345353}); // Coordenadas del edificio I
    map.setZoom(20);
    var contenedor_contaduria = document.getElementById("contenedor_contaduria");
    contenedor_contaduria.style.display = contenedor_contaduria.style.display === "none" ? "block" : "none";
  });
   energiasLink.addEventListener('click',()=>{
    map.panTo({lat:31.599479264310016,lng: -106.40619485970934}); // Coordenadas de energias renovables
    map.setZoom(20);
    var contenedor_energias = document.getElementById("contenedor_energias");
    contenedor_energias.style.display = contenedor_energias.style.display === "none" ? "block" : "none";
  });

  innovacionLink.addEventListener('click',()=>{
    map.panTo({lat:31.597574273020054,lng:-106.4063770345353}); // Coordenadas de innovacion
    map.setZoom(20);
    var contenedor_innovacion = document.getElementById("contenedor_innovacion");
    contenedor_innovacion.style.display = contenedor_innovacion.style.display === "none" ? "block" : "none";
  });

  mecatronicaLink.addEventListener('click',()=>{
    map.panTo({lat:31.599479264310016,lng: -106.40619485970934}); // Coordenadas de mecatronica
    map.setZoom(20);
    var contenedor_mecatronica = document.getElementById("contenedor_mecatronica");
    contenedor_mecatronica.style.display = contenedor_mecatronica.style.display === "none" ? "block" : "none";
  });

  mercadotecniaLink.addEventListener('click',()=>{
    map.panTo({lat:31.599479264310016,lng: -106.40619485970934}); // Coordenadas de mercadotecnia
    map.setZoom(20);
    var contenedor_mercadotecnia = document.getElementById("contenedor_mercadotecnia");
    contenedor_mercadotecnia.style.display = contenedor_mercadotecnia.style.display === "none" ? "block" : "none";
  });

  mantenimientoLink.addEventListener('click',()=>{
    map.panTo({lat:31.599479264310016,lng: -106.40619485970934}); // Coordenadas de mantenimiento
    map.setZoom(20);
    var contenedor_mantenimiento = document.getElementById("contenedor_mantenimiento");
    contenedor_mantenimiento.style.display = contenedor_mantenimiento.style.display === "none" ? "block" : "none";
  });

  nanotecnologiaLink.addEventListener('click',()=>{
    map.panTo({lat:31.599479264310016,lng: -106.40619485970934}); // Coordenadas de nanotecnologia
    map.setZoom(20);
    var contenedor_nanotecnologia = document.getElementById("contenedor_nanotecnologia");
    contenedor_nanotecnologia.style.display = contenedor_nanotecnologia.style.display === "none" ? "block" : "none";
  });

  proteccionLink.addEventListener('click',()=>{
    map.panTo({lat:31.600418529266502,lng:-106.40912028817208}); // Coordenadas de nanotecnologia
    map.setZoom(20);
    var contenedor_proteccion = document.getElementById("contenedor_proteccion");
    contenedor_proteccion.style.display = contenedor_proteccion.style.display === "none" ? "block" : "none";
  });

  procesosLink.addEventListener('click',()=>{
    map.panTo({lat:31.598917915414358,lng: -106.40919031989917}); // Coordenadas de procesos industriales
    map.setZoom(20);
    var contenedor_procesos = document.getElementById("contenedor_procesos");
    contenedor_procesos.style.display = contenedor_procesos.style.display === "none" ? "block" : "none";
  });

  terapiaLink.addEventListener('click',()=>{
    map.panTo({lat:31.600418529266502,lng:-106.40912028817208}); // Coordenadas de proteccion civil
    map.setZoom(20);
    var contenedor_terapia = document.getElementById("contenedor_terapia");
    contenedor_terapia.style.display = contenedor_terapia.style.display === "none" ? "block" : "none";
  });

  tecnologiasLink.addEventListener('click',()=>{
    map.panTo({lat:31.598917915414358,lng: -106.40919031989917}); // Coordenadas de tecnologias de informacion
    map.setZoom(20);
    var contenedor_tecnologias = document.getElementById("contenedor_tecnologias");
    contenedor_tecnologias.style.display = contenedor_tecnologias.style.display === "none" ? "block" : "none";
  });
  /*-------------------------------------------------------*/  
  /*VARIABLES DE PROFESORES*/
  const trejoLink=document.querySelector('.submenu3 a[href="#trejo"]');
  const cristianLink=document.querySelector('.submenu3 a[href="#cristian"]');
  const hectorLink=document.querySelector('.submenu3 a[href="#hector"]');
  const rosaLink=document.querySelector('.submenu3 a[href="#rosa"]');
  const lozoyaLink=document.querySelector('.submenu3 a[href="#lozoya"]');
  /*------------------------*/  
  
  /*UBICACIONES DE PROFESORES*/
    trejoLink.addEventListener('click',()=>{
    map.panTo({lat:31.599431565645222,lng: -106.40911098486548}); // Coordenadas de tecnologias de informacion
    map.setZoom(20);
    var contenedor_trejo= document.getElementById("contenedor_trejo");
    contenedor_trejo.style.display = contenedor_trejo.style.display === "none" ? "block" : "none";
  });

  cristianLink.addEventListener('click',()=>{
    map.panTo({lat:31.599431565645222,lng: -106.40911098486548}); // Coordenadas de tecnologias de informacion
    map.setZoom(20);
    var contenedor_cristian= document.getElementById("contenedor_cristian");
    contenedor_cristian.style.display = contenedor_cristian.style.display === "none" ? "block" : "none";
  });

  hectorLink.addEventListener('click',()=>{
    map.panTo({lat:31.599431565645222,lng: -106.40911098486548}); // Coordenadas de tecnologias de informacion
    map.setZoom(20);
    var contenedor_hector= document.getElementById("contenedor_hector");
    contenedor_hector.style.display = contenedor_hector.style.display === "none" ? "block" : "none";
  });

  rosaLink.addEventListener('click',()=>{
    map.panTo({lat:31.599431565645222,lng: -106.40911098486548}); // Coordenadas de tecnologias de informacion
    map.setZoom(20);
    var contenedor_rosa= document.getElementById("contenedor_rosa");
    contenedor_rosa.style.display = contenedor_rosa.style.display === "none" ? "block" : "none";
  });

  lozoyaLink.addEventListener('click',()=>{
    map.panTo({lat:31.599431565645222,lng: -106.40911098486548}); // Coordenadas de tecnologias de informacion
    map.setZoom(20);
    var contenedor_lozoya= document.getElementById("contenedor_lozoya");
    contenedor_lozoya.style.display = contenedor_lozoya.style.display === "none" ? "block" : "none";
  });
  /*------------------------*/ 
  /*BOTONES PARA CERRAR CONTENEDORES*/
  document.getElementById("cerrar_trejo").addEventListener("click", function() {
    document.getElementById("contenedor_trejo").style.display = "none";
  });

  document.getElementById("cerrar_cristian").addEventListener("click", function() {
    document.getElementById("contenedor_cristian").style.display = "none";
  });

  document.getElementById("cerrar_hector").addEventListener("click", function() {
    document.getElementById("contenedor_hector").style.display = "none";
  });

  document.getElementById("cerrar_rosa").addEventListener("click", function() {
    document.getElementById("contenedor_rosa").style.display = "none";
  });

  document.getElementById("cerrar_lozoya").addEventListener("click", function() {
    document.getElementById("contenedor_lozoya").style.display = "none";
  });
  /*--------------------------------*/ 
  /*VARIABLES PARA LA UBICACION DE LOS EDIFICIOS*/
  const edificioALink = document.querySelector('.submenu a[href="#edificioA"]');
  const edificioBLink = document.querySelector('.submenu a[href="#edificioB"]');
  const edificioCLink = document.querySelector('.submenu a[href="#edificioC"]');
  const edificioDLink = document.querySelector('.submenu a[href="#edificioD"]');
  const edificioELink = document.querySelector('.submenu a[href="#edificioE"]');
  const edificioFLink = document.querySelector('.submenu a[href="#edificioF"]');
  const edificioGLink = document.querySelector('.submenu a[href="#edificioG"]');
  const edificioHLink = document.querySelector('.submenu a[href="#edificioH"]');
  const edificioILink = document.querySelector('.submenu a[href="#edificioI"]');
  const edificioJLink = document.querySelector('.submenu a[href="#edificioJ"]');
  const edificioKLink = document.querySelector('.submenu a[href="#edificioK"]');
  const edificioLLink = document.querySelector('.submenu a[href="#edificioL"]');
  const edificioMLink = document.querySelector('.submenu a[href="#edificioM"]');
  const edificioNLink = document.querySelector('.submenu a[href="#edificioN"]');
  const edificioOLink = document.querySelector('.submenu a[href="#edificioO"]');
  const edificioQLink = document.querySelector('.submenu a[href="#edificioQ"]');
  const gimnasioLink = document.querySelector('.submenu a[href="#gimnasio"]');
  /*--------------------------------------------*/ 

  /*FUNCION DE UBICACION PARA LOS EDIFICIOS*/
  edificioALink.addEventListener('click',()=>{
    map.panTo({lat: 31.598702243057993,lng:  -106.40624100312519}); // Coordenadas del edificio A
    map.setZoom(20);
  });
  edificioBLink.addEventListener('click',()=>{
    map.panTo({lat:31.599094370328547,lng: -106.40556096057539}); // Coordenadas del edificio B
    map.setZoom(20);
  });
  edificioCLink.addEventListener('click',()=>{
    map.panTo({lat:31.599479264310016,lng: -106.40619485970934}); // Coordenadas del edificio C
    map.setZoom(20);
  });
  edificioDLink.addEventListener('click',()=>{
    map.panTo({lat: 31.599174242739334,lng:-106.40688235174557}); // Coordenadas del edificio D
    map.setZoom(20);
  });
  edificioELink.addEventListener('click',()=>{
    map.panTo({ lat: 31.598733666038473,lng:-106.40698101068129 }); // Edificio E
    map.setZoom(20);
  });
  edificioFLink.addEventListener('click',()=>{
    map.panTo({lat:31.59929529276121,lng:-106.40795157969426 }); // Coordenadas del edificio F
    map.setZoom(20);
  });
  edificioGLink.addEventListener('click',()=>{
    map.panTo({lat:31.598790813439397,lng:-106.40746263412886 }); // Coordenadas del edificio G
    map.setZoom(20);
  });
  edificioHLink.addEventListener('click',()=>{
    map.panTo({lat:31.599431565645222,lng: -106.40911098486548}); // Coordenadas del edificio H
    map.setZoom(20);
  });
  edificioILink.addEventListener('click',()=>{
    map.panTo({lat:31.598917915414358,lng: -106.40919031989917}); // Coordenadas del edificio I
    map.setZoom(20);
  });
  edificioJLink.addEventListener('click',()=>{
    map.panTo({lat:31.599221470358714,lng: -106.40984724788179}); // Coordenadas del edificio J
    map.setZoom(20);
  });
  edificioKLink.addEventListener('click',()=>{
    map.panTo({lat:31.597574273020054,lng:-106.4063770345353}); // Coordenadas del edificio K
    map.setZoom(20);
  });
  edificioLLink.addEventListener('click',()=>{
    map.panTo({lat: 31.598126814370456,lng:-106.40707051866723}); // Coordenadas del edificio L
    map.setZoom(20);
  });
  edificioMLink.addEventListener('click',()=>{
    map.panTo({lat:31.59865762051365,lng: -106.40529510289255}); // Coordenadas del edificio M
    map.setZoom(20);
  });
  edificioNLink.addEventListener('click',()=>{
    map.panTo({lat: 31.59817560661038,lng:-106.40774361873234}); // Coordenadas del edificio N
    map.setZoom(20);
  });
  edificioOLink.addEventListener('click',()=>{
    map.panTo({lat:31.600418529266502,lng:-106.40912028817208}); // Coordenadas del edificio O
    map.setZoom(20);
  });
  edificioQLink.addEventListener('click',()=>{
    map.panTo({lat:31.59756665447705,lng: -106.40768992739129}); // Coordenadas del edificio Q
    map.setZoom(20);
  });
  gimnasioLink.addEventListener('click',()=>{
    map.panTo({lat:31.601027885297352,lng: -106.40787673916566}); // Coordenadas de tecnologias de informacion
    map.setZoom(20);
  });

  /*--------------------*/ 
  /*BUSCA TU UBICACION ACTUAL*/ 
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Busca tu ubicacion actual";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setZoom(25);
          infoWindow.setPosition(pos);
          infoWindow.setContent("Aqui estas tu");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
  /*-----------------------------------------------------------------*/ 
}

window.initMap = initMap;
