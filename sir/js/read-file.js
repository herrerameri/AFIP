(function () {
  'use strict';     

  const procesarCompras = document.getElementById('procesar-compras');
  const procesarVentas = document.getElementById('procesar-ventas');

  function inputValidas(archivo, nroHoja){
    return archivo.files.length > 0 && parseInt(nroHoja); 
  }

  function limpiarError(campoError){
    campoError.innerHTML = '';
  }

  function mostrarMensaje(campo, texto){
    campo.innerHTML = texto;
  }

  function downloadTxt(lineas){
      var body = lineas.join('\n');
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(body));
      element.setAttribute('download', 'Salida.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
  }

  procesarCompras.addEventListener('click', () => { 
      const archivoCompras = document.getElementById('xls-compras');
      const hojaCompras = document.getElementById('xls-compras-hoja').value;
      const errorCompras = document.getElementById('error-compras');
      limpiarError(errorCompras);

      if(inputValidas(archivoCompras, hojaCompras)){     
        readXlsxFile(archivoCompras.files[0], { sheet: parseInt(hojaCompras) }).then((rows) => {
              console.log(rows)
          })
          return;
      }
      mostrarMensaje(errorCompras, 'Se necesita un archivo y número de hoja.')      
  });

  procesarVentas.addEventListener('click', () => {  
      const archivoVentas = document.getElementById('xls-ventas');
      const hojaVentas = document.getElementById('xls-ventas-hoja').value;
      const errorVentas = document.getElementById('error-ventas');   
      const resultadoVentas = document.getElementById('resultado-ventas');   
      limpiarError(errorVentas);

      if(inputValidas(archivoVentas, hojaVentas)){
        readXlsxFile(archivoVentas.files[0], { schema: schemaVentas, sheet: parseInt(hojaVentas) })
          .then(({rows, err}) => {
              if (err) {
                mostrarMensaje(errorVentas, err);
                return;
              }
              var ventas = []; 
              var lineasSalida = [];
              rows.splice(-1,1); //quito la última row
              rows.forEach((row) => ventas.push(new Venta(row)));
              ventas.forEach((venta) => lineasSalida.push(venta.toString()));
              mostrarMensaje(resultadoVentas, 'Se procesaron ' + lineasSalida.length + ' líneas.')              
              return downloadTxt(lineasSalida);
          })
          return;
      }              
      mostrarError(errorVentas, 'Se necesita un archivo y número de hoja.')      
  });

})();