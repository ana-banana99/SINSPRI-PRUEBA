function FormularioSign() {
    var formulario = [
      '<th><label for="nombre">Nombre</label></th>',
      '<th><input type="text" name="nombre" id="nombre_Tutor" /></th>',
      '<th><label for="apellidoP">Apellido paterno</label></th>',
      '<th><input type="text" name="apellidoP" id="apellid_pat_Tutor" /></th>',
      '<th><label for="apellidoM">Apellido materno</label></th>',
      '<th><input type="text" name="apellidoM" id="apellid_mat_Tutor" /></th>',
      '<th><label for="curp">CURP</label></th>',
      '<th><input type="text" name="curp" id="curp_Tutor" /></th>',
      '<th><label for="fechaN">Fecha de nacimiento</label></th>',
      '<th><input type="text" name="fechaN" id="fecha_nacimiento_Tutor" /></th>',
      '<th><label for="telefono">Telefono</label></th>',
      '<th><input type="text" name="telefono" id="telefono_Tutor" /></th>',
      '<th><label for="ciudad">Ciudad</label></th>',
      '<th><input type="text" name="ciudad" id="ciudad_Tutor" /></th>',
      '<th><label for="estado">Estado</label></th>',
      '<th><input type="text" name="estado" id="estado_Tutor" /></th>',
      '<th><label for="direccion">Direccion</label></th>',
      '<th><input type="text" name="direccion" id="direccion_Tutor" /></th>',
      '<th><label for="clave">Clave de elector</label></th>',
      '<th><input type="text" name="clave" id="clave_Elector_Tutor" /></th>',
      '<th><label for="email">Correo electrónico</label></th>',
      '<th><input type="text" name="email" id="email_Tutor" /></th>',
      '<th><label for="pass">Contraseña</label></th>',
      '<th><input type="text" name="pass" id="pass_Tutor" /></th>',
    ];
    var oTbl = document.getElementById("tablaForm");
    var oLin = oTbl.insertRow(-1);
    var oCelda1 = oLin.insertCell(0);
    var oCelda2 = oLin.insertCell(1);
    oCelda1 = formulario[0];
    oCelda2 = formulario[1];
    var oLin2 = oTbl.insertRow(-1);
    var oCelda3 = oLin2.insertCell(0);
    var oCelda4 = oLin2.insertCell(1);
    oCelda3 = formulario[2];
    oCelda4 = formulario[3];
    var oLin3 = oTbl.insertRow(-1);
    var oCelda5 = oLin3.insertCell(0);
    var oCelda6 = oLin3.insertCell(1);

    var oLin4 = oTbl.insertRow(-1);
    var oCelda7 = oLin4.insertCell(0);
    var oCelda8 = oLin4.insertCell(1);

    var oLin5 = oTbl.insertRow(-1);
    var oCelda9 = oLin5.insertCell(0);
    var oCelda10 = oLin5.insertCell(1);

    var oLin6 = oTbl.insertRow(-1);
    var oCelda11 = oLin6.insertCell(0);
    var oCelda12 = oLin6.insertCell(1);

    var oLin7 = oTbl.insertRow(-1);
    var oCelda13 = oLin7.insertCell(0);
    var oCelda14 = oLin7.insertCell(1);

    var oLin8 = oTbl.insertRow(-1);
    var oCelda15 = oLin8.insertCell(0);
    var oCelda16 = oLin8.insertCell(1);

    var oLin9 = oTbl.insertRow(-1);
    var oCelda17 = oLin9.insertCell(0);
    var oCelda18 = oLin9.insertCell(1);

    var oLin10 = oTbl.insertRow(-1);
    var oCelda19 = oLin10.insertCell(0);
    var oCelda20 = oLin10.insertCell(1);

    var oLin11 = oTbl.insertRow(-1);
    var oCelda21 = oLin11.insertCell(0);
    var oCelda22 = oLin11.insertCell(1);

    var oLin12 = oTbl.insertRow(-1);
    var oCelda23 = oLin12.insertCell(0);
    var oCelda24 = oLin12.insertCell(1);
    var i = 0;
    for (i = 0; i < 2; i++) {
      oTbl.deleteRow(1);
    }

    for (i = 0; i < 24; i++) {
      switch (i) {
        case 0:
          oCelda1.innerHTML = formulario[i++];
          oCelda2.innerHTML = formulario[i];
          break;
        case 2:
          oCelda3.innerHTML = formulario[i++];
          oCelda4.innerHTML = formulario[i];
          break;
        case 4:
          oCelda5.innerHTML = formulario[i++];
          oCelda6.innerHTML = formulario[i];
          break;
        case 6:
          oCelda7.innerHTML = formulario[i++];
          oCelda8.innerHTML = formulario[i];
          break;
        case 8:
          oCelda9.innerHTML = formulario[i++];
          oCelda10.innerHTML = formulario[i];
          break;
        case 10:
          oCelda11.innerHTML = formulario[i++];
          oCelda12.innerHTML = formulario[i];
          break;
        case 12:
          oCelda13.innerHTML = formulario[i++];
          oCelda14.innerHTML = formulario[i];
          break;
        case 14:
          oCelda15.innerHTML = formulario[i++];
          oCelda16.innerHTML = formulario[i];
          break;
        case 16:
          oCelda17.innerHTML = formulario[i++];
          oCelda18.innerHTML = formulario[i];
          break;
        case 18:
          oCelda19.innerHTML = formulario[i++];
          oCelda20.innerHTML = formulario[i];
          break;
        case 20:
          oCelda21.innerHTML = formulario[i++];
          oCelda22.innerHTML = formulario[i];
          break;
        case 22:
          oCelda23.innerHTML = formulario[i++];
          oCelda24.innerHTML = formulario[i];
      }
    }
    var metodo = document.getElementById("upload");
    metodo.setAttribute("action", "reg.php");
}

function FormularioLog() {
    var oTbl = document.getElementById("tablaForm");
    var oLin = oTbl.insertRow(-1);
    var oCelda1 = oLin.insertCell(0);
    var oCelda2 = oLin.insertCell(1);
    var oLin2 = oTbl.insertRow(-1);
    var oCelda3 = oLin2.insertCell(0);
    var oCelda4 = oLin2.insertCell(1);
    var i = 0;
    for (i = 0; i < 12; i++) {
      oTbl.deleteRow(1);
    }
    oCelda1.innerHTML =
      '<th><label for="email">Correo electrónico</label></th>';
    oCelda2.innerHTML =
      '<th><input type="text" name="email" id="email_Tutor"/></th>';

    oCelda3.innerHTML = '<th><label for="pass">Contraseña</label></th>';
    oCelda4.innerHTML =
      '<th><input type="text" name="pass" id="pass_Tutor"/></th>';
    var metodo = document.getElementById("upload");
    metodo.setAttribute("action", "log.php");
}
